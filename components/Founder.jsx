"use client";
import SlideUp from "./animations/SlideUp";

export default function Founder() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <div className="max-w-4xl mx-auto text-center">

        <SlideUp>
          <h2 className="text-3xl font-bold mb-4">
            Meet the Designer
          </h2>

          <h3 className="text-xl font-semibold mb-2">
            Pooja Kadiyala
          </h3>

          <p className="text-gray-600 mb-4">
            Design is more than a profession — it’s a passion and creative expression.
            With a strong instinct for transforming spaces, Pooja has been designing 
            interiors that are both beautiful and functional.
          </p>

          <p className="text-gray-600 mb-4">
            With 2+ years of experience and 100% client satisfaction, she has worked 
            across minimal, modern, and expressive styles — ensuring every space reflects 
            the personality of its owner.
          </p>

          <p className="text-gray-600">
            Her approach combines aesthetics with purpose, creating interiors that are 
            not only visually stunning but also practical and intuitive.
          </p>
        </SlideUp>

      </div>
    </section>
  );
}