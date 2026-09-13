export type CredentialVisibility = "public" | "private";
export type CredentialVerification = "verified" | "self_asserted" | "pending";

export type CredentialRecord = {
  id: string;
  title: string;
  issuer: string;
  issued: string;
  category: "academic" | "professional" | "course" | "programme" | "award" | "community" | "other";
  skills: string[];
  certificateId?: string;
  verificationUrl?: string;
  sourceFile?: string;
  visibility: CredentialVisibility;
  verification: CredentialVerification;
  orcidEligible: boolean;
  featured: boolean;
};

/**
 * GSMB credential boundary.
 *
 * This registry deliberately remains empty until the owner's complete historical
 * credential estate is inventoried (30+ certificates, including Coursera and
 * other local certificate folders). Do not publish a newest-first partial set.
 *
 * Local evidence authority to inventory first:
 *   C:\\Users\\rkhol\\OneDrive\\Documents\\Coursera
 *   C:\\Users\\rkhol\\OneDrive\\Documents
 *   C:\\Users\\rkhol\\OneDrive\\Documents\\Anthropic\\Introduction to MCP\\Schematics\\23-Ecosystems\\Kholofelo Robyn Rababalela
 *
 * Originals are evidence, not automatically public assets. Normalize metadata,
 * verify issuer/credential links, classify ORCID eligibility, and explicitly
 * approve visibility before this array is populated for the public site.
 */
export const credentialRegistryMeta = {
  authority: "GSMB Credential Registry",
  status: "INVENTORY_REQUIRED" as const,
  publicationPolicy: "COMPLETE_INVENTORY_BEFORE_PUBLICATION" as const,
  orcidRole: "IDENTITY_AND_ELIGIBLE_QUALIFICATIONS_NOT_CERTIFICATE_DATABASE" as const,
};

export const credentials: CredentialRecord[] = [];
