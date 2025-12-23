// src/app/products/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "../../../lib/products";

type Params = { slug: string };

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({
  params,
}: {
  // Next.js 16 / Firebase App Hosting 環境で params が Promise 扱いになるケースに対応
  params: Promise<Params>;
}) {
  const { slug } = await params;

  const product = getProductBySlug(slug);
  if (!product) notFound();

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
        <p className="sectionText">
          年額/ユーザー課金を想定。プランは「使える機能の範囲」と「出力/共有/統制」で差分を設計します。
        </p>

        <div className="plans">
          {product.plans.map((plan) => (
            <div key={plan.name} className="planCard">
              <div className="planTop">
                <div className="planName">{plan.name}</div>
                <div className="planPriceNote">{plan.priceNote}</div>
              </div>

              <ul className="list">
                {plan.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="ctaRow">
                <Link className="btn btnGhost" href={plan.ctaHref}>
                  {plan.ctaLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="ctaRow">
          <Link className="btn btnGhost" href="/products">
            Back to Products
          </Link>
        </div>
      </section>
    </div>
  );
}
