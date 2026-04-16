import React, { useState, useEffect } from "react";

// ── Types ───────────────────────────────────────────────
type SizeRegion = "us" | "uk";

// ── Data ────────────────────────────────────────────────
const US_SIZES = [
  { size: "S", chest: "34–36", neck: "14–14.5", waist: "28–30", trouser: "40" },
  { size: "M", chest: "38–40", neck: "15–15.5", waist: "32–34", trouser: "41" },
  { size: "L", chest: "42–44", neck: "16–16.5", waist: "36–38", trouser: "42" },
  { size: "XL", chest: "46–48", neck: "17–17.5", waist: "40–42", trouser: "43" },
  { size: "2XL", chest: "50–52", neck: "18–18.5", waist: "44–46", trouser: "44" },
  { size: "3XL", chest: "54–56", neck: "19–19.5", waist: "48–50", trouser: "45" },
  { size: "4XL", chest: "58–60", neck: "20", waist: "52–54", trouser: "46" },
];

const UK_SIZES = [
  { size: "S", chest: "34–36", neck: "14–14.5", waist: "28–30", trouser: "40" },
  { size: "M", chest: "38–40", neck: "15–15.5", waist: "32–34", trouser: "41" },
  { size: "L", chest: "42–44", neck: "16–16.5", waist: "36–38", trouser: "42" },
  { size: "XL", chest: "46–48", neck: "17–17.5", waist: "40–42", trouser: "43" },
  { size: "2XL", chest: "50–52", neck: "18–18.5", waist: "44–46", trouser: "44" },
  { size: "3XL", chest: "54–56", neck: "19–19.5", waist: "48–50", trouser: "45" },
  { size: "4XL", chest: "58–60", neck: "20", waist: "52–54", trouser: "46" },
];

const SERVICES = [
  { icon: "🧵", title: "Bespoke Clothing", desc: "Fully custom garments designed around your body, your lifestyle, and your legacy. Every stitch intentional, every detail yours." },
  { icon: "👕", title: "Custom T-Shirts", desc: "Premium quality tees with bespoke printing, embroidery, or cut-and-sew construction. Elevate the everyday." },
  { icon: "✂️", title: "Garment Alterations", desc: "Expert tailoring adjustments — from hemming to full reconstructions — to ensure every garment fits as it should: perfectly." },
];

const CARE = [
  { icon: "🚫", badge: "Do Not", badgeType: "dont", title: "Machine Washing", desc: "Never wash your bespoke garments in a washing machine. Agitation and heat can damage fine fabrics and delicate stitching." },
  { icon: "✅", badge: "Recommended", badgeType: "do", title: "Dry Cleaning Only", desc: "All bespoke and tailored garments should be dry cleaned by a professional to maintain structure, colour, and fabric integrity." },
  { icon: "🧼", badge: "If Hand Washing", badgeType: "do", title: "Gentle Soap Only", desc: "If hand washing is necessary, use only a soft, mild soap or gentle washing detergent. Do not wring or twist the fabric." },
  { icon: "👔", badge: "Storage Tip", badgeType: "do", title: "Hang & Store Properly", desc: "Always hang garments on wide, padded hangers. Store in breathable garment bags away from direct sunlight." },
];

const FAQS = [
  { q: "How long does a bespoke order take?", a: "Bespoke orders typically take 4–8 weeks depending on the complexity of the garment, fabric availability, and current order volume. We'll give you a precise timeline during your initial consultation." },
  { q: "Do you offer international shipping?", a: "Yes. We ship globally from our Manchester, UK base. We regularly deliver to West Africa, Europe, the United States, and Asia. Shipping timelines and costs vary by destination — please contact us for a quote." },
  { q: "Can I return a custom-made garment?", a: "Custom wears are non-returnable as they are made specifically to your measurements and specifications. We strongly recommend reviewing your measurements carefully before confirming your order." },
  { q: "How should I care for my bespoke garment?", a: "We recommend dry cleaning only for all tailored and bespoke pieces. Avoid machine washing entirely. If light hand washing is necessary, use a soft soap or gentle detergent and handle with care." },
  { q: "What size should I order?", a: "Please refer to our Size Guide using our US or UK measurement charts. For bespoke orders, we take your exact measurements. For ready-to-wear, measure your chest, waist, and trouser length and match to the chart." },
  { q: "Do you alter garments not purchased from you?", a: "Yes, our tailoring team offers alteration services on external pieces. Bring your garment to our Manchester studio or contact us to arrange a consultation." },
  { q: "How do I get in touch for a consultation?", a: "Reach us via email at xblendix@xtraordinaryblend.com. We're based in Manchester, UK and happy to accommodate in-person consultations or virtual appointments for international clients." },
];

// ── Sub-components ───────────────────────────────────────

