// src/app/[locale]/products/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, type Locale } from "../../../../lib/products";

type Params = { locale: Locale; slug: string };

// SSG用：/jp/products/<slug> と /en/products/<slug> を生成
export async function generateStaticParams() {
  const locales: Locale[] = ["jp", "en"];
  const slugs = products.map((p) => p.slug);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function ProductDetailPage({
  params,
}: {
  // Next.js 16 / App Hosting 環境で params が Promise 扱いになるケースに対応
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;

  const product = getProductBySlug(locale, slug);
  if (!product) notFound();

  const base = `/${locale}`;

  return (
    <div className="container">
      <div className="breadcrumbs">
        <Link href={`${base}/products`}>Products</Link> <span> / </span>
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
        <h2 className="sectionTitle">Plans / Pricing</h2>
        <p className="sectionText">
          各プロダクトの課金・購入導線はプラン内のCTAから実行できます（Stripe/Contact Sales等）。
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
          <Link className="btn btnGhost" href={`${base}/products`}>
            Back to Products
          </Link>
        </div>
      </section>
    </div>
  );
}
