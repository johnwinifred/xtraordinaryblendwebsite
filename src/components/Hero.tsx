import React from "react";
import heritageImage from "../assets/heroimage.jpeg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-black flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.85) 45%, rgba(0,0,0,0.5) 100%), url('${heritageImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="relative z-5 px-8 md:px-16 max-w-2xl text-center">
        {/* Label */}
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-8 h-px bg-[#ffad5b]" />
          <span className="text-[#ffad5b] text-xs tracking-[0.3em] uppercase font-medium">
            Heritage 1.0.0
          </span>
          <div className="w-8 h-px bg-[#ffad5b]" />
        </div>

        {/* Heading */}
        <h1 className="text-white font-serif mb-3" style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", lineHeight: 1.05 }}>
          Rooted in Heritage.
        </h1>
        <h2
          className="font-serif italic mb-10"
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            lineHeight: 1.05,
            color: "#ffad5b",
          }}
        >
          Made for Today.
        </h2>

        {/* CTA */}
        <Link to="/shop" className="inline-flex items-center gap-3 bg-[#ffad5b] text-black text-xs font-bold tracking-widest uppercase px-6 py-3.5 hover:bg-[#b8973e] transition-colors">
           Get your piece
          <span className="text-lg leading-none">→</span>
        </Link>
      
      </div>
    </section>
  );
};

export default Hero;
