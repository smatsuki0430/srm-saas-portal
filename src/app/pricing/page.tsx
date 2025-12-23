// src/app/pricing/page.tsx
import { redirect } from "next/navigation";

export default function PricingLegacyRedirect() {
  redirect("/products");
}
