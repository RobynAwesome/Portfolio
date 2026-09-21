/* global document, window */

import fs from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import puppeteer from "puppeteer";

const baseUrl = process.env.RELAY_PREVIEW_URL ?? "http://127.0.0.1:4173/";
const artifactDir = path.resolve("artifacts", "evidence-relay");
const viewports = [375, 390, 430, 768, 1024, 1440];

await fs.mkdir(artifactDir, { recursive: true });

const browser = await puppeteer.launch({
  headless: true,
  executablePath: process.env.RELAY_BROWSER_PATH ?? "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  args: ["--enable-webgl", "--use-angle=swiftshader"],
});

const report = {
  url: baseUrl,
  checkedAt: new Date().toISOString(),
  viewports: [],
  interaction: {},
  reducedMotion: {},
};

try {
  const page = await browser.newPage();

  for (const width of viewports) {
    await page.setViewport({ width, height: 900, deviceScaleFactor: 1 });
    await page.goto(baseUrl, { waitUntil: "networkidle0" });
    const dimensions = await page.evaluate(() => ({
      innerWidth: window.innerWidth,
      documentWidth: document.documentElement.scrollWidth,
      bodyWidth: document.body.scrollWidth,
    }));
    report.viewports.push({
      width,
      ...dimensions,
      overflow: Math.max(dimensions.documentWidth, dimensions.bodyWidth) > dimensions.innerWidth + 1,
    });
  }

  await page.setViewport({ width: 1440, height: 1100, deviceScaleFactor: 1 });
  await page.goto(baseUrl, { waitUntil: "networkidle0" });

  const relayNode = 'button[aria-label="Select Evidence Relay"]';
  await page.waitForSelector(relayNode, { visible: true });
  await page.click(relayNode);
  await page.waitForFunction(() =>
    [...document.querySelectorAll("h4")].some((heading) => heading.textContent?.trim() === "Evidence Relay"),
  );

  const selections = {};
  for (const source of ["Cloud", "Local", "Drive"]) {
    const selector = `button[aria-pressed][type="button"]`;
    const button = await page.evaluateHandle(
      ({ selector, source }) =>
        [...document.querySelectorAll(selector)].find((element) => element.textContent?.trim() === source),
      { selector, source },
    );
    const element = button.asElement();
    if (!element) throw new Error(`Missing relay source button: ${source}`);
    await element.click();
    selections[source.toLowerCase()] = await page.evaluate(
      (sourceName) => {
        const sourceButton = [...document.querySelectorAll('button[aria-pressed][type="button"]')].find(
          (candidate) => candidate.textContent?.trim() === sourceName,
        );
        const liveRegion = document.querySelector('[aria-live="polite"]');
        return {
          pressed: sourceButton?.getAttribute("aria-pressed"),
          detail: liveRegion?.textContent?.replace(/\s+/g, " ").trim(),
        };
      },
      source,
    );
    await button.dispose();
  }

  const localButton = await page.evaluateHandle(() =>
    [...document.querySelectorAll('button[aria-pressed][type="button"]')].find(
      (candidate) => candidate.textContent?.trim() === "Local",
    ),
  );
  const localElement = localButton.asElement();
  if (!localElement) throw new Error("Missing Local relay source button for keyboard test");
  await localElement.focus();
  await page.keyboard.press("Space");
  const keyboardPressed = await page.evaluate(() =>
    [...document.querySelectorAll('button[aria-pressed][type="button"]')].find(
      (candidate) => candidate.textContent?.trim() === "Local",
    )?.getAttribute("aria-pressed"),
  );
  await localButton.dispose();

  await page.evaluate(() =>
    document.querySelector('button[aria-label="Select Evidence Relay"]')?.scrollIntoView({ block: "center" }),
  );
  await new Promise((resolve) => setTimeout(resolve, 700));

  report.interaction = {
    selections,
    keyboardPressed,
    canvasPresent: (await page.$$(".kpgs-stage canvas")).length > 0,
    snapshotNotePresent: await page.evaluate(() =>
      document.body.textContent?.includes("these sources are not presented as live-synchronised"),
    ),
  };

  await page.screenshot({
    path: path.join(artifactDir, "desktop.png"),
    fullPage: true,
  });
  const spatialStage = await page.$(".kpgs-stage");
  if (spatialStage) {
    await spatialStage.screenshot({ path: path.join(artifactDir, "spatial-stage.png") });
  }

  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1 });
  await page.goto(baseUrl, { waitUntil: "networkidle0" });
  await page.click(relayNode);
  await page.evaluate(() =>
    document.querySelector('button[aria-label="Select Evidence Relay"]')?.scrollIntoView({ block: "center" }),
  );
  await new Promise((resolve) => setTimeout(resolve, 500));
  await page.screenshot({
    path: path.join(artifactDir, "mobile.png"),
    fullPage: false,
  });
  const mobileOrbit = await page.$(".mode-orbit-shell");
  if (mobileOrbit) {
    await mobileOrbit.screenshot({ path: path.join(artifactDir, "mobile-orbit.png") });
  }

  await page.emulateMediaFeatures([{ name: "prefers-reduced-motion", value: "reduce" }]);
  await page.setViewport({ width: 1280, height: 900, deviceScaleFactor: 1 });
  await page.goto(baseUrl, { waitUntil: "networkidle0" });
  await page.click(relayNode);
  await page.waitForFunction(
    () => document.body.textContent?.includes("Local builds and repeatable checks"),
    { timeout: 3000 },
  );
  report.reducedMotion = await page.evaluate(() => ({
    fallbackPresent: document.body.textContent?.includes("Read / reduced-motion — DOM only"),
    sourceListPresent:
      document.body.textContent?.includes("Public commits, review history") &&
      document.body.textContent?.includes("Local builds and repeatable checks") &&
      document.body.textContent?.includes("Research and continuity evidence"),
  }));

  const failures = [
    ...report.viewports.filter((viewport) => viewport.overflow).map((viewport) => `overflow:${viewport.width}`),
    ...Object.entries(selections)
      .filter(([, value]) => value.pressed !== "true" || !value.detail)
      .map(([source]) => `selection:${source}`),
    ...(keyboardPressed === "true" ? [] : ["keyboard:local"]),
    ...(report.interaction.snapshotNotePresent ? [] : ["snapshot-note"]),
    ...(report.reducedMotion.fallbackPresent ? [] : ["reduced-motion-fallback"]),
    ...(report.reducedMotion.sourceListPresent ? [] : ["reduced-motion-source-list"]),
  ];

  report.failures = failures;
  await fs.writeFile(path.join(artifactDir, "report.json"), `${JSON.stringify(report, null, 2)}\n`);

  console.log(JSON.stringify(report, null, 2));
  if (failures.length > 0) process.exitCode = 1;
} finally {
  await browser.close();
}

