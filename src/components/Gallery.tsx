import React from "react";
// import heritageLineImage from "../assets/Vintage shirt 1.1.jpeg";
// import heritageImage from "../assets/heritage.jfif";
import khaftanImage from "../assets/xhaftan2.jfif";
// import capBlueImage from "../assets/capblue.jfif";
// import regularImage from "../assets/regular.jfif";
// import xhaftanImage from "../assets/abia cap2.jpeg";
// import VintageImage from "../assets/Vintage shirt 2.jpeg";
import agbadaImage from "../assets/agbada.jpg";

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
      src: khaftanImage,
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
          className="text-center text-white font-serif italic mb-12"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
        >
          The Man that Commands Presence
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 justify-items-center gap-2">
          <div
            className="bg-gray-800 overflow-hidden w-full max-w-4xl"
            style={{ minHeight: "50px" }}
          >
            <img
              src={images[0].src}
              alt={images[0].alt}
              className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
              style={{ minHeight: "50px" }}
            />
          </div>
          {/* <div className="bg-gray-800 overflow-hidden" style={{ height: "236px" }}>
            <img
              src={images[2].src}
              alt={images[2].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div> */}

          {/* Row 2 */}
          {/* <div className="bg-gray-800 overflow-hidden" style={{ height: "236px" }}>
            <img
              src={images[3].src}
              alt={images[3].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div> */}
          {/* <div className="bg-gray-800 overflow-hidden" style={{ height: "236px" }}>
            <img
              src={images[4].src}
              alt={images[4].alt}
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
