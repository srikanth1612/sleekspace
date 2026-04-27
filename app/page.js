import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import TestimonialCarousel from "../components/testimonials/TestimonialCarousel";
import WhyChooseUs from "../components/WhyChooseUs";
import Founder from "../components/Founder";
import Process from "../components/Process";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <About />
      <Founder />
      <Services />
      <Process />
      <div className="h-16 bg-white"></div>
      <WhyChooseUs />

      {/* TESTIMONIALS */}
      <section id="testimonials" className="py-20 bg-gray-100 text-center">
        <h2 className="text-3xl font-bold mb-10">
          What Our Clients Say
        </h2>
        <TestimonialCarousel />
      </section>

      <Contact />
      <Footer />
    </>
  );
}