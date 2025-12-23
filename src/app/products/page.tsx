// src/app/products/page.tsx
import Link from "next/link";
import { products } from "./data";

export default function ProductsPage() {
  return (
    <div className="container">
      <div className="pageHeader">
        <h1 className="pageTitle">Products</h1>
        <p className="pageDesc">
          SRMが提供するプロダクト一覧です。各ページで概要とPricing（モデル/プラン）を確認できます。
        </p>
      </div>

      <div className="grid">
        {products.map((p) => (
          <div key={p.slug} className="card">
            <div className="cardTop">
              <div className="cardTitleRow">
                <h2 className="cardTitle">{p.name}</h2>
                <span className="badge">{p.badge}</span>
              </div>
              <p className="cardTagline">{p.tagline}</p>
            </div>

            <ul className="list">
              {p.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>

            <div className="cardActions">
              <Link className="btn btnGhost" href={`/products/${p.slug}`}>
                View details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}