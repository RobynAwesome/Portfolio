import { useEffect, useRef, useState } from "react";
import {
  evidenceRelaySources,
  type EvidenceRelaySourceId,
} from "../data/evidenceRelay";
import { useThemeMode } from "./theme/ThemeModeProvider";

type KpgsSpatialStageProps = {
  selectedNodeId?: string;
  relaySourceId?: EvidenceRelaySourceId;
  className?: string;
};

const NODE_CAMERA: Record<string, { yaw: number; pitch: number; zoom: number }> = {
  core: { yaw: 0.35, pitch: 0.28, zoom: 8.2 },
  labs: { yaw: -0.55, pitch: 0.22, zoom: 7.6 },
  amaphu: { yaw: 0.85, pitch: 0.2, zoom: 7.8 },
  bookit: { yaw: -0.95, pitch: 0.35, zoom: 8.4 },
  graph: { yaw: 1.05, pitch: 0.3, zoom: 8.1 },
  rune: { yaw: 0.15, pitch: 0.55, zoom: 7.2 },
  relay: { yaw: 0, pitch: 0.62, zoom: 7.4 },
};

const RELAY_SOURCE_POSITIONS: Record<EvidenceRelaySourceId, [number, number, number]> = {
  cloud: [-2.35, 4.1, -0.7],
  local: [2.35, 4.1, -0.7],
  drive: [0, 4.75, 1.5],
};

const RELAY_SOURCE_COLOURS: Record<EvidenceRelaySourceId, number> = {
  cloud: 0x66d9ff,
  local: 0xc6d36f,
  drive: 0xffc66d,
};

const DOM_ALT =
  "A Kopano pavilion assembling from its foundation, columns, beams, and roof.";

/**
 * Progressive KPGSthree host.
 * WebGL is enhancement only — DOM content remains canonical.
 * KPGS + three load only inside the effect (code-split).
 */
