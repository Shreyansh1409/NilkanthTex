import { createFileRoute, Link } from "@tanstack/react-router";
import factoryImg from "@/assets/fabrics/factory-floor.png";
import stackImg from "@/assets/fabrics/fabric-stack.png";
import heroBg from "@/assets/fabrics/hero-bg.png";
import heroVideo from "@/assets/fabrics/heritage-hero.mp4.asset.json";

export const Route = createFileRoute("/heritage")({
  head: () => ({
    meta: [
      { title: "Heritage — Nilkanth Tex | 18 Years of Indian Textile Craft" },
      {
        name: "description",
        content:
          "Founded in 2005 in Surat, Gujarat. From a small weaving unit to a trusted name serving 1,000+ clients across 15+ countries.",
      },
      { property: "og:title", content: "Heritage — Nilkanth Tex" },
      {
        property: "og:description",
        content:
          "From a small weaving unit in Surat to one of India's most respected textile manufacturers — 18 years of crafted excellence.",
      },
      { property: "og:image", content: heroBg },
    ],
  }),
  component: HeritagePage,
});

function HeritagePage() {
  return (
    <>
      <InnerHero
        crumb="Heritage"
        title="Our"
        em="Heritage"
        bg={heroBg}
        video={heroVideo.url}
      />

      <section className="px-[6%] py-32 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="fade-up">
            <div className="sec-tag">Est. 2005 · Surat</div>
            <h2 className="display-h2">
              Crafting India's Fabric <em>Legacy</em>
            </h2>
            <p className="mt-8 text-cream/65 leading-loose font-light">
              Founded in 2005 by Nilkanthbhai Patel in the textile capital of India, Nilkanth Tex
              began as a small weaving unit with a singular vision: deliver premium fabrics at
              honest prices, without compromising a single thread of quality.
            </p>
            <p className="mt-5 text-cream/65 leading-loose font-light">
              Over 18 years, we have expanded into one of Surat's most respected textile
              manufacturers — with in-house dyeing, printing, and finishing facilities that give us
              complete control over every yard we produce.
            </p>
            <p className="mt-5 text-cream/65 leading-loose font-light">
              Today, Nilkanth Tex serves over 1,000 clients across India and exports to markets in
              the Middle East, Europe, and Southeast Asia, carrying with it the pride of Indian
              craftsmanship.
            </p>
            <Link to="/contact" className="btn-gold mt-10">
              Partner With Us →
            </Link>
          </div>
          <div className="relative fade-up d2 aspect-[4/5]">
            <img
              src={factoryImg}
              alt="Modern textile manufacturing floor"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute -bottom-12 -right-12 w-1/2 aspect-square hidden md:block shadow-elegant">
              <img
                src={stackImg}
                alt="Stack of folded luxury fabrics"
                className="w-full h-full object-cover border-4 border-ink"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-32 border-t border-gold/15 pt-16">
          {[
            { num: "2005", label: "Year Founded" },
            { num: "500+", label: "Fabric Varieties" },
            { num: "1000+", label: "Happy Clients" },
            { num: "15+", label: "Countries Exported" },
          ].map((m, i) => (
            <div key={i} className={`text-center fade-up d${i}`}>
              <div className="font-serif text-4xl md:text-5xl text-gold-pale">{m.num}</div>
              <div className="text-xs tracking-[0.25em] uppercase text-cream/50 mt-3">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export function InnerHero({
  crumb,
  title,
  em,
  bg,
  video,
}: {
  crumb: string;
  title: string;
  em: string;
  bg?: string;
  video?: string;
}) {
  return (
    <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden bg-gradient-to-br from-espresso to-ink pt-20">
      {video ? (
        <video
          src={video}
          autoPlay
          muted
          loop
          playsInline
          poster={bg}
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
      ) : (
        bg && (
          <img
            src={bg}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
        )
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/30" />
      <div className="relative z-10 px-[6%] pb-16 max-w-7xl mx-auto w-full">
        <div className="text-[0.65rem] tracking-[0.25em] uppercase text-gold-light mb-6 fade-up">
          <Link to="/" className="hover:text-cream">
            Home
          </Link>{" "}
          / {crumb}
        </div>
        <h1 className="display-h1 fade-up d1">
          {title} <em>{em}</em>
        </h1>
      </div>
    </section>
  );
}
