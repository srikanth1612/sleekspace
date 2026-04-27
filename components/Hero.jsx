"use client";
import FadeIn from "./animations/FadeIn";
import ParallaxSection from "./animations/ParallaxSection";

export default function Hero() {
  return (
    <ParallaxSection>
      <section
        id="home"
        className="h-screen flex items-center justify-center text-white bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c')",
        }}
      >
        {/* OVERLAY */}
        <div className="bg-black/60 w-full h-full flex items-center justify-center">
          
          <div className="text-center px-4 sm:px-6 max-w-3xl">

            {/* TITLE */}
            <FadeIn>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Designing Spaces That Inspire Living
              </h1>
            </FadeIn>

            {/* SUBTEXT */}
            <FadeIn delay={0.2}>
              <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-4">
                Luxury interiors crafted with precision, delivering elegance, comfort, and lasting quality
              </p>
            </FadeIn>

            {/* OPTIONAL VALUE LINE */}
            {/* <FadeIn delay={0.3}>
              <p className="text-xs sm:text-sm text-gray-300">
                Premium design • Affordable pricing • 100% satisfaction
              </p>
            </FadeIn> */}

          </div>

        </div>
      </section>
    </ParallaxSection>
  );
}