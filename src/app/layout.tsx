// src/app/layout.tsx
import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "SRM SaaS Portal",
  description: "SRM portal (dev)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <header className="header">
          <div className="headerInner">
            <Link className="brand" href="/">
              SRM
            </Link>

            <nav className="nav">
              <Link className="navLink" href="/products">
                Products
              </Link>
            </nav>

            <div className="navCta">
              <Link className="btn btnPrimary" href="/products">
                Get started
              </Link>
            </div>
          </div>
        </header>

        <main className="main">{children}</main>

        <footer className="footer">
          <div className="footerInner">
            <div className="muted">© {new Date().getFullYear()} SRM</div>
            <div className="footerLinks">
              <a href="#" aria-disabled="true">
                Privacy
              </a>
              <a href="#" aria-disabled="true">
                Terms
              </a>
              <a href="#" aria-disabled="true">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
