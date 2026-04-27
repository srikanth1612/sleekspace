"use client";
import SlideUp from "./animations/SlideUp";

const services = [
  {
    title: "Interior Design",
    desc: "Complete design solutions from concept to execution with a focus on modern aesthetics.",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    title: "Space Planning",
    desc: "Smart layouts that maximize space utilization while maintaining comfort and style.",
    img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c",
  },
  {
    title: "Renovation",
    desc: "Transforming existing spaces into premium environments with upgraded finishes and designs.",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 px-6 text-center">
      <h2 className="text-3xl font-bold mb-4">What We Do</h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10">
        We offer end-to-end interior design services that focus on quality, affordability, and long-lasting value.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <SlideUp key={index} delay={index * 0.2}>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden text-left">
              <img
                src={service.img}
                alt={service.title}
                className="h-48 w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            </div>
          </SlideUp>
        ))}
      </div>
    </section>
  );
}