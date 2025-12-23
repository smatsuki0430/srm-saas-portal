// src/app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container">
      <div className="pageHeader">
        <h1 className="pageTitle">ページが見つかりません</h1>
        <p className="pageDesc">
          URLが変更されたか、ページが移動/削除された可能性があります。
        </p>
      </div>

      <div className="ctaRow">
        <Link className="btn btnPrimary" href="/products">
          Productsへ戻る
        </Link>
        <Link className="btn btnGhost" href="/">
          トップへ戻る
        </Link>
      </div>
    </div>
  );
}
