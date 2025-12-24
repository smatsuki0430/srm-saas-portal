import Link from "next/link";
import { getProductBySlug, type Product, type Locale } from "@/lib/products";

type ParamsLike =
  | { locale?: string; slug?: string }
  | Promise<{ locale?: string; slug?: string }>;

async function resolveParams(p: ParamsLike) {
  return Promise.resolve(p ?? {});
}

function normalizeLocale(v?: string): Locale {
  return v === "en" ? "en" : "jp";
}

function safeArray(v: unknown): string[] {
  return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
}

function getLogoPath(product: any): string {
  // products.ts で logo/icon/image を持っていれば優先
  const direct = product?.logo ?? product?.icon ?? product?.image;
  if (typeof direct === "string" && direct.length > 0) return direct;

  // なければ slug から推測（public/products/<slug>.png）
  if (typeof product?.slug === "string" && product.slug.length > 0) {
    return `/products/${product.slug}.png`;
  }
  return `/products/stratos.png`;
}

export default async function ProductDetailPage({
  params,
}: {
  params: ParamsLike;
}) {
  const p = await resolveParams(params);
  const locale = normalizeLocale(p.locale);
  const slug = (p.slug ?? "").toString();

  const product =
    (getProductBySlug(locale, slug) as Product | undefined) ??
    (getProductBySlug(slug) as Product | undefined);

  if (!product) {
    return (
      <div className="container">
        <div className="detailWrap">
          <div className="detailTopbar">
            <Link className="crumbLink" href={`/${locale}/products`}>
              ← Products
            </Link>
          </div>
          <div className="detailCard">
            <h1 className="detailTitle">Product not found</h1>
            <p className="detailText muted">
              指定されたプロダクトが見つかりませんでした。
            </p>
          </div>
        </div>
      </div>
    );
  }

  const logo = getLogoPath(product);
  const features = safeArray((product as any).features);
  const plans = Array.isArray((product as any).plans) ? (product as any).plans : [];

  return (
    <div className="container">
      <div className="detailWrap">
        {/* Top bar */}
        <div className="detailTopbar">
          <div className="crumbs">
            <Link className="crumbLink" href={`/${locale}/products`}>
              Products
            </Link>
            <span className="crumbSep">/</span>
            <span className="crumbNow">{product.name}</span>
          </div>

          <div className="detailTopActions">
            <Link className="btn btnGhost" href={`/${locale}/products`}>
              Back
            </Link>
          </div>
        </div>

        {/* Hero */}
        <section className="detailHero">
          <div className="detailHeroGrid">
            <div className="detailHeroText">
              <div className="detailKicker">{product.badge}</div>
              <h1 className="detailTitle">{product.name}</h1>
              <p className="detailLead">{product.tagline}</p>
            </div>

            <div className="detailHeroLogo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo}
                alt={`${product.name} logo`}
                className="detailLogo150"
                loading="eager"
              />
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="detailSection">
          <h2 className="detailH2">Overview</h2>
          <p className="detailText">{product.overview}</p>
        </section>

        <section className="detailSection">
          <h2 className="detailH2">Key features</h2>
          {features.length ? (
            <ul className="detailList">
              {features.map((f: string, i: number) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          ) : (
            <p className="detailText muted">（準備中）</p>
          )}
        </section>

        <section className="detailSection">
          <div className="detailSectionHead">
            <h2 className="detailH2">Plans / Pricing</h2>
            <p className="detailHint">
              各プロダクトの課金・購入導線はプラン内のCTAから実行できます（Stripe/Contact Sales等）。
            </p>
          </div>

          <div className="planGrid">
            {plans.map((pl: any, i: number) => {
              const bullets = safeArray(pl?.bullets);
              const ctaLabel = (pl?.ctaLabel ?? "View").toString();
              const ctaHref = (pl?.ctaHref ?? `/${locale}/products/${product.slug}`).toString();

              return (
                <article key={`${pl?.name ?? "plan"}-${i}`} className="planCard">
                  <div className="planTop">
                    <div className="planName">{pl?.name ?? "Plan"}</div>
                    <div className="planPriceNote">{pl?.priceNote ?? "Per user / year"}</div>
                  </div>

                  {bullets.length ? (
                    <ul className="planBullets">
                      {bullets.map((b: string, bi: number) => (
                        <li key={bi}>{b}</li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="planCtaRow">
                    <Link
                      className={`btn ${/buy now/i.test(ctaLabel) ? "btnPrimary" : "btnGhost"}`}
                      href={ctaHref}
                    >
                      {ctaLabel}
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
