import cotton from "@/assets/fabrics/cotton.png";
import polyester from "@/assets/fabrics/polyester.png";
import jari from "@/assets/fabrics/jari.png";
import saree from "@/assets/fabrics/saree.png";
import printed from "@/assets/fabrics/printed.png";
import fancy from "@/assets/fabrics/fancy.png";
import satin from "@/assets/fabrics/satin.png";
import dyed from "@/assets/fabrics/dyed.png";
import organic from "@/assets/fabrics/organic.png";
import lace from "@/assets/fabrics/lace.png";
import knit from "@/assets/fabrics/knit.png";
import nylon from "@/assets/fabrics/nylon.png";
import bedsheet from "@/assets/fabrics/bedsheet.png";
import garment from "@/assets/fabrics/garment.png";
import kurti from "@/assets/fabrics/kurti.png";
import rfd from "@/assets/fabrics/rfd.png";
import recycledPolyester from "@/assets/fabrics/recycled-polyester.png";

export type Fabric = {
  id: string;
  label: string;
  desc: string;
  tags: string[];
  img: string;
  feat?: boolean;
};

export const FABRICS: Fabric[] = [
  {
    id: "cotton",
    label: "Cotton Fabrics",
    desc: "Pure, soft, breathable cotton in poplin, voile, twill, and cambric. GSM 80–250 across solid and yarn-dyed qualities.",
    tags: ["Poplin", "Voile", "Twill", "Cambric"],
    img: cotton,
    feat: true,
  },
  {
    id: "jari",
    label: "Jari & Gota",
    desc: "Traditional metallic jari, zari, and gota work. Pure silver-finish, gold-tone, and tested fast colors.",
    tags: ["Pure Jari", "Gota", "Imitation"],
    img: jari,
  },
  {
    id: "saree",
    label: "Saree Fabrics",
    desc: "Premium saree-grade fabrics — silk blends, georgette, chiffon, and Banarasi-style weaves.",
    tags: ["Banarasi", "Georgette", "Silk Blend"],
    img: saree,
  },
  {
    id: "printed",
    label: "Printed Fabrics",
    desc: "Vibrant reactive, digital, and screen-printed designs. Custom prints across substrates.",
    tags: ["Digital", "Screen Print", "Reactive"],
    img: printed,
    feat: true,
  },
  {
    id: "polyester",
    label: "Polyester Fabrics",
    desc: "Lightweight, durable, wrinkle-resistant. Georgette, chiffon, satin blends in 200+ colorways.",
    tags: ["Georgette", "Chiffon", "Satin"],
    img: polyester,
  },
  {
    id: "fancy",
    label: "Fancy / Brocade",
    desc: "Brocade, jacquard, chiffon, crepe, and novelty fabrics for fashion-forward premium retail.",
    tags: ["Brocade", "Jacquard", "Crepe"],
    img: fancy,
  },
  {
    id: "satin",
    label: "Satin Fabrics",
    desc: "Lustrous satin-weave with silky surface. Duchess satin, crepe satin, and lining qualities.",
    tags: ["Duchess", "Crepe Satin", "Lining"],
    img: satin,
  },
  {
    id: "dyed",
    label: "Dyed Fabrics",
    desc: "Vat, reactive, and disperse dyed fabrics in 500+ solid shades. Colorfastness tested to international standards.",
    tags: ["Vat Dye", "Reactive", "Disperse"],
    img: dyed,
  },
  {
    id: "organic",
    label: "Organic Cotton",
    desc: "GOTS certified organic cotton with full farm-to-fabric traceability. Chemical-free.",
    tags: ["GOTS", "Organic", "Sustainable"],
    img: organic,
  },
  {
    id: "lace",
    label: "Lace Fabrics",
    desc: "Delicate floral and geometric lace in cotton, nylon, and polyester for bridal and fashion.",
    tags: ["Floral", "Bridal", "Stretch"],
    img: lace,
  },
  {
    id: "knit",
    label: "Knitted Fabrics",
    desc: "Single jersey, interlock, rib, and fleece knits. Soft, stretchy, and comfortable for garments.",
    tags: ["Jersey", "Interlock", "Fleece"],
    img: knit,
  },
];

export const MARQUEE_ITEMS = [
  "Cotton Fabrics",
  "Polyester Fabrics",
  "Jari & Gota",
  "Saree Fabrics",
  "Printed Fabrics",
  "Organic Cotton",
  "Knitted Fabrics",
  "Fancy Brocade",
  "Dyed Fabrics",
  "Satin Fabrics",
];
