import cotton from "@/assets/fabrics/cotton.png";
import polyester from "@/assets/fabrics/polyester.png";
import sareeAsset from "@/assets/fabrics/saree-front.jpg.asset.json";
import jariAsset from "@/assets/fabrics/jari-raw.jpg.asset.json";
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
import linen from "@/assets/fabrics/linen.png";
import denim from "@/assets/fabrics/denim.png";
import velvet from "@/assets/fabrics/velvet.png";
import rayon from "@/assets/fabrics/rayon.png";
import silk from "@/assets/fabrics/silk.png";
import tencel from "@/assets/fabrics/tencel.png";
import hemp from "@/assets/fabrics/hemp.png";
import bamboo from "@/assets/fabrics/bamboo.png";



const saree = sareeAsset.url;
const jari = jariAsset.url;

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
  {
    id: "nylon",
    label: "Nylon Fabrics",
    desc: "Lightweight, strong, and abrasion-resistant synthetic. Used for sportswear, bags, and technical textiles.",
    tags: ["Taslan", "Ripstop", "Taffeta"],
    img: nylon,
  },
  {
    id: "bedsheet",
    label: "Bedsheet Fabrics",
    desc: "Premium percale and sateen weave bedsheet qualities. Soft hand-feel with hotel-grade durability.",
    tags: ["Percale", "Sateen", "Hotel Grade"],
    img: bedsheet,
  },
  {
    id: "garment",
    label: "Garment Fabrics",
    desc: "Ready-to-stitch suiting, shirting, and lining materials for garment production and tailoring.",
    tags: ["Suiting", "Shirting", "Lining"],
    img: garment,
  },
  {
    id: "kurti",
    label: "Kurti Fabrics",
    desc: "Traditional and contemporary fabrics for ethnic kurti production. Block prints, embroidery bases, and solids.",
    tags: ["Rayon", "Cotton Blend", "Embroidery Base"],
    img: kurti,
  },
  {
    id: "rfd",
    label: "RFD Fabrics",
    desc: "Ready for Dyeing / Ready for Printing greige fabrics. Unfinished, prepared for custom color and print processing.",
    tags: ["Greige", "Prepared", "Custom Dye"],
    img: rfd,
  },
  {
    id: "recycled-polyester",
    label: "Recycled Polyester",
    desc: "Eco-friendly rPET fabric made from recycled plastic bottles. Sustainable without compromising performance.",
    tags: ["rPET", "Eco-Friendly", "Sustainable"],
    img: recycledPolyester,
  },
  {
    id: "linen",
    label: "Linen & Viscose",
    desc: "Breathable linen and linen-viscose blends with natural slub texture. Ideal for premium summer garments and resort wear.",
    tags: ["Pure Linen", "Linen Blend", "Slub"],
    img: linen,
  },
  {
    id: "denim",
    label: "Denim Fabrics",
    desc: "Indigo-dyed twill denim in stretch, rigid, and selvedge qualities. 8–14 oz weights for jeans, jackets, and workwear.",
    tags: ["Indigo", "Stretch", "Selvedge"],
    img: denim,
  },
  {
    id: "velvet",
    label: "Velvet Fabrics",
    desc: "Rich plush velvet with deep pile and luxurious sheen. Cotton, silk, and micro velvet for couture and upholstery.",
    tags: ["Silk Velvet", "Micro Velvet", "Devoré"],
    img: velvet,
  },
  {
    id: "rayon",
    label: "Rayon & Viscose",
    desc: "Fluid rayon and viscose with soft drape and beautiful print takeup. Ideal for kurtis, dresses, and flowing silhouettes.",
    tags: ["Viscose", "Modal", "Challis"],
    img: rayon,
  },
  {
    id: "silk",
    label: "Silk Fabrics",
    desc: "Pure mulberry silk, dupion, and habotai in lustrous natural sheen. Bridal-grade and export-quality weaves.",
    tags: ["Mulberry", "Dupion", "Habotai"],
    img: silk,
    feat: true,
  },
  {
    id: "tencel",
    label: "Tencel / Lyocell",
    desc: "Botanic-sourced Tencel lyocell with silky drape and moisture-wicking performance. Closed-loop, biodegradable.",
    tags: ["Lyocell", "Botanic", "Biodegradable"],
    img: tencel,
  },
  {
    id: "hemp",
    label: "Hemp Fabrics",
    desc: "Durable hemp and hemp-cotton blends with a natural rustic texture. Low-impact crop, exceptional longevity.",
    tags: ["Pure Hemp", "Hemp Cotton", "Low Impact"],
    img: hemp,
  },
  {
    id: "bamboo",
    label: "Bamboo Fabrics",
    desc: "Silky-soft bamboo viscose with natural antibacterial and moisture-wicking properties. Breathable and sustainable.",
    tags: ["Bamboo Viscose", "Antibacterial", "Breathable"],
    img: bamboo,
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
