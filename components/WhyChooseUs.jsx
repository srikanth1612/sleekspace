"use client";
import FadeIn from "./animations/FadeIn";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative py-32 px-6 text-white bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-6xl mx-auto text-center">
        
        <FadeIn>
          <h2 className="text-4xl font-bold mb-6">
            Why Choose Sleekspace
          </h2>

          <p className="text-gray-200 max-w-3xl mx-auto mb-12">
            We deliver premium interiors with the perfect balance of quality and affordability.
          </p>
        </FadeIn>

        {/* 🔥 CARDS */}
        <div className="grid md:grid-cols-3 gap-8">

          <FadeIn>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-3">
                Premium Quality
              </h3>
              <p className="text-gray-200 text-sm">
                High-grade materials and expert craftsmanship ensure durability.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-3">
                Best Price
              </h3>
              <p className="text-gray-200 text-sm">
                Efficient planning allows us to deliver premium results at great prices.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:scale-105 transition">
              <h3 className="text-lg font-semibold mb-3">
                Attention to Detail
              </h3>
              <p className="text-gray-200 text-sm">
                Every element is carefully crafted for perfection and client satisfaction.
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}