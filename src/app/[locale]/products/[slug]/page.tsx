// src/app/[locale]/products/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, type Locale } from "@/lib/products";

export function generateStaticParams() {
  const locales: Locale[] = ["ja", "en"];
  const slugs = products.map((p) => p.slug);
  return locales.flatMap((locale) => slugs.map((slug) => ({ locale, slug })));
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(locale, slug);

  if (!product) notFound();

  return (
    <div className="container">
      <div className="breadcrumbs">
        <Link href={`/${locale}/products`}>Products</Link> <span> / </span>
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
        <h2 className="sectionTitle">{product.overviewTitle}</h2>
        <p className="sectionText">{product.overview}</p>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{product.featuresTitle}</h2>
        <ul className="list">
          {product.features.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="sectionTitle">{product.pricingTitle}</h2>
        <p className="sectionText">{product.pricingNote}</p>

        <div className="plans">
          {product.plans.map((plan) => (
            <div className="planCard" key={plan.name}>
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
          <Link className="btn btnGhost" href={`/${locale}/products`}>
            {product.backLabel}
          </Link>
        </div>
      </section>
    </div>
  );
}
