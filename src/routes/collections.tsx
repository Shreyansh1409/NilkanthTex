import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { FABRICS } from "@/data/fabrics";
import collectionsBg from "@/assets/fabrics/collections-bg.png";
import collectionsVideo from "@/assets/fabrics/collections-hero.mp4.asset.json";
import { InnerHero } from "./heritage";
import { Skeleton } from "@/components/ui/skeleton";

export const Route = createFileRoute("/collections")({
  head: () => ({
    meta: [
      { title: "Collections — Nilkanth Tex | 16 Premium Fabric Categories" },
      {
        name: "description",
        content:
          "Explore 500+ premium fabrics across 16 categories — cotton, polyester, jari, saree, brocade, organic cotton, satin, lace, knits.",
      },
      { property: "og:title", content: "Fabric Collections — Nilkanth Tex" },
      {
        property: "og:description",
        content:
          "From naturally grown cotton to ornate metallic jari — each collection is a distinct expression of textile artistry.",
      },
      { property: "og:image", content: collectionsBg },
    ],
  }),
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <>
      <InnerHero crumb="Collections" title="Fabric" em="Collections" bg={collectionsBg} video={collectionsVideo.url} />

      <section className="px-[6%] py-24 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 fade-up">
          <div className="sec-tag justify-center">{FABRICS.length} Categories</div>
          <p className="text-cream/60 font-light leading-loose">
            From naturally grown cotton to ornate metallic jari — each collection is a distinct
            expression of textile artistry, produced with precision and offered at scale.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {FABRICS.map((f, i) => (
            <article
              key={f.id}
              className={`group relative overflow-hidden bg-ink border border-gold/10 hover:border-gold/40 transition-all duration-500 ${
                f.feat ? "lg:col-span-2 lg:row-span-1" : ""
              } fade-up d${i % 4}`}
            >
              <div className={`relative ${f.feat ? "aspect-[2/1]" : "aspect-[4/3]"} overflow-hidden`}>
                <img
                  src={f.img}
                  alt={f.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="font-serif text-2xl text-cream">{f.label}</h3>
                  <span className="text-[0.65rem] tracking-[0.25em] text-gold-light">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p className="text-sm text-cream/55 font-light leading-relaxed mb-4">{f.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[0.65rem] tracking-[0.15em] uppercase px-3 py-1 border border-gold/20 text-gold-pale/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-20 border-t border-gold/15 pt-16">
          <p className="text-xs tracking-[0.2em] uppercase text-cream/35 mb-8">
            Also available: Home Textile · Technical Fabrics · Custom Weaves
          </p>
          <Link to="/contact" className="btn-fill">
            Request Full Catalogue →
          </Link>
        </div>
      </section>
    </>
  );
}