export default function KpgsSpatialStage({
  selectedNodeId = "core",
  relaySourceId = "cloud",
  className = "",
}: KpgsSpatialStageProps) {
  const { mode, isReadMode, isCrazyMode } = useThemeMode();
  const hostRef = useRef<HTMLDivElement | null>(null);
  const selectedRef = useRef(selectedNodeId);
  const relaySourceRef = useRef<EvidenceRelaySourceId>(relaySourceId);
  const [failed, setFailed] = useState(false);
  const [active, setActive] = useState(false);
  const [title, setTitle] = useState("Kopano Pavilion");

  selectedRef.current = selectedNodeId;
  relaySourceRef.current = relaySourceId;

  const forceDom =
    isReadMode ||
    (typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches);

  useEffect(() => {
    if (forceDom || failed || !hostRef.current) {
      return;
    }

    let cancelled = false;
    let pavilion: { root: import("three").Group; update: (d: number, r?: boolean) => unknown; dispose: () => void } | null =
      null;
    let renderer: import("three").WebGLRenderer | null = null;
    let relayGroup: import("three").Group | null = null;
    let relayPulse: import("three").InstancedMesh | null = null;
    const relayMaterials = new Map<EvidenceRelaySourceId, import("three").MeshStandardMaterial>();
    const relayDisposables: Array<{ dispose: () => void }> = [];
    let frameId = 0;
    let last = performance.now();
    let detachUi: (() => void) | undefined;

    const boot = async () => {
      try {
        const [{ AdaptiveGovernor, createKopanoPavilion, kopanoPavilionContract }, three] =
          await Promise.all([import("@kopano-labs/kpgs-three"), import("three")]);

        if (cancelled || !hostRef.current) {
          return;
        }

        setTitle(kopanoPavilionContract.title);

        const governor = new AdaptiveGovernor({
          initialTier: "balanced",
          targetFrameMs: 20,
        });

        const width = hostRef.current.clientWidth || 640;
        const height = hostRef.current.clientHeight || 360;
        const scene = new three.Scene();
        const camera = new three.PerspectiveCamera(42, width / height, 0.1, 100);
        camera.position.set(6.4, 4.2, 8.2);
        camera.lookAt(0, 2.2, 0);

        renderer = new three.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
        renderer.setSize(width, height, false);
        renderer.setClearColor(0x000000, 0);
        hostRef.current.appendChild(renderer.domElement);

        const hemi = new three.HemisphereLight(0xfff1df, 0x1a2424, isCrazyMode ? 1.15 : 0.95);
        const key = new three.DirectionalLight(isCrazyMode ? 0x00f5ff : 0xffd7b0, isCrazyMode ? 1.2 : 0.85);
        key.position.set(4, 8, 3);
        scene.add(hemi, key);

        pavilion = createKopanoPavilion();
        scene.add(pavilion.root);

        relayGroup = new three.Group();
        relayGroup.name = "evidence-relay-snapshot";
        relayGroup.visible = false;

        const relayCentre = new three.Vector3(0, 3.75, 0.15);
        const relayOutput = new three.Vector3(0, 2.7, 1.75);
        const beaconGeometry = new three.SphereGeometry(0.23, 18, 12);
        const centreGeometry = new three.TorusGeometry(0.44, 0.1, 12, 36);
        const centreMaterial = new three.MeshStandardMaterial({
          color: 0xf4ead9,
          emissive: 0x5b4a37,
          emissiveIntensity: 0.35,
          metalness: 0.2,
          roughness: 0.4,
        });
        const centreMesh = new three.Mesh(centreGeometry, centreMaterial);
        centreMesh.position.copy(relayCentre);
        centreMesh.rotation.x = Math.PI / 2;
        relayGroup.add(centreMesh);

        for (const source of evidenceRelaySources) {
          const position = new three.Vector3(...RELAY_SOURCE_POSITIONS[source.id]);
          const material = new three.MeshStandardMaterial({
            color: RELAY_SOURCE_COLOURS[source.id],
            emissive: RELAY_SOURCE_COLOURS[source.id],
            emissiveIntensity: 0.2,
            roughness: 0.45,
          });
          const beacon = new three.Mesh(beaconGeometry, material);
          beacon.position.copy(position);
          relayMaterials.set(source.id, material);
          relayGroup.add(beacon);

          const lineGeometry = new three.BufferGeometry().setFromPoints([position, relayCentre]);
          const lineMaterial = new three.LineBasicMaterial({
            color: RELAY_SOURCE_COLOURS[source.id],
            transparent: true,
            opacity: 0.52,
          });
          relayGroup.add(new three.Line(lineGeometry, lineMaterial));
          relayDisposables.push(lineGeometry, lineMaterial, material);
        }

        const outputGeometry = new three.BufferGeometry().setFromPoints([relayCentre, relayOutput]);
        const outputMaterial = new three.LineBasicMaterial({
          color: 0xf4ead9,
          transparent: true,
          opacity: 0.72,
        });
        relayGroup.add(new three.Line(outputGeometry, outputMaterial));

        const outputBeaconGeometry = new three.OctahedronGeometry(0.28, 0);
        const outputBeaconMaterial = new three.MeshStandardMaterial({
          color: 0xf4ead9,
          emissive: 0x71583d,
          emissiveIntensity: 0.4,
          roughness: 0.35,
        });
        const outputBeacon = new three.Mesh(outputBeaconGeometry, outputBeaconMaterial);
        outputBeacon.position.copy(relayOutput);
        relayGroup.add(outputBeacon);

        const pulseGeometry = new three.SphereGeometry(0.075, 10, 8);
        const pulseMaterial = new three.MeshBasicMaterial({ color: 0xffffff });
        relayPulse = new three.InstancedMesh(pulseGeometry, pulseMaterial, 6);
        relayPulse.instanceMatrix.setUsage(three.DynamicDrawUsage);
        relayGroup.add(relayPulse);

        relayDisposables.push(
          beaconGeometry,
          centreGeometry,
          centreMaterial,
          outputGeometry,
          outputMaterial,
          outputBeaconGeometry,
          outputBeaconMaterial,
          pulseGeometry,
          pulseMaterial,
        );
        scene.add(relayGroup);
        setActive(true);

        pavilion.root.traverse((obj) => {
          const mesh = obj as import("three").Mesh;
          if (!mesh.isMesh) return;
          const material = mesh.material as import("three").MeshStandardMaterial;
          if (!material?.color) return;
          if (mode === "light") {
            material.color.offsetHSL(0.02, -0.08, 0.18);
            material.roughness = Math.min(1, material.roughness + 0.05);
          } else if (isCrazyMode) {
            material.emissive = new three.Color(0x102038);
            material.emissiveIntensity = 0.18;
          }
        });

        const resize = () => {
          if (!hostRef.current || !renderer) return;
          const w = hostRef.current.clientWidth;
          const h = hostRef.current.clientHeight;
          camera.aspect = w / Math.max(h, 1);
          camera.updateProjectionMatrix();
          const tier = governor.tier;
          const cap = tier === "high" ? 1.75 : tier === "balanced" ? 1.5 : 1.15;
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, cap));
          renderer.setSize(w, h, false);
        };

        const onVisibility = () => {
          if (document.hidden) {
            cancelAnimationFrame(frameId);
            frameId = 0;
          } else if (!frameId) {
            last = performance.now();
            frameId = requestAnimationFrame(tick);
          }
        };

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry) return;
            if (!entry.isIntersecting) {
              cancelAnimationFrame(frameId);
              frameId = 0;
            } else if (!frameId && !document.hidden) {
              last = performance.now();
              frameId = requestAnimationFrame(tick);
            }
          },
          { threshold: 0.12 },
        );
        observer.observe(hostRef.current);

        window.addEventListener("resize", resize);
        document.addEventListener("visibilitychange", onVisibility);

        const tick = (now: number) => {
          if (cancelled || !renderer || !pavilion) return;
          const delta = Math.min(48, now - last);
          last = now;
          const decision = governor.observe(delta, { reducedMotion: false });
          if (decision.next !== decision.previous) {
            resize();
          }

          const cam = NODE_CAMERA[selectedRef.current] ?? NODE_CAMERA.core;
          pavilion.root.rotation.y += (cam.yaw - pavilion.root.rotation.y) * 0.06;
          pavilion.root.rotation.x += (cam.pitch - pavilion.root.rotation.x) * 0.05;
          const desired = new three.Vector3(
            Math.sin(pavilion.root.rotation.y) * cam.zoom,
            3.4 + cam.pitch * 2.2,
            Math.cos(pavilion.root.rotation.y) * cam.zoom,
          );
          camera.position.lerp(desired, 0.05);
          camera.lookAt(0, 2.1, 0);

          if (relayGroup && relayPulse) {
            const relayVisible = selectedRef.current === "relay";
            relayGroup.visible = relayVisible;

            if (relayVisible) {
              const activeSource = relaySourceRef.current;
              relayMaterials.forEach((material, sourceId) => {
                material.emissiveIntensity = sourceId === activeSource ? 0.9 : 0.16;
              });

              const sourcePosition = new three.Vector3(...RELAY_SOURCE_POSITIONS[activeSource]);
              const relayCentre = new three.Vector3(0, 3.75, 0.15);
              const relayOutput = new three.Vector3(0, 2.7, 1.75);
              const matrix = new three.Matrix4();
              const rotation = new three.Quaternion();
              const scale = new three.Vector3();
              const position = new three.Vector3();
              const seconds = now * 0.001;

              for (let index = 0; index < 3; index += 1) {
                const progress = (seconds * 0.42 + index / 3) % 1;
                position.copy(sourcePosition).lerp(relayCentre, progress);
                const size = 0.65 + Math.sin(progress * Math.PI) * 0.45;
                scale.setScalar(size);
                matrix.compose(position, rotation, scale);
                relayPulse.setMatrixAt(index, matrix);
              }

              for (let index = 0; index < 3; index += 1) {
                const progress = (seconds * 0.35 + index / 3) % 1;
                position.copy(relayCentre).lerp(relayOutput, progress);
                const size = 0.55 + Math.sin(progress * Math.PI) * 0.35;
                scale.setScalar(size);
                matrix.compose(position, rotation, scale);
                relayPulse.setMatrixAt(index + 3, matrix);
              }

              relayPulse.instanceMatrix.needsUpdate = true;
              relayGroup.rotation.y = Math.sin(seconds * 0.32) * 0.08;
            }
          }

          pavilion.update(delta, false);
          renderer.render(scene, camera);
          frameId = requestAnimationFrame(tick);
        };

        frameId = requestAnimationFrame(tick);

        detachUi = () => {
          observer.disconnect();
          window.removeEventListener("resize", resize);
          document.removeEventListener("visibilitychange", onVisibility);
        };
      } catch {
        if (!cancelled) {
          setFailed(true);
          setActive(false);
        }
      }
    };

    void boot();

    return () => {
      cancelled = true;
      cancelAnimationFrame(frameId);
      detachUi?.();
      pavilion?.dispose();
      if (relayGroup) {
        relayGroup.removeFromParent();
      }
      relayDisposables.forEach((resource) => resource.dispose());
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
      setActive(false);
    };
  }, [forceDom, failed, mode, isCrazyMode]);

  if (forceDom || failed) {
    return (
      <div
        className={`kpgs-stage kpgs-stage--dom rounded-[24px] border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] p-5 ${className}`}
        role="img"
        aria-label={DOM_ALT}
      >
        <p className="brand-kicker">KPGS Spatial</p>
        <h4 className="mt-3 text-xl font-semibold tracking-[-0.04em] text-[var(--brand-text)]">{title}</h4>
        <p className="mt-3 text-sm leading-6 text-[var(--brand-soft-text)]">{DOM_ALT}</p>
        <p className="mt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
          {forceDom ? "Read / reduced-motion — DOM only" : "WebGL unavailable — DOM fallback"}
        </p>
        <p className="mt-2 text-sm text-[var(--brand-muted)]">Selected lane: {selectedNodeId}</p>
        {selectedNodeId === "relay" && (
          <ul className="mt-4 grid gap-2" aria-label="Evidence relay sources">
            {evidenceRelaySources.map((source) => (
              <li key={source.id} className="rounded-[12px] border border-[var(--brand-line)] p-3 text-sm">
                <span className="font-semibold text-[var(--brand-text)]">{source.title}</span>
                <span className="ml-2 text-[var(--brand-muted)]">{source.description}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div
      className={`kpgs-stage relative min-h-[220px] overflow-hidden rounded-[24px] border border-[var(--brand-line)] bg-[var(--brand-surface)] sm:min-h-[280px] ${className}`}
      aria-hidden={active ? true : undefined}
    >
      <div ref={hostRef} className="absolute inset-0" />
      <div className="pointer-events-none absolute bottom-3 left-3 rounded-full border border-[var(--brand-line)] bg-[var(--brand-surface-soft)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--brand-muted)]">
        {selectedNodeId === "relay" ? "Evidence relay · snapshot" : "KPGSthree · pin 8438843"}
      </div>
    </div>
  );
}

