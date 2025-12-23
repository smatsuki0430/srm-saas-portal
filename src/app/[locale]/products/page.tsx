// src/app/[locale]/products/page.tsx
import Link from "next/link";
import { getProducts, type Locale } from "@/lib/products";
import { toLang } from "@/lib/locale";

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const items = getProducts(locale);

  const lang = toLang(locale);

  const title = "Products";
  const desc =
    lang === "ja"
      ? "SRMが提供するプロダクト一覧です。各ページで概要とPricing（モデル/プラン）を確認できます。"
      : "Browse SRM products. Each page includes overview and pricing model/plans.";

  return (
    <div className="container">
      <div className="pageHeader">
        <h1 className="pageTitle">{title}</h1>
        <p className="pageDesc">{desc}</p>
      </div>

      <div className="grid">
        {items.map((p) => (
          <div className="card" key={p.slug}>
            <div className="cardTop">
              <div className="cardTitleRow">
                <h2 className="cardTitle">{p.name}</h2>
                <span className="badge">{p.badge}</span>
              </div>

              <p className="cardTagline">{p.tagline}</p>

              <ul className="list">
                {p.features.slice(0, 3).map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="cardActions">
              <Link
                className="btn btnGhost"
                href={`/${locale}/products/${p.slug}`}
              >
                View details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}