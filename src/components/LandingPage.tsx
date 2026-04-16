import React from "react";
import Hero from "./Hero";
import Craftsmanship from "./Craftsmanship";
import StatsBar from "./StatsBar";
import Gallery from "./Gallery";
import Testimonials from "./Testimonials";
import CTA from "./CTA";

const LandingPage: React.FC = () => {
  return (
    <div className="bg-black min-h-screen font-sans">
      <main>
        <Hero />
        <Craftsmanship />
        <StatsBar />
        <Gallery />
        <Testimonials />
        <CTA />
      </main>
\    </div>
  );
};

export default LandingPage;
