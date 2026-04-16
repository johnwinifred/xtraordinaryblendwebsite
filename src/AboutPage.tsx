import React from "react";
import xhftanImage from "./assets/xkhaftan.jfif";
import beforeImage from "./assets/beforeafter.jfif";


const SectionHeader = ({
  num, title, sub, light = false,
}: {
  num: string; title: string; sub: string; light?: boolean;
}) => (
  <div className="mb-10">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-white text-xs font-black tracking-widest uppercase px-3 py-1" style={{ background: "#ffad5b" }}>{num}</span>
      <div className={`flex-1 h-px ${light ? "bg-[#333]" : "bg-gray-200"}`} />
    </div>
    <h2
      style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "0.06em" }}
      className={`${light ? "text-white" : "text-black"} mb-1`}
    >
      {title}
    </h2>
    <p className="text-sm font-light tracking-wide text-gray-500">{sub}</p>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <div style={{ fontFamily: "'Barlow', sans-serif" }} className="bg-[#F5F2EC] text-black">

    

      {/* ── HERO ── */}
      {/* <div className="relative bg-black flex items-end overflow-hidden" style={{ minHeight: "55vh" }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1594938298603-c8148c4b4d6a?w=1400&q=80')", opacity: 0.22 }} />
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(201,168,76,0.05) 40px, rgba(201,168,76,0.05) 41px)" }} />
        <div className="relative z-10 px-14 pb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8" style={{ height: "2px", background: "#ffad5b" }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#ffad5b" }}>Our Story</span>
          </div>
          <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(3rem,8vw,6rem)", letterSpacing: "0.05em", lineHeight: 0.95 }} className="text-white mb-4">
            Where <span style={{ color: "#ffad5b" }}>Heritage</span><br />Meets Style
          </h1>
          <p className="text-gray-400 text-sm font-light leading-relaxed max-w-sm">
            Born in West Africa. Refined in Manchester. Worn by those who command presence.
          </p>
        </div>
      </div>
      <div style={{ height: "5px", background: "#ffad5b" }} /> */}

      {/* ── 1. FROM WEST AFRICA TO MANCHESTER ── */}
      <section className="py-24 border-b border-gray-200 bg-[#F5F2EC]">
        <div className="max-w-5xl mx-auto px-10">
          <SectionHeader num="01" title="From West Africa to Manchester" sub="A story rooted in culture, colour, and the courage to carry tradition forward." />
          <div className="grid md:grid-cols-2 gap-16 items-center mt-4">
            {/* Text */}
            <div>
              <p className="text-sm text-gray-600 leading-loose font-light mb-4">
                We started at the very <strong className="text-black font-bold">roots of West Africa</strong>, working closely with local artisans — intrigued by the rich cultural representation and vibrant blend of colours that define African fashion at its finest.
              </p>
              <blockquote className="my-7 pl-5 text-lg italic text-black font-medium leading-relaxed" style={{ borderLeft: "4px solid #ffad5b" }}>
                We wanted to keep the culture alive, with a modern blend for every occasion — from everyday wear down to the grandest events.
              </blockquote>
              <p className="text-sm text-gray-600 leading-loose font-light mb-4">
                That vision carried us from the workshops of Nigeria to the streets of Manchester, where we found a community hungry for garments that told a richer story. Xtraordinary Blend was born at that intersection: <strong className="text-black">heritage and modernity, West Africa and the UK</strong>, tradition and ambition.
              </p>
              <p className="text-sm text-gray-600 leading-loose font-light">
                Today, we bring that same spirit to every piece we create — whether it's a full bespoke commission or a single tailored alteration. The culture travels with every garment.
              </p>
              {/* Journey timeline */}
              <div className="flex mt-10">
                {[
                  { place: "West Africa", desc: "Roots, artisans & rich cultural textiles", first: true },
                  { place: "Nigeria", desc: "Manufacturing & craft partnerships", first: false },
                  { place: "Manchester", desc: "Home, retail & global delivery", first: false },
                ].map((stop) => (
                  <div key={stop.place} className="flex-1 pl-5 relative" style={{ borderLeft: `2px solid ${stop.first ? "#ffad5b" : "#e0e0e0"}` }}>
                    <div className="absolute w-2 h-2 rounded-full" style={{ background: "#ffad5b", left: "-5px", top: "1.4rem" }} />
                    <p className="text-xs font-black tracking-widest uppercase mb-1" style={{ color: "#ffad5b" }}>{stop.place}</p>
                    <p className="text-xs text-gray-500 leading-relaxed font-light">{stop.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <img
                src={beforeImage}
                alt="Bespoke African-inspired suit"
                className="w-full object-cover block"
                style={{ aspectRatio: "4/5", filter: "grayscale(20%)" }}
              />
              <div className="absolute text-white text-center px-6 py-5" style={{ background: "#ffad5b", bottom: "-1.5rem", left: "-1.5rem" }}>
                <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", lineHeight: 1, display: "block" }}>10+</span>
                <span className="text-xs font-bold tracking-widest uppercase block mt-1">Years of<br />Craft</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. WHAT WE DO ── */}
      <section className="py-24 bg-[#111] border-b border-black text-black">
        <div className="max-w-5xl mx-auto px-10">
          <SectionHeader num="02"  title="What We Do" sub="Design, production, and services rooted in Afro-western excellence." light />
          {/* 3 pillars */}
          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {[
              { icon: "🧵", title: "Design & Production", desc: "We design and produce Afro-western clothing and handmade African accessories — partly manufactured in Nigeria and brought to life in Manchester." },
              { icon: "🛍️", title: "Retail & Online Sales", desc: "Our pieces are sold in the UK through online platforms and direct retail. Every item is curated for those who wear culture with intention." },
              { icon: "✂️", title: "Tailoring & Cleaning", desc: "We offer professional tailoring, garment alteration, and commercial cleaning services — extending the life and dignity of every garment." },
            ].map((p) => (
              <div key={p.title} className="border p-8 transition-colors hover:bg-[#1a1a1a] cursor-default"
                style={{ borderColor: "#222", borderTop: `4px solid #ffad5b` }}>
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-xs font-black tracking-widest uppercase text-white mb-3">{p.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed font-normal">{p.desc}</p>
              </div>
            ))}
          </div>
          {/* Summary + Stats */}
          <div className="grid md:grid-cols-2 gap-12 mt-14 items-center">
            <div>
              <p className="text-sm text-gray-400 leading-loose font-normal mb-4">
                <strong style={{ color: "#ffad5b" }}>Xtraordinary Blend Ltd</strong> sits at the intersection of cultural pride and contemporary fashion. We design, produce, and sell Afro-western clothing and handmade African accessories, manufactured partly in Nigeria and sold across the UK and globally.
              </p>
              <p className="text-sm text-gray-400 leading-loose font-normal">
                Beyond clothing, we serve as a full garment service — tailoring, altering, and cleaning pieces to keep your wardrobe exceptional. Whether it's a first commission or a returning alteration, every interaction is handled with the same care and expertise.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-px" style={{ background: "#222" }}>
              {[["240+", "Bespoke Pieces"], ["2", "Continents"], ["4", "Core Services"], ["100%", "Handcrafted"]].map(([v, l]) => (
                <div key={l} className="bg-black py-8 text-center">
                  <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "3rem", color: "#fff", display: "block", lineHeight: 1 }}>{v}</span>
                  <span className="text-xs font-bold tracking-widest uppercase block mt-2" style={{ color: "#ffad5b" }}>{l}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 3. FOUNDER STORY ── */}
      <section className="py-24 bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-10">
          <SectionHeader num="03" title="Founder Story" sub="The vision, the voice, the reason behind every stitch." />
          <div className="grid md:grid-cols-5 gap-16 mt-10">
            {/* Image */}
            <div className="md:col-span-2 relative">
              <img
                src={xhftanImage}
                alt="Founder of Xblendix"
                className="w-full object-cover object-top block"
                style={{ aspectRatio: "3/4", filter: "grayscale(15%)" }}
              />
              {/* <div className="absolute bottom-0 left-0 right-0 px-6 py-8" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}>
                <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "1.6rem", letterSpacing: "0.06em" }} className="text-white">The Founder</h3>
                <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#ffad5b" }}>Xtraordinary Blend Ltd · Manchester, UK</p>
              </div> */}
            </div>
            {/* Story */}
            <div className="md:col-span-3">
              <p className="text-xs font-black tracking-widest uppercase mb-5" style={{ color: "#ffad5b" }}>In Their Own Words</p>
              <blockquote className="italic text-2xl text-black leading-snug mb-8 pl-6 relative" style={{ fontFamily: "Georgia, serif" }}>
                <span className="absolute left-0 text-6xl leading-none" style={{ color: "#ffad5b", fontFamily: "Georgia, serif", top: "-0.2rem" }}>"</span>
                Being well-dressed is a visible expression and representation of an art - Chijioke Anthony Udorji 
                <p className="text-xs font-bold tracking-widest uppercase mt-2" style={{ color: "#ffad5b" }}>Director, Xtraordinary Blend Ltd</p>
              </blockquote>
              <div className="space-y-4 text-sm text-gray-500 leading-loose font-light">
                <p>Growing up surrounded by the colours, patterns, and textures of West African fashion, I was always drawn to the artistry of our people. The way a well-sewn agbada commands a room. The way kente speaks before the wearer does.I wanted to bring that language of fabric into contemporary spaces.</p>
                <p>When I moved to Manchester, I found a gap. There were people like me in diaspora, professionals, men of culture, who wanted to show up dressed in both worlds. Not choosing between African and Western, but <strong className="text-black">wearing both unapologetically</strong>.</p>
                <div className="px-4 py-4 my-6 text-sm font-medium leading-relaxed" style={{ background: "#fdf8ee", borderLeft: "4px solid #ffad5b", color: "#555" }}>
                  That's what Xtraordinary Blend is. It's the bridge. From the artisans in Nigeria who cut the first fabric, to the client in Manchester who walks into the room and owns it.
                </div>
                <p>We started small alterations, a few commissions, word of mouth. But every satisfied client, every perfectly fitted suit, every returned customer confirmed what we believed: <strong className="text-black">there is a market for clothing that honours identity</strong>. And that market deserves excellence.</p>
                <p>This is a continuation of a legacy — stitched carefully, worn proudly, and built to last.</p>
              </div>
              <div className="flex flex-wrap gap-2 mt-6">
                {["Heritage", "Precision", "Identity", "Excellence", "Community"].map((v) => (
                  <span key={v} className="bg-black text-white text-xs font-bold tracking-widest uppercase px-3 py-1.5">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. CTA ── */}
      <section className="bg-[#111] py-24 px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 30px, rgba(201,168,76,0.04) 30px, rgba(201,168,76,0.04) 31px)" }} />
        <div className="relative z-10 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffad5b" }} />
            <span className="text-xs font-bold tracking-[0.3em] uppercase" style={{ color: "#ffad5b" }}>Your Turn</span>
            <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#ffad5b" }} />
          </div>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: "clamp(2.5rem,6vw,4.5rem)", letterSpacing: "0.05em", lineHeight: 1 }} className="text-white mb-3">
            Ready to Shop<br /><span style={{ color: "#ffad5b" }}>With Us?</span>
          </h2>
          <p className="text-gray-400 text-sm font-light leading-relaxed mb-10">
            Whether you're looking for your first bespoke commission, a custom piece, or just browsing the collection — we'd love to dress you in something extraordinary.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#" className="text-white text-xs font-bold tracking-widest uppercase px-8 py-4 no-underline transition-opacity hover:opacity-80"
              style={{ background: "#ffad5b", color: "#000" }}>
              Shop the Collection
            </a>
            <a href="mailto:xblendix@xtraordinaryblend.com" className="text-white text-xs font-bold tracking-widest uppercase px-8 py-4 no-underline transition-colors hover:border-[#ffad5b]"
              style={{ border: "1px solid #444" }}>
              Book a Consultation
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutPage;
