import { createFileRoute, Link } from "@tanstack/react-router";
import { InnerHero } from "./heritage";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications — Nilkanth Tex | ISO, OEKO-TEX, GOTS, GRS" },
      {
        name: "description",
        content:
          "Globally certified textile manufacturer — ISO 9001:2015, OEKO-TEX Standard 100, GOTS, BIS, REACH, Sedex SMETA, GRS, Bluesign.",
      },
      { property: "og:title", content: "Certifications & Trust Marks — Nilkanth Tex" },
      {
        property: "og:description",
        content:
          "Eight global certifications proving our commitment to quality, safety, and sustainability.",
      },
    ],
  }),
  component: CertsPage,
});

const CERTS = [
  {
    n: "01",
    name: "ISO 9001:2015",
    desc: "Quality Management System certification ensuring consistent product standards and continuous improvement across all manufacturing processes.",
    valid: "Valid Until 2026 · TÜV Rheinland",
  },
  {
    n: "02",
    name: "OEKO-TEX® Standard 100",
    desc: "Every component tested for over 100 harmful chemicals — certified safe for skin contact at every processing stage.",
    valid: "Certified · OEKO-TEX Association",
  },
  {
    n: "03",
    name: "GOTS Certification",
    desc: "Global Organic Textile Standard certifying our organic cotton range meets strict ecological and social criteria throughout the supply chain.",
    valid: "Organic Certified · Control Union",
  },
  {
    n: "04",
    name: "BIS Standard Mark",
    desc: "Bureau of Indian Standards certification ensuring compliance with national textile quality standards for domestic market products.",
    valid: "IS: 1954 Compliant",
  },
  {
    n: "05",
    name: "REACH Compliance",
    desc: "European Union chemical regulation compliance enabling export to EU markets without restriction.",
    valid: "EU REACH Compliant · SGS Tested",
  },
  {
    n: "06",
    name: "Sedex SMETA Audit",
    desc: "4-pillar supplier audit confirming ethical labour practices, health & safety, and business integrity.",
    valid: "4-Pillar Audit Passed",
  },
  {
    n: "07",
    name: "GRS — Recycled Content",
    desc: "Global Recycled Standard for our recycled polyester range, verifying percentage of recycled content used.",
    valid: "GRS Certified · Intertek",
  },
  {
    n: "08",
    name: "Bluesign® System Partner",
    desc: "Partnership for responsible resource use, consumer safety, and water/energy efficiency in dyeing operations.",
    valid: "Active Partner",
  },
];

function CertsPage() {
  return (
    <>
      <InnerHero crumb="Certifications" title="Global" em="Standards" />

      <section className="px-[6%] py-24 max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16 fade-up">
          <div className="sec-tag">Trust Marks</div>
          <p className="text-cream/55 leading-loose font-light">
            Our certifications are a testament to our unwavering commitment to quality, safety, and
            sustainability in every fabric we produce.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((c, i) => (
            <article
              key={c.n}
              className={`p-8 border border-gold/15 bg-[oklch(0.18_0.02_55)] hover:border-gold/45 transition-all fade-up d${
                i % 4
              }`}
            >
              <div className="font-display text-[0.65rem] tracking-[0.3em] text-gold-light mb-6">
                {c.n}
              </div>
              <h4 className="font-serif text-xl text-cream mb-4">{c.name}</h4>
              <p className="text-sm text-cream/55 leading-relaxed font-light mb-6">{c.desc}</p>
              <div className="text-[0.7rem] tracking-[0.1em] text-gold-pale/70 border-t border-gold/15 pt-4">
                ✓ {c.valid}
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20 border-t border-gold/15 pt-16">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/35 mb-8 max-w-xl mx-auto">
            We provide full certificate documents, test reports, and compliance letters upon request
            for B2B buyers.
          </p>
          <Link to="/contact" className="btn-fill">
            Request Documentation →
          </Link>
        </div>
      </section>
    </>
  );
}
