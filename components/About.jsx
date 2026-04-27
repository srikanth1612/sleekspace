"use client";
import SlideUp from "./animations/SlideUp";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        
        <SlideUp>
          <img
            src="https://images.unsplash.com/photo-1600607687644-c7171b42498f"
            alt="about"
            className="rounded-xl shadow-xl"
          />
        </SlideUp>

        <SlideUp delay={0.2}>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Sleekspace</h2>

            <p className="text-gray-600 mb-4">
              Sleekspace is a dynamic and innovative interior design brand driven by youthful energy and fresh ideas. 
              We specialize in creating unique, functional spaces that reflect the individuality and needs of our clients.
              </p>

              <p className="text-gray-600 mb-4">
              Our designs range from modern minimalism to bold and diverse styles. What truly sets us apart is our 
              ability to adapt and bring life into any environment, creating spaces that inspire and elevate everyday living.
              </p>

              <p className="text-gray-600 mb-4">
              Every project is a perfect blend of creativity, precision, and purpose — designed to deliver both beauty and functionality.
              </p>

            <p className="text-gray-600 mb-4">
              At Sleekspace, we specialize in creating modern, elegant, and highly functional interior spaces tailored to your lifestyle. 
              From residential homes to commercial environments, we design spaces that reflect personality, comfort, and sophistication.
            </p>

            <p className="text-gray-600">
              Our approach combines creativity with practicality — ensuring every design is not only visually stunning but also efficient, durable, and timeless.
            </p>

            {/* 🔥 BUTTON */}
            <a
              href="https://bit.ly/sleekspace"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition"
            >
              View Brochure 📄
            </a>
          </div>
        </SlideUp>

      </div>
    </section>
  );
}