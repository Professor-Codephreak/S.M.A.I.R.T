// utils/config.ts
export const PRESALE_CONTRACT_ADDRESS = process.env.NEXT_PUBLIC_PRESALE_CONTRACT_ADDRESS || "";
if (!PRESALE_CONTRACT_ADDRESS) {
  throw new Error("Missing presale contract address in environment variables.");
}

