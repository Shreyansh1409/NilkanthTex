import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="display-h1 text-foreground">404</h1>
        <h2 className="mt-4 font-serif text-2xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link to="/" className="btn-fill">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Nilkanth Tex — The Art of Fine Fabric" },
      {
        name: "description",
        content:
          "Premium textile manufacturer & supplier from Surat, India. 500+ fabric varieties — cotton, silk, brocade, jari, organic. ISO, OEKO-TEX & GOTS certified since 2005.",
      },
      { name: "author", content: "Nilkanth Tex" },
      { property: "og:title", content: "Nilkanth Tex — The Art of Fine Fabric" },
      {
        property: "og:description",
        content:
          "Premium textile manufacturer from Surat, India — 500+ fabric varieties, global standards, crafted since 2005.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@200;300;400;500&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobOpen, setMobOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/heritage", label: "Heritage" },
    { to: "/collections", label: "Collections" },
    { to: "/certifications", label: "Certifications" },
  ] as const;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[4%] h-20 transition-all duration-500 ${
          scrolled
            ? "bg-ink/95 backdrop-blur-xl border-b border-gold/15"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <Link to="/" className="font-display text-base text-cream no-underline">
          NILKANTH <span className="text-gold-light">TEX</span>
        </Link>
        <ul className="hidden md:flex gap-10 list-none">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                className="text-[0.65rem] tracking-[0.18em] uppercase text-cream/60 hover:text-gold-pale transition-colors"
                activeProps={{ className: "text-gold-pale" }}
                activeOptions={{ exact: true }}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/contact"
              className="text-[0.65rem] tracking-[0.18em] uppercase px-5 py-2 border border-gold/40 text-gold-pale hover:bg-gold/10 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-px bg-cream transition-transform ${
              mobOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-opacity ${
              mobOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-cream transition-transform ${
              mobOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-ink/98 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden ${
          mobOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {[...links, { to: "/contact", label: "Contact" } as const].map((l) => (
          <Link
            key={l.to}
            to={l.to}
            onClick={() => setMobOpen(false)}
            className="font-serif text-3xl text-cream hover:text-gold-pale transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </div>
    </>
  );
}

function Footer() {
  return (
    <footer className="bg-[oklch(0.12_0.015_55)] border-t border-gold/10 px-[6%] pt-20 pb-8">
      <div className="grid md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div>
          <div className="font-display text-base text-cream mb-4">
            NILKANTH <span className="text-gold-light">TEX</span>
          </div>
          <p className="text-xs text-cream/45 leading-relaxed font-light">
            Premium textile manufacturer and supplier based in Surat, India. Crafting quality
            fabrics since 2005 for domestic and international markets.
          </p>
        </div>
        <FooterCol
          title="Navigate"
          items={[
            { to: "/", label: "Home" },
            { to: "/heritage", label: "Heritage" },
            { to: "/collections", label: "Collections" },
            { to: "/certifications", label: "Certifications" },
            { to: "/contact", label: "Contact" },
          ]}
        />
        <FooterCol
          title="Collections"
          items={[
            { to: "/collections", label: "Cotton Fabrics" },
            { to: "/collections", label: "Saree Fabrics" },
            { to: "/collections", label: "Jari & Gota" },
            { to: "/collections", label: "Printed Fabrics" },
            { to: "/collections", label: "Fancy Fabrics" },
            { to: "/collections", label: "Organic Cotton" },
          ]}
        />
        <div>
          <h5 className="font-display text-xs tracking-[0.2em] text-gold-pale mb-5">CONTACT</h5>
          <ul className="space-y-3 text-xs text-cream/55">
            <li>
              <a href="tel:+919898989898" className="hover:text-gold-pale transition-colors">
                +91 98989 89898
              </a>
            </li>
            <li>
              <a
                href="mailto:info@nilkanthtex.com"
                className="hover:text-gold-pale transition-colors"
              >
                info@nilkanthtex.com
              </a>
            </li>
            <li>Surat, Gujarat</li>
            <li>India — 395 002</li>
          </ul>
        </div>
      </div>
      <div className="hairline mt-16 mb-6 max-w-7xl mx-auto" />
      <div className="flex flex-wrap gap-3 justify-between text-[0.65rem] tracking-[0.15em] uppercase text-cream/35 max-w-7xl mx-auto">
        <p>© 2025 Nilkanth Tex. All rights reserved.</p>
        <p>The Art of Fabric · Est. 2005 · Surat</p>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: ReadonlyArray<{ to: "/" | "/heritage" | "/collections" | "/certifications" | "/contact"; label: string }>;
}) {
  return (
    <div>
      <h5 className="font-display text-xs tracking-[0.2em] text-gold-pale mb-5">
        {title.toUpperCase()}
      </h5>
      <ul className="space-y-3">
        {items.map((it, i) => (
          <li key={i}>
            <Link
              to={it.to}
              className="text-xs text-cream/55 hover:text-gold-pale transition-colors"
            >
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function WhatsApp() {
  return (
    <a
      href="https://wa.me/919898989898"
      target="_blank"
      rel="noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_10px_30px_-10px_oklch(0.7_0.18_150/0.6)] hover:scale-110 transition-transform"
    >
      <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </a>
  );
}

function RootComponent() {
  return (
    <>
      <Nav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsApp />
    </>
  );
}
