import Link from "next/link";
import { getProducts } from "@/lib/products";

type AnyProduct = Record<string, any>;

function getLocaleSafe(params: any): Promise<{ locale?: string }> {
  // Next.js 16+: params が Promise の場合がある
  return Promise.resolve(params ?? {});
}

function getBullets(p: AnyProduct): string[] {
  const candidates = [
    p.bullets,
    p.features,
    p.highlights,
    p.points,
    p.items,
  ];
  for (const c of candidates) {
    if (Array.isArray(c)) return c.filter((x) => typeof x === "string");
  }
  return [];
}

function getHref(p: AnyProduct, locale: string): string {
  // products.ts の実装差異に耐える
  if (typeof p.href === "function") return p.href(locale);
  if (typeof p.href === "string") return p.href;
  if (typeof p.slug === "string") return `/${locale}/products/${p.slug}`;
  return `/${locale}/products`;
}

function getTitle(p: AnyProduct): string {
  return p.name ?? p.title ?? p.productName ?? "Product";
}

function getTagline(p: AnyProduct): string {
  return p.tagline ?? p.subtitle ?? p.description ?? "";
}

function getBadge(p: AnyProduct): string {
  return p.badge ?? p.label ?? "";
}

function getLogo(p: AnyProduct): string | null {
  // 例: "/products/stratos.png" を想定（public/products 配下）
  const v = p.logo ?? p.icon ?? p.image ?? null;
  return typeof v === "string" && v.length > 0 ? v : null;
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }> | { locale: string };
}) {
  const resolved = await getLocaleSafe(params);
  const locale = resolved?.locale ?? "jp";

  const products = await Promise.resolve(getProducts());

  return (
    <div className="container">
      <header className="pageHeader">
        <h1 className="pageTitle">Products</h1>
        <p className="pageDesc">
          SRMが提供するプロダクト一覧です。各ページで概要とPricing（モデル/プラン）を確認できます。
        </p>
      </header>

      <section className="grid">
        {(Array.isArray(products) ? products : []).map((p: AnyProduct) => {
          const title = getTitle(p);
          const tagline = getTagline(p);
          const badge = getBadge(p);
          const href = getHref(p, locale);
          const bullets = getBullets(p);
          const logo = getLogo(p);

          return (
            <article key={p.slug ?? title} className="card">
              <div className="cardTop">
                <div className="cardTitleRow">
                  <div className="titleLeft">
                    {logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={logo}
                        alt={`${title} logo`}
                        className="productLogo"
                        loading="eager"
                      />
                    ) : null}
                    <h2 className="cardTitle">{title}</h2>
                  </div>

                  {badge ? <span className="badge">{badge}</span> : null}
                </div>

                {tagline ? <p className="cardTagline">{tagline}</p> : null}
              </div>

              <div className="cardBody">
                {bullets.length ? (
                  <ul className="cardBullets">
                    {bullets.map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}
              </div>

              <div className="cardActions">
                <Link className="btn btnGhost" href={href}>
                  View details
                </Link>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
