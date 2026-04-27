"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    name: "Mr. Shekar",
    text: "Sleekspace transformed our 3BHK beautifully with a perfect balance of design and functionality.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
  {
    name: "Mrs. Sandya Rani",
    text: "Loved the design and execution. The quality exceeded our expectations.",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135789.png",
  },
  {
    name: "Mr. Sai Kumar",
    text: "Professional team with great attention to detail. Highly recommended!",
    img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
  },
];

export default function TestimonialCarousel() {
  return (
    <div className="max-w-3xl mx-auto">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".testimonial-pagination",
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="bg-white p-8 rounded-xl shadow-xl text-center">
              <img
                src={t.img}
                alt={t.name}
                className="w-16 h-16 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-600 mb-4">"{t.text}"</p>
              <h4 className="font-semibold">{t.name}</h4>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="testimonial-pagination mt-6 flex justify-center"></div>
    </div>
  );
}