export type AssetOrigin = "original" | "third-party";
export interface AssetRegistration {
    readonly id: string;
    readonly label: string;
    readonly origin: AssetOrigin;
    readonly source: string;
    readonly license: string;
    readonly sha256: string;
}
export interface AssetVerification {
    readonly status: "declared" | "verified" | "mismatch";
    readonly expectedSha256: string;
    readonly observedSha256?: string;
    readonly observedAt?: string;
}
export interface AssetProvenance extends AssetRegistration {
    readonly verification: AssetVerification;
}
export interface AssetReceipt {
    readonly sceneId: string;
    readonly createdAt: string;
    readonly assets: readonly AssetProvenance[];
}
/** Calculates a SHA-256 digest from the actual bytes using the Web Crypto API. */
export declare function calculateSha256(bytes: Uint8Array): Promise<string>;
/**
 * A small, serializable asset record. It does not make a licence decision;
 * it makes the source, claimed licence, verification state, and asset hash
 * inspectable by the product that loads the asset. Registration starts as a
 * declared hash; only verify() can promote it to cryptographically verified.
 */
export declare class AssetLedger {
    #private;
    register(asset: AssetRegistration): AssetProvenance;
    list(): readonly AssetProvenance[];
    verify(id: string, bytes: Uint8Array, observedAt?: string): Promise<AssetProvenance>;
    receipt(sceneId: string, createdAt?: string): AssetReceipt;
}
//# sourceMappingURL=assetLedger.d.ts.map