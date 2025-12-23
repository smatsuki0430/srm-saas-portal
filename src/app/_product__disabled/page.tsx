// src/app/product/page.tsx
import { redirect } from "next/navigation";

export default function ProductLegacyRedirect() {
  redirect("/products");
}
