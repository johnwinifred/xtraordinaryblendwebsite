import React from "react";

const stats = [
  { value: "240+", label: "Bespoke Pieces Sold" },
  { value: "2", label: "Physical Stores" },
  { value: "5+", label: "Countries delivered" },
];

const StatsBar: React.FC = () => {
  return (
    <section className="w-full bg-[#111] border-t border-b border-[#222] py-12 px-8">
      <div className="max-w-4xl mx-auto grid grid-cols-3 gap-6 text-center">
        {stats.map((stat, i) => (
          <div key={i} className={`${i !== 2 ? "border-r border-[#333]" : ""} px-4`}>
            <p
              className="font-serif text-white mb-2"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
            >
              {stat.value}
            </p>
            <p className="text-gray-500 text-xs tracking-widest uppercase">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsBar;
