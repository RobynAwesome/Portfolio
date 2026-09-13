const sha256Pattern = /^[a-f0-9]{64}$/i;
function assertSha256(sha256) {
    if (!sha256Pattern.test(sha256))
        throw new TypeError("Asset provenance requires a SHA-256 hex digest.");
}
/** Calculates a SHA-256 digest from the actual bytes using the Web Crypto API. */
export async function calculateSha256(bytes) {
    const subtle = globalThis.crypto?.subtle;
    if (!subtle)
        throw new Error("Web Crypto is required to verify asset bytes.");
    // Copy into an ordinary ArrayBuffer-backed view. The caller may have supplied
    // a view over shared memory, which Web Crypto intentionally does not accept.
    const ownedBytes = new Uint8Array(bytes.byteLength);
    ownedBytes.set(bytes);
    const digest = await subtle.digest("SHA-256", ownedBytes);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, "0")).join("");
}
/**
 * A small, serializable asset record. It does not make a licence decision;
 * it makes the source, claimed licence, verification state, and asset hash
 * inspectable by the product that loads the asset. Registration starts as a
 * declared hash; only verify() can promote it to cryptographically verified.
 */
export class AssetLedger {
    #assets = new Map();
    register(asset) {
        if (!asset.id || !asset.label || !asset.source || !asset.license) {
            throw new TypeError("Asset provenance requires id, label, source, and licence.");
        }
        assertSha256(asset.sha256);
        if (this.#assets.has(asset.id)) {
            throw new Error(`Asset '${asset.id}' is already registered.`);
        }
        const record = Object.freeze({
            ...asset,
            verification: Object.freeze({ status: "declared", expectedSha256: asset.sha256.toLowerCase() })
        });
        this.#assets.set(record.id, record);
        return record;
    }
    list() {
        return [...this.#assets.values()].sort((left, right) => left.id.localeCompare(right.id));
    }
    async verify(id, bytes, observedAt = new Date().toISOString()) {
        const registered = this.#assets.get(id);
        if (!registered)
            throw new Error(`Asset '${id}' is not registered.`);
        const observedSha256 = await calculateSha256(bytes);
        const status = observedSha256 === registered.sha256.toLowerCase() ? "verified" : "mismatch";
        const record = Object.freeze({
            ...registered,
            verification: Object.freeze({ status, expectedSha256: registered.sha256.toLowerCase(), observedSha256, observedAt })
        });
        this.#assets.set(id, record);
        return record;
    }
    receipt(sceneId, createdAt = new Date().toISOString()) {
        if (!sceneId)
            throw new TypeError("A scene id is required for an asset receipt.");
        return Object.freeze({ sceneId, createdAt, assets: this.list() });
    }
}
//# sourceMappingURL=assetLedger.js.map