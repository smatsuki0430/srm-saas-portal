// src/app/products/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";

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

  const isContactSales = product.billingModel === "contact_sales";

  // Stripe系は後で実装するが、今は「決済へ」ボタンを外部リンクに逃がす想定
  const primaryCtaLabel = isContactSales ? "Contact sales" : "Start subscription";
  const primaryCtaHref = isContactSales
    ? "mailto:sales@srm.example?subject=SRM%20Sales%20Inquiry"
    : (product.stripeCheckoutUrl || "#");

  return (
    <div className="container">
      <div className="breadcrumbs">
        <Link href="/products">Products</Link> <span> / </span>
        <span>{product.name}</span>
      </div>

      <div className="productHeader">
        <div className="productTitleRow">
          <div className="productTitleLeft">
            <span className="productLogo" aria-hidden="true">
              {product.logo ? <img src={product.logo} alt="" /> : null}
            </span>
            <h1 className="productTitle">{product.name}</h1>
          </div>
          <span className="badge">{product.badge}</span>
        </div>

        <p className="productTagline">{product.tagline}</p>

        <div className="ctaRow">
          <a className="btn btnPrimary" href={primaryCtaHref}>
            {primaryCtaLabel}
          </a>
          <Link className="btn btnGhost" href="/products">
            Back to Products
          </Link>
        </div>
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
          {isContactSales
            ? "本プロダクトは要件に応じてお見積り（Contact Sales）となります。"
            : "本プロダクトはStripe決済によるサブスクリプション（セルフサーブ）を想定しています。"}
        </p>

        {product.plans && product.plans.length > 0 ? (
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

                <div className="planCtaRow">
                  <a className="btn btnGhost" href={primaryCtaHref}>
                    {primaryCtaLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}
