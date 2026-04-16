import React from "react";

const testimonials = [
  {
    quote:
      "Tailored to perfection with exceptional attention to every detail. Xtraordinary Blend truly delivers quality craftsmanship you can trust.",
    name: "Uche Uduma",
    title: "Client",
  },
  {
    quote:
      "In overseeing the operations of Xtraordinary Blend Ltd in Nigeria, I have witnessed firsthand the passion, precision, and professionalism behind the brand. Its ability to merge cultural identity with contemporary fashion speaks volumes, positioning it as a brand with both purpose and global potential",
    name: "Ugonna Michael Okereke",
    title: "Executive Director, Micsil Global Limited ",
  },
  {
    quote:
      "Working with Xtraordinary Blend, a brand I personally helped shape through training, has also contributed to my own growth. His deep understanding of garment construction and design principles reflects a shared standard of excellence. As a proud Igbo man, I admire how his craft authentically expresses the essence and heritage of our culture",
    name: "Obinna Samson Iwu",
    title: "Fashion Director, WANOSIX Ltd",
  },
   {
    quote:
      "The Xtraordinary Blend collection redefines couture with daring silhouettes  and textures that feel  timeless.  The showcase turns every frame into a runway, proving luxury can be immersive, bold, and unapologetically modern.",
    name: "Mary Thompson Okorie, PhD.",
    title: "Client",
  },
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#F5F2EC] py-20 px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-black font-serif text-3xl md:text-4xl mb-3">
            A Legacy in Every Stitch
          </h2>
          <p className="text-gray-500 text-xs tracking-[0.3em] uppercase">
            Voices of the Extraordinary
          </p>
        </div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-4 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="flex flex-col">
              {/* Quote mark */}
              <span className="text-[#ffad5b] text-5xl font-serif leading-none mb-4">"</span>
              <p className="text-gray-700 text-sm leading-relaxed mb-8 flex-1 italic">
                {t.quote}
              </p>
              <div className="border-t border-gray-300 pt-4">
                <p className="text-black text-xs font-bold tracking-widest uppercase">{t.name}</p>
                <p className="text-gray-400 text-xs tracking-widest uppercase mt-1">{t.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leave a review link */}
        <div className="text-center mt-8">
          <a
            href="https://g.page/r/CewuNetAGivwEAE/review"
            target="_blank"
            rel="noopener noreferrer"
            className="underline text-gray-700 hover:text-gray-900 transition-colors"
          >
            Leave a review
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
