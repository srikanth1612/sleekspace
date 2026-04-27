"use client";
import FadeIn from "./animations/FadeIn";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-24 px-4 sm:px-6 bg-white">
      
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <FadeIn>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Let’s Design Your Dream Space
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
              Have a project in mind? Connect with us and let’s create something beautiful together.
            </p>
          </div>
        </FadeIn>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-10">

          {/* LEFT */}
          <FadeIn>
            <div className="bg-gray-100 p-6 sm:p-8 rounded-2xl shadow-md">
              
              <h3 className="text-lg sm:text-xl font-semibold mb-6">
                Contact Information
              </h3>

              <div className="space-y-5 text-gray-600 text-sm sm:text-base">

                <div>
                  <p className="text-gray-500">Contact Person</p>
                  <p className="font-medium text-black">Pooja Kadiyala</p>
                </div>

                <div>
                  <p className="text-gray-500">Email</p>
                  <a href="mailto:sleekspaceinteriors@gmail.com">
                    sleekspaceinteriors@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-gray-500">Phone</p>
                  <a href="tel:+918790409383">
                    +91 87904 09383
                  </a>
                </div>

              </div>
            </div>
          </FadeIn>

          {/* RIGHT */}
          <FadeIn delay={0.2}>
            <div className="bg-black text-white p-6 sm:p-8 rounded-2xl shadow-md flex flex-col justify-center">

              <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                Start Your Project Today
              </h3>

              <p className="text-gray-300 mb-6 sm:mb-8 text-sm sm:text-base">
                Quick response guaranteed. Chat with us directly on WhatsApp.
              </p>

              <div className="flex flex-col gap-4 mt-4">
  
                {/* WHATSAPP */}
                <a
                  href="https://wa.me/918790409383"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-6 py-3 rounded-lg text-center hover:bg-gray-200 transition w-full"
                >
                  💬 Chat on WhatsApp
                </a>

                {/* EMAIL */}
                <a
                  href="mailto:sleekspaceinteriors@gmail.com"
                  className="border border-white px-6 py-3 rounded-lg text-center hover:bg-white hover:text-black transition w-full"
                >
                  ✉️ Send Email
                </a>

              </div>

            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}