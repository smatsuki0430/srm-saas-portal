import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "@/lib/products";

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return notFound();

  return (
    <div>
      <div className="breadcrumbs">
        <Link href="/products">← Products</Link>
      </div>

      <div className="pageHead">
        <h1>{product.name}</h1>
        <p className="muted">{product.tagline}</p>
      </div>

      <section className="section">
        <h2>Overview</h2>
        <p className="muted">{product.summary}</p>

        <ul className="list">
          {product.bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2>Pricing</h2>
        <p className="muted">
          価格は「Per user / year」を基本に、Enterpriseは個別条件（Direct/Contact）を想定しています。
        </p>

        <div className="grid planGrid">
          {product.pricing.map((plan) => (
            <div key={plan.name} className="card planCard">
              <div className="cardTop">
                <div className="cardTitle">{plan.name}</div>
                <div className="cardTag">{plan.priceLabel}</div>
              </div>

              <p className="muted">{plan.description}</p>

              <ul className="list">
                {plan.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>

              <div className="planBadges">
                {plan.recommended ? (
                  <span className="badge badgePrimary">Recommended</span>
                ) : (
                  <span className="badge badgeGhost">Plan</span>
                )}
              </div>

              <div className="cardFooter">
                <Link className="btn btnPrimary" href="/products">
                  Request / Next
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="muted footNote">
          ※ ここは後で、Stripe/Firebase導入後に「購入導線」「問い合わせ導線」に差し替え可能です。
        </div>
      </section>
    </div>
  );
}
