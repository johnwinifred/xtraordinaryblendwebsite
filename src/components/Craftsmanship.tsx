import React from "react";
import founderImage from "../assets/founder.jfif";

const Craftsmanship: React.FC = () => {
  return (
    <section id="bespoke" className="w-full bg-[#0d0d0d] grid md:grid-cols-2 min-h-[480px]">
      {/* Left: Image */}
      <div
        className="w-full h-72 md:h-auto"
        style={{
          backgroundImage: `url(${founderImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "grayscale(100%)",
        }}
      />

      {/* Right: Text */}
      <div className="flex flex-col justify-center px-10 md:px-16 py-16 border-l border-[#222]">
        <h2 className="text-white font-serif text-3xl md:text-4xl mb-6 leading-tight">
          From the hands of best artisans in West Africa
        </h2>
        <p className="text-gray-400 text-sm leading-relaxed mb-10 max-w-md">
          We honor the African heritage by working with skilled artisans in west africa to make handcrafted bespoke pieces. The weaves, embroidery, patterns, fabrics come from the custodians of the craft itself. Our pieces are produced by hands that have learned through generations of skill transfer.
        </p>

        {/* Tags */}
        <div className="flex gap-6">
          <div className="border border-[#333] px-5 py-3">
            <p className="text-[#ffad5b] text-xs font-bold tracking-widest uppercase mb-1">Authentic</p>
            <p className="text-gray-500 text-xs tracking-widest uppercase">Techniques</p>
          </div>
          <div className="border border-[#333] px-5 py-3">
            <p className="text-[#ffad5b] text-xs font-bold tracking-widest uppercase mb-1">Sustainable</p>
            <p className="text-gray-500 text-xs tracking-widest uppercase">Garments</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
