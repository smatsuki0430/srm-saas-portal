// src/app/[locale]/checkout/page.tsx
import Link from "next/link";

export default async function CheckoutPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: "ja" | "en" }>;
  searchParams: Promise<{ product?: string; plan?: string }>;
}) {
  const { locale } = await params;
  const sp = await searchParams;

  return (
    <div className="container">
      <div className="pageHeader">
        <h1 className="pageTitle">
          {locale === "ja" ? "Checkout" : "Checkout"}
        </h1>
        <p className="pageDesc">
          {locale === "ja"
            ? "Stripe決済は次のフェーズで接続します（今は遷移先の仮ページです）。"
            : "Stripe checkout will be connected in the next phase (placeholder page)."}
        </p>
      </div>

      <div className="card">
        <p className="cardTagline">
          product: <b>{sp.product || "-"}</b> / plan: <b>{sp.plan || "-"}</b>
        </p>

        <div className="cardActions">
          <Link className="btn btnGhost" href={`/${locale}/products`}>
            Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
