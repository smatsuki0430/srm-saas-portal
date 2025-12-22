// src/app/products/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "../../../lib/products";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="container">
      <div className="breadcrumbs">
        <Link href="/products">Products</Link> <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="productHeader">
        <div className="productTitleRow">
          <h1 className="productTitle">{product.name}</h1>
          <span className="badge">{product.badge}</span>
        </div>
        <p className="productTagline">{product.tagline}</p>
      </div>

      <section className="section">
        <h2 className="sectionTitle">Overview</h2>
        <p className="sectionText">{product.overview}</p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Key features</h2>
        <ul className="list">
          {product.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="sectionTitle">Pricing（モデル/プラン）</h2>
        <p className="sectionText">{product.pricingIntro}</p>

        <div className="plans">
          {product.plans.map((plan) => (
            <div className="planCard" key={plan.name}>
              <div className="planTop">
                <div className="planName">{plan.name}</div>
                <div className="planPriceNote">{plan.priceLabel}</div>
                {plan.note ? <div className="sectionText">{plan.note}</div> : null}
              </div>

              <ul className="list">
                {plan.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="ctaRow">
                <a className="btn btnGhost" href="#" aria-disabled="true">
                  Contact sales
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="ctaRow" style={{ paddingBottom: 36 }}>
        <Link className="btn btnGhost" href="/products">
          Back to Products
        </Link>
      </div>
    </div>
  );
}
