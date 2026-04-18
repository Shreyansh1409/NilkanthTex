import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { InnerHero } from "./heritage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nilkanth Tex | Surat, Gujarat, India" },
      {
        name: "description",
        content:
          "Request samples, bulk pricing, or custom fabric. Reach Nilkanth Tex at +91 98989 89898 or info@nilkanthtex.com.",
      },
      { property: "og:title", content: "Contact Nilkanth Tex" },
      {
        property: "og:description",
        content: "Get in touch for samples, bulk orders, or custom fabric development.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <InnerHero crumb="Contact" title="Let's" em="Connect" />

      <section className="px-[6%] py-24 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: details */}
          <div className="fade-up">
            <h2 className="display-h2">
              Start Your
              <br />
              <em>Fabric Journey</em>
            </h2>
            <p className="mt-8 text-cream/65 leading-loose font-light">
              Whether you need samples, bulk pricing, certification documents, or a fully custom
              fabric — our team is ready to help you create something extraordinary.
            </p>

            <div className="mt-12 space-y-8">
              {[
                {
                  label: "Address",
                  value: "Plot No. 42, Textile Market, Ring Road\nSurat – 395 002, Gujarat, India",
                },
                { label: "Phone", value: "+91 98989 89898\n+91 261 234 5678" },
                { label: "Email", value: "info@nilkanthtex.com\nexport@nilkanthtex.com" },
                { label: "Hours", value: "Mon–Sat: 9:30 AM – 7:00 PM\nSunday: Closed" },
              ].map((d) => (
                <div key={d.label} className="flex gap-6 items-start">
                  <div className="w-12 h-12 shrink-0 border border-gold/30 flex items-center justify-center">
                    <span className="font-display text-xs text-gold-light">
                      {d.label.slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                  <div>
                    <h4 className="text-xs tracking-[0.25em] uppercase text-gold-pale mb-2">
                      {d.label}
                    </h4>
                    <p className="text-sm text-cream/65 font-light whitespace-pre-line leading-relaxed">
                      {d.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="bg-[oklch(0.18_0.02_55)] border border-gold/20 p-8 md:p-10 fade-up d2"
          >
            <h3 className="font-display text-sm tracking-[0.25em] text-gold-pale mb-8">
              SEND AN ENQUIRY
            </h3>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name *" name="name" placeholder="Your full name" required />
              <Field label="Company" name="company" placeholder="Company name" />
              <Field label="Phone *" name="phone" type="tel" placeholder="+91 xxxxx xxxxx" required />
              <Field label="Email *" name="email" type="email" placeholder="your@email.com" required />
            </div>

            <div className="mt-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                Fabric Interest
              </label>
              <select
                name="fabric"
                className="w-full bg-ink border border-gold/20 px-4 py-3 text-cream text-sm focus:border-gold focus:outline-none transition-colors"
              >
                <option value="">Select a category</option>
                {[
                  "Cotton Fabrics",
                  "Polyester Fabrics",
                  "Printed Fabrics",
                  "Dyed Fabrics",
                  "Saree Fabrics",
                  "Knitted Fabrics",
                  "Fancy / Brocade",
                  "Jari & Gota",
                  "Organic Cotton",
                  "Custom / Other",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            </div>

            <div className="mt-5">
              <label className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/50 block mb-2">
                Message *
              </label>
              <textarea
                required
                rows={5}
                placeholder="Tell us about your requirements — quantity, GSM, width, end use…"
                className="w-full bg-ink border border-gold/20 px-4 py-3 text-cream text-sm focus:border-gold focus:outline-none transition-colors resize-none"
              />
            </div>

            <button type="submit" className="btn-fill w-full mt-8">
              {sent ? "✦ Message Sent" : "Send Enquiry →"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-[0.65rem] tracking-[0.2em] uppercase text-cream/50 block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full bg-ink border border-gold/20 px-4 py-3 text-cream text-sm focus:border-gold focus:outline-none transition-colors"
      />
    </div>
  );
}
