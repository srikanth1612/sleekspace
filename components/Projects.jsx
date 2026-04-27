"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import SlideUp from "./animations/SlideUp";

import "swiper/css";
import "swiper/css/pagination";

const projects = [
  { title: "3BHK Flat Design", client: "Mr. Shekar", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
  { title: "Residential Villa", client: "Mr. Sai Kumar", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" },
  { title: "2BHK Flat Design", client: "Mr. Peddi Venu Gopal", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
  { title: "2BHK Flat Design", client: "Mr. Ganga Reddy", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
  { title: "Residential Villa", client: "Mr. Nagender", img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6" },
  { title: "Residential Villa", client: "Mr. Sagar", img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0" },
  { title: "2BHK Design", client: "Mr. Suresh", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed" },
  { title: "2BHK Design", client: "Mrs. Sandya Rani", img: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c" },
];

export default function Projects() {

  // 👇 split into chunks of 4
  const chunkedProjects = [];
  for (let i = 0; i < projects.length; i += 4) {
    chunkedProjects.push(projects.slice(i, i + 4));
  }

  return (
    <section id="projects" className="py-20 px-6">
      
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Projects
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}

        onMouseEnter={(swiper) => swiper.autoplay.stop()}
        onMouseLeave={(swiper) => swiper.autoplay.start()}
        
        spaceBetween={20}
      >
        {chunkedProjects.map((group, index) => (
          <SwiperSlide key={index}>
            
            {/* 2x2 GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {group.map((item, i) => (
                <SlideUp key={i} delay={i * 0.1}>
                  
                  <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                    
                    {/* IMAGE */}
                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />

                    {/* OVERLAY */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* TEXT */}
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-sm font-semibold">
                        {item.title}
                      </h3>
                      <p className="text-xs opacity-80">
                        {item.client}
                      </p>
                    </div>

                  </div>

                </SlideUp>
              ))}

            </div>

          </SwiperSlide>
        ))}
      </Swiper>

      {/* PAGINATION BELOW */}
      <div className="custom-pagination mt-8 flex justify-center"></div>

    </section>
  );
}