const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub: string }) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-4">
      <span className="bg-[#F07B3A] text-white text-xs font-black tracking-widest uppercase px-3 py-1">{num}</span>
      <div className="flex-1 h-px bg-gray-200" />
    </div>
    <h2 style={{ fontFamily: "sans-serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.06em" }} className="text-black mb-1">{title}</h2>
    <p className="text-sm text-gray-500 font-light ">{sub}</p>
  </div>
);

const SizeTable = ({ data }: { data: typeof US_SIZES }) => (
  <div className="overflow-x-auto">
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-black text-white">
          {["Size", "Chest (in)", "Neck (in)", "Waist (in)", "Trouser Length (in)"].map(h => (
            <th key={h} className="px-5 py-3 text-xs font-bold tracking-widest uppercase text-center">{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row) => (
          <tr key={row.size} className="border-b border-gray-100 hover:bg-orange-50 transition-colors">
            <td className="px-5 py-3 text-center font-black text-xs tracking-widest uppercase text-[#ffad5b] border-r border-gray-100">{row.size}</td>
            <td className="px-5 py-3 text-center font-semibold">{row.chest}</td>
            <td className="px-5 py-3 text-center font-semibold">{row.neck}</td>
            <td className="px-5 py-3 text-center font-semibold">{row.waist}</td>
            <td className="px-5 py-3 text-center font-semibold">{row.trouser}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ── Main Page ────────────────────────────────────────────

const ServicesPage: React.FC = () => {
  const [sizeRegion, setSizeRegion] = useState<SizeRegion>("us");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="font-sans bg-[#F5F2EC] text-black" text-xl>

      {/* ── HERO ── */}
      <div className="bg-black py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "repeating-linear-gradient(45deg, #ffad5b, #ffad5b 1px, transparent 1px, transparent 50px)" }} />
        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.0em" }} className="text-white">
          Our <span className="text-[#ffad5b]">Services</span>
        </h1>
        <p className="text-gray-400 mt-2 text-sm tracking-wide font-light">Bespoke excellence, crafted in Manchester — delivered to the world.</p>
      </div>
      <div className="h-1.5 bg-[#ffad5b]" />

      {/* ── SECTION TABS ── */}
      <div className="bg-white border-b-2 border-gray-200 flex justify-center overflow-x-auto px-6">
        {["Our Services", "Size Guide", "Care Instructions", "Shipping & Returns", "FAQ"].map((tab, i) => (
          <a key={i} href={`#section-${i}`} className="text-xs font-bold tracking-widest uppercase text-gray-500 px-6 py-4 whitespace-nowrap border-b-2 border-transparent hover:text-[#ffad5b] hover:border-[#ffad5b] transition-all">{tab}</a>
        ))}
      </div>

      {/* ── 1. OUR SERVICES ── */}
      <section id="section-0" className="py-20 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-8">
          <SectionHeader num="01" title="Our Services" sub="From concept to couture — we craft garments that command presence." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((s) => (
              <div key={s.title} className="bg-white border border-gray-100 border-t-4 border-t-[#ffad5b] p-8 hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xs font-black tracking-widest uppercase mb-2">{s.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. SIZE GUIDE ── */}
      <section id="section-1" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <SectionHeader num="02" title="Size Guide" sub="Men's Measurement Guideline — all measurements in inches." />
          <div className="flex gap-0 mb-6">
            <button onClick={() => setSizeRegion("us")} className={`text-xs font-bold tracking-widest uppercase px-6 py-3 border transition-all ${sizeRegion === "us" ? "bg-[#ffad5b] text-white border-[#ffad5b]" : "bg-white text-gray-500 border-gray-200"}`}>🇺🇸 US Sizing</button>
            <button onClick={() => setSizeRegion("uk")} className={`text-xs font-bold tracking-widest uppercase px-6 py-3 border transition-all ${sizeRegion === "uk" ? "bg-[#ffad5b] text-white border-[#ffad5b]" : "bg-white text-gray-500 border-gray-200"}`}>🇬🇧 UK Sizing</button>
          </div>
          <SizeTable data={sizeRegion === "us" ? US_SIZES : UK_SIZES} />
          <p className="mt-3 text-xs text-gray-400 italic">* All measurements are in inches. Tolerance: ±0.5 inch. These are body measurements, not garment measurements.</p>
        </div>
      </section>

      {/* ── 3. CARE INSTRUCTIONS ── */}
      <section id="section-2" className="py-20 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-8">
          <SectionHeader num="03" title="Care Instructions" sub="Preserve the quality of your investment with proper garment care." />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARE.map((c) => (
              <div key={c.title} className={`bg-white p-7 text-center relative overflow-hidden border ${c.badgeType === "dont" ? "border-red-100" : "border-green-100"}`}>
                <div className={`absolute top-0 left-0 right-0 h-1 ${c.badgeType === "dont" ? "bg-red-500" : "bg-green-500"}`} />
                <div className="text-4xl mb-3">{c.icon}</div>
                <span className={`inline-block text-xs font-black tracking-widest uppercase px-2 py-0.5 rounded mb-3 ${c.badgeType === "dont" ? "bg-red-100 text-red-500" : "bg-green-100 text-green-600"}`}>{c.badge}</span>
                <h3 className="text-xs font-black tracking-widest uppercase mb-2">{c.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. SHIPPING & RETURNS ── */}
      <section id="section-3" className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-8">
          <SectionHeader num="04" title="Shipping & Returns" sub="Based in Manchester, UK — delivering bespoke excellence to the world." />
          <div className="grid md:grid-cols-5 gap-12">
            {/* Regions */}
            <div className="md:col-span-2">
              <p className="text-xs font-black tracking-widest uppercase text-[#ffad5b] mb-3">We Ship To</p>
              <ul className="divide-y divide-gray-100">
                {[["🇬🇧", "United Kingdom (HQ)"], ["🌍", "West Africa"], ["🇪🇺", "Europe"], ["🇺🇸", "United States"], ["🌏", "Asia"]].map(([flag, name]) => (
                  <li key={name} className="flex items-center gap-3 py-3 text-sm font-medium"><span className="text-xl">{flag}</span>{name}</li>
                ))}
              </ul>
              <p className="text-xs font-black tracking-widest uppercase text-[#ffad5b] mt-8 mb-3">Return Address</p>
              <div className="bg-black text-white p-5 text-sm leading-relaxed border-l-4 border-[#ffad5b] font-normal">
                116 Worsley Road North<br />Worsley, Manchester<br />M28 3QW<br />United Kingdom
              </div>
            </div>

            {/* Policy */}
            <div className="md:col-span-3 text-sm text-gray-500 leading-relaxed font-normal space-y-4">
              {[
                { h: "Overview", body: <>Our refund and returns policy lasts <strong className="text-black">30 days</strong>. If 30 days have passed since your purchase, we can't offer you a full refund or exchange. To be eligible for a return, your item must be unused and in the same condition you received it, in the original packaging. <strong className="text-black">⚠️ Custom wears are non-returnable.</strong></> },
                { h: "Partial Refunds May Apply For", body: <ul className="list-disc pl-4 space-y-1"><li>Items with obvious signs of use</li><li>Any item not in original condition, damaged or missing parts not due to our error</li><li>Items returned more than 30 days after delivery</li></ul> },
                { h: "Refunds", body: "Once your return is received and inspected, we'll notify you of the approval or rejection. If approved, a credit will be applied to your original payment method within a certain number of days." },
                { h: "Late or Missing Refunds", body: <>Check your bank account, then contact your credit card company, then your bank. If you still haven't received your refund, contact us at <a href="mailto:xblendix@xtraordinaryblend.com" className="text-[#ffad5b] font-semibold">xblendix@xtraordinaryblend.com</a>.</> },
                { h: "Sale Items", body: "Only regular priced items may be refunded. Sale items cannot be refunded." },
                { h: "Exchanges", body: <>We only replace items if they are defective or damaged. Email us at <a href="mailto:xblendix@xtraordinaryblend.com" className="text-[#ffad5b] font-semibold">xblendix@xtraordinaryblend.com</a> and send your item to our Manchester address.</> },
                { h: "Gifts", body: "If an item was marked as a gift and shipped directly to you, you'll receive a gift credit. If not marked as a gift, the refund goes to the gift giver." },
                { h: "Shipping Returns", body: "You are responsible for your own return shipping costs. Costs are non-refundable. For expensive items, consider using a trackable shipping service." },
              ].map(({ h, body }) => (
                <div key={h}>
                  <p className="text-xs font-black tracking-widest uppercase text-black mb-1">{h}</p>
                  <div>{body}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. FAQ ── */}
      <section id="section-4" className="py-20 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-8">
          <SectionHeader num="05" title="FAQ" sub="Frequently asked questions about our services and policies." />
          <div className="divide-y divide-gray-200">
            {FAQS.map((faq, i) => (
              <div key={i}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex justify-between items-center py-5 text-left bg-transparent border-none cursor-pointer font-bold text-sm tracking-tight hover:text-[#ffad5b] transition-colors"
                >
                  {faq.q}
                  <span className={`text-[#ffad5b] text-xl leading-none transition-transform duration-300 ${openFaq === i ? "rotate-45" : ""}`}>+</span>
                </button>
                {openFaq === i && (
                  <p className="pb-5 text-sm text-gray-500 leading-relaxed font-normal">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}

    </div>
  );
};

export default ServicesPage;
