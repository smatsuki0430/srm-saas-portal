import Link from "next/link";
import { products } from "@/lib/products";

export default function ProductsPage() {
  return (
    <div>
      <div className="pageHead">
        <h1>Products</h1>
        <p className="muted">
          SRMが提供するプロダクト一覧です。各ページで概要とPricing（モデル/プラン）を確認できます。
        </p>
      </div>

      <div className="grid">
        {products.map((p) => (
          <div key={p.slug} className="card">
            <div className="cardTop">
              <div className="cardTitle">{p.name}</div>
              <div className="cardTag">{p.tagline}</div>
            </div>

            <div className="cardBody">
              <p className="muted">{p.summary}</p>
              <ul className="list">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="cardFooter">
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
