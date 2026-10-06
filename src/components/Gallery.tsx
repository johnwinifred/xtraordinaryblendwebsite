import React from "react";
import { Link } from "react-router-dom";
// import heritageLineImage from "../assets/Vintage shirt 1.1.jpeg";
// import heritageImage from "../assets/heritage.jfif";
import khaftanImage from "../assets/xhaftan2.jfif";
// import capBlueImage from "../assets/capblue.jfif";
// import regularImage from "../assets/regular.jfif";
// import xhaftanImage from "../assets/abia cap2.jpeg";
// import VintageImage from "../assets/Vintage shirt 2.jpeg";
import agbadaImage from "../assets/agbada.jpg";
import founderImage from "../assets/founder.png";
const Gallery: React.FC = () => {
  const images = [
    // {
    //   src: heritageLineImage,
    //   alt: "Man in traditional African agbada",
    //   tall: true,
    // },
    // {
    //   src: heritageImage,
    //   alt: "Man in tailored suit",
    //   tall: false,
    // },
    {
      src: founderImage,
      alt: "Man in red cap",
      tall: false,
    },
    // {
    //   src: VintageImage,
    //   alt: "Man in blue cap",
    //   tall: false,
    // },
    {
      src: agbadaImage,
      alt: "Regular wear styling",
      tall: false,
    },
    // {
    //   src: xhaftanImage,
    //   alt: "Man in premium suit seated",
    //   tall: false,
    // },
  ];

  return (
    <section id="gallery" className="w-full bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-center text-white font-serif italic mb-4"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          MEET THE FOUNDER
        </h2>

        <div className="text-center mb-10">
          <p className="text-[#f5f2ec] font-serif leading-none mb-2" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
            Chijioke Anthony Udorji
          </p>
          <p className="text-[#ffad5b] text-sm md:text-base tracking-[0.18em] uppercase">
            Founder • Fashion Designer • Tailor
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-2">
          <div
            className="bg-gray-800 overflow-hidden w-full max-w-2xl"
            style={{ minHeight: "50px", maxHeight: "620px" }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              style={{ minHeight: "50px", maxHeight: "620px" }}
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-10 text-center">
          <h3 className="text-[#ffad5b] text-lg md:text-xl font-bold tracking-[0.2em] uppercase mb-3">
            THE STORY BEHIND THE BLEND
          </h3>
          <p className="text-white text-lg md:text-xl leading-relaxed mb-4">
            From a first shirt in 2012 to a fashion brand shaped by heritage, craftsmanship and creativity.
          </p>
          <Link
            to="/about#founder-story"
            className="inline-flex items-center text-[#ffad5b] text-sm font-semibold tracking-[0.12em] uppercase hover:text-[#ffd29a] transition-colors"
          >
            Read the Founder’s Story →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
