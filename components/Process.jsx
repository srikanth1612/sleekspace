"use client";
import FadeIn from "./animations/FadeIn";

export default function Process() {
  return (
    <section
      className="relative py-32 px-6 text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        {/* TITLE */}
        <FadeIn>
          <h2 className="text-4xl font-bold mb-6">
            How We Deliver the Best Quality
          </h2>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="text-gray-200 max-w-3xl mx-auto mb-16">
            Our process ensures precision, quality, and cost efficiency in every project.
          </p>
        </FadeIn>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">

          <FadeIn delay={0.3}>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
                            transition duration-500 hover:-translate-y-3 hover:scale-105">
              <h3 className="text-lg font-semibold mb-3">Smart Planning</h3>
              <p className="text-gray-200 text-sm">
                Optimized layouts for space, usability, and cost efficiency.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.5}>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
                            transition duration-500 hover:-translate-y-3 hover:scale-105">
              <h3 className="text-lg font-semibold mb-3">Material Selection</h3>
              <p className="text-gray-200 text-sm">
                High-quality materials ensure durability and premium finish.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.7}>
            <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-xl 
                            transition duration-500 hover:-translate-y-3 hover:scale-105">
              <h3 className="text-lg font-semibold mb-3">Execution & Safety</h3>
              <p className="text-gray-200 text-sm">
                Strict quality checks and safety practices ensure flawless delivery.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}