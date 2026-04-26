import { createFileRoute, Link } from "@tanstack/react-router";
import { FABRICS, MARQUEE_ITEMS } from "@/data/fabrics";
import loomImg from "@/assets/fabrics/loom.png";
import brocadeDetail from "@/assets/fabrics/brocade-detail.png";
import loomWide from "@/assets/fabrics/loom-wide.png";
import homeHeroVideo from "@/assets/fabrics/home-hero.mp4.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nilkanth Tex — The Art of Fine Fabric | Premium Textile Manufacturer Surat" },
      {
        name: "description",
        content:
          "Premium textile manufacturer from Surat, India. 500+ fabric varieties — cotton, silk, brocade, jari, organic. ISO, OEKO-TEX & GOTS certified since 2005.",
      },
      { property: "og:title", content: "Nilkanth Tex — The Art of Fine Fabric" },
      {
        property: "og:description",
        content:
          "Where centuries of Indian weaving tradition meet modern precision. 500+ fabric varieties, global standards, crafted since 2005.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden bg-ink">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={loomWide}
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source src="/videos/fabric-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-transparent to-ink/40" />

        <div className="relative z-10 h-full flex flex-col justify-center px-[6%] max-w-7xl mx-auto">
          <div className="eyebrow fade-up">Surat · Est. 2005 · ISO Certified</div>
          <h1 className="display-h1 mt-6 fade-up d1 max-w-4xl">
            The Art of
            <br />
            <em>Fine Fabric</em>
          </h1>
          <p className="mt-8 max-w-xl text-cream/70 text-base md:text-lg font-light leading-relaxed fade-up d2">
            Premium textile manufacturer & supplier — where centuries of Indian weaving tradition
            meet modern precision and global standards.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-up d3">
            <Link to="/collections" className="btn-fill">
              Explore Collections
            </Link>
            <Link to="/contact" className="btn-gold">
              Request Samples
            </Link>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10">
          <span className="text-[0.6rem] tracking-[0.3em] uppercase text-cream/50">Scroll</span>
          <div className="scroll-cue-line w-px h-10 bg-gradient-to-b from-gold-light to-transparent" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-gold/15 bg-ink overflow-hidden py-6">
        <div className="marquee-track flex whitespace-nowrap">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((it, i) => (
            <span
              key={i}
              className="font-display text-cream/40 text-sm tracking-[0.3em] uppercase mx-10 flex items-center gap-10"
            >
              {it}
              <span className="w-1.5 h-1.5 rounded-full bg-gold/50" />
            </span>
          ))}
        </div>
      </div>

      {/* EDITORIAL INTRO */}
      <section className="grid md:grid-cols-2 gap-16 px-[6%] py-32 max-w-7xl mx-auto items-center">
        <div className="fade-up">
          <div className="sec-tag">Our Heritage</div>
          <h2 className="display-h2">
            Woven With Care,
            <br />
            Crafted for <em>Excellence</em>
          </h2>
          <p className="mt-8 text-cream/65 leading-loose font-light">
            Since 2005, Nilkanth Tex has been the trusted name behind some of India's finest fabric
            collections. Based in the textile heart of Surat, Gujarat, we bring together
            traditional weaving techniques and cutting-edge manufacturing.
          </p>
          <p className="mt-5 text-cream/65 leading-loose font-light">
            Every thread is chosen with intention. Every weave is a story of craftsmanship passed
            down through generations, refined by modern technology.
          </p>
          <Link to="/heritage" className="btn-gold mt-10">
            Our Heritage →
          </Link>
        </div>
        <div className="relative fade-up d2 aspect-[4/5] overflow-hidden">
          <img
            src={loomImg}
            alt="Modern computerized jacquard power looms weaving premium golden brocade at Nilkanth Tex facility in Surat"
            className="w-full h-full object-cover"
            width={1024}
            height={1280}
            loading="lazy"
          />
          <div className="absolute -bottom-12 -left-12 w-1/2 aspect-square hidden md:block shadow-elegant">
            <img
              src={brocadeDetail}
              alt="Gold zari brocade detail"
              className="w-full h-full object-cover border-4 border-ink"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* FABRIC MOSAIC */}
      <section className="px-[6%] py-32 bg-[oklch(0.13_0.018_55)]">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-up">
          <div className="sec-tag justify-center">Fabric Collections</div>
          <h2 className="display-h2">
            500+ Varieties,
            <br />
            One <em>Trusted Source</em>
          </h2>
          <p className="mt-6 text-cream/55 font-light">
            Explore the categories that define our craft.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {FABRICS.slice(0, 8).map((f, i) => (
            <Link
              key={f.id}
              to="/collections"
              className={`group relative overflow-hidden bg-ink ${
                f.feat ? "md:col-span-2 md:row-span-2 aspect-square" : "aspect-square"
              }`}
            >
              <img
                src={f.img}
                alt={f.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent opacity-90 group-hover:opacity-70 transition-opacity" />
              <div className="absolute bottom-0 left-0 right-0 p-5 md:p-7">
                <div className="text-[0.6rem] tracking-[0.25em] uppercase text-gold-light mb-2">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-serif text-xl md:text-2xl text-cream">{f.label}</h3>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center mt-16">
          <Link to="/collections" className="btn-gold">
            View All Collections →
          </Link>
        </div>
      </section>

      {/* PARALLAX */}
      <section className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-center justify-center">
        <img
          src={loomWide}
          alt="Traditional Indian textile mill at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-ink/70" />
        <div className="relative z-10 text-center px-6 max-w-3xl">
          <h2 className="display-h2 fade-up">
            18 Years of
            <br />
            <em>Crafted Perfection</em>
          </h2>
          <p className="mt-6 text-cream/70 font-light leading-loose fade-up d1">
            From raw fibre to finished fabric — every step guided by precision, passion, and an
            uncompromising eye for quality.
          </p>
          <Link to="/heritage" className="btn-fill mt-10 fade-up d2">
            Our Story
          </Link>
        </div>
      </section>

      {/* STATS */}
      <section className="px-[6%] py-24 bg-ink">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
          {[
            { num: "500", unit: "+", label: "Fabric Varieties", desc: "Across 16 categories" },
            { num: "18", unit: "+", label: "Years Experience", desc: "Established 2005 in Surat" },
            { num: "1K", unit: "+", label: "Happy Clients", desc: "Domestic & international" },
            { num: "15", unit: "+", label: "Countries", desc: "Global export footprint" },
          ].map((s, i) => (
            <div key={i} className={`fade-up d${i}`}>
              <div className="font-serif text-5xl md:text-6xl text-gold-pale font-light">
                {s.num}
                <span className="text-3xl text-gold align-top">{s.unit}</span>
              </div>
              <div className="hairline w-12 my-4" />
              <div className="text-sm text-cream tracking-wider mb-1">{s.label}</div>
              <div className="text-xs text-cream/50 font-light">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY */}
      <section className="px-[6%] py-32 bg-[oklch(0.13_0.018_55)]">
        <div className="flex flex-wrap gap-6 justify-between items-end max-w-7xl mx-auto mb-16">
          <h2 className="display-h2 fade-up">
            Why
            <br />
            <em>Nilkanth Tex</em>
          </h2>
          <Link to="/contact" className="btn-gold fade-up d1">
            Partner With Us →
          </Link>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            {
              n: "01",
              name: "Premium Quality",
              desc: "Rigorous QC at every stage — from raw fibre to finished bolt.",
            },
            {
              n: "02",
              name: "ISO Certified",
              desc: "ISO 9001:2015, OEKO-TEX, GOTS certified operations.",
            },
            {
              n: "03",
              name: "Reliable Supply",
              desc: "On-time delivery, consistent stock, transparent pricing.",
            },
            {
              n: "04",
              name: "Custom Orders",
              desc: "Bespoke weave, dye & print. MOQ from 500m.",
            },
          ].map((w, i) => (
            <div
              key={w.n}
              className={`p-8 border border-gold/15 bg-ink/40 hover:border-gold/40 transition-colors fade-up d${i}`}
            >
              <div className="text-[0.65rem] tracking-[0.3em] text-gold-light mb-6">{w.n}</div>
              <div className="font-serif text-2xl text-cream mb-4">{w.name}</div>
              <p className="text-sm text-cream/55 font-light leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* QUOTE */}
      <section className="px-[6%] py-32 bg-ink text-center max-w-4xl mx-auto">
        <p className="font-serif italic text-2xl md:text-3xl text-cream/85 leading-relaxed fade-up">
          "Every fabric we produce carries the weight of tradition and the precision of modernity —
          because the textiles that dress the world deserve nothing less."
        </p>
        <div className="hairline w-16 mx-auto my-8" />
        <div className="text-xs tracking-[0.25em] uppercase text-gold-light fade-up d1">
          — Nilkanthbhai Patel, Founder
        </div>
      </section>

      {/* CTA */}
      <section className="px-[6%] py-24 bg-gradient-to-br from-espresso to-ink text-center">
        <div className="sec-tag justify-center">Get In Touch</div>
        <h2 className="display-h2 max-w-3xl mx-auto">
          Begin Your <em>Fabric Journey</em>
        </h2>
        <p className="mt-6 max-w-xl mx-auto text-cream/60 font-light">
          Request samples, custom quotes, or full certification documentation.
        </p>
        <div className="mt-10 flex flex-wrap gap-4 justify-center">
          <Link to="/contact" className="btn-fill">
            Send Enquiry
          </Link>
          <a
            href="https://wa.me/919898989898"
            target="_blank"
            rel="noreferrer"
            className="btn-gold"
          >
            WhatsApp Us
          </a>
        </div>
      </section>
    </>
  );
}
