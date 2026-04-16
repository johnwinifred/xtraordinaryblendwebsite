import React from "react";
import { Link } from "react-router-dom";

const CTA: React.FC = () => {
  return (
    <section
      id="contact"
      className="w-full bg-black py-24 px-8 text-center"
    >
      <div className="max-w-2xl mx-auto">
        <h2
          className="font-serif italic text-white mb-4"
          style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
        >
          Your story deserves a<br />
          <em>masterpiece.</em>
        </h2>
        <p className="text-gray-400 text-sm mb-10">
          Whether for a global summit or a private celebration, we craft your legacy.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:hello@xtraordinaryblend.com"
            className="inline-flex items-center justify-center gap-3 bg-[#ffad5b] text-black text-xs font-bold tracking-widest uppercase px-7 py-4 hover:bg-[#b8973e] transition-colors"
          >
            Send us a mail
            <span>✉</span>
            </a>
          
          <Link to='/shop' className="inline-flex items-center justify-center border border-[#444] text-white text-xs font-bold tracking-widest uppercase px-7 py-4 hover:border-[#ffad5b] hover:text-[#ffad5b] transition-colors">
            Browse our Store
          </Link>
        
        </div>
      </div>
    </section>
  );
};

export default CTA;
