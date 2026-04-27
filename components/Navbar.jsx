"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // install if not: npm install lucide-react

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 px-6 sm:px-8 py-4 flex justify-between items-center transition-all duration-300
        ${scrolled ? "bg-white/80 backdrop-blur-lg shadow-md" : "bg-transparent"}
      `}
      >
        {/* LOGO */}
        <img
          src={scrolled ? "/logo.jpeg" : "/logo-white.jpeg"}
          alt="Sleekspace"
          className="h-8 sm:h-10"
        />

        {/* DESKTOP MENU */}
        <ul
          className={`hidden md:flex gap-6 font-medium transition-colors duration-300
          ${scrolled ? "text-black" : "text-white"}
        `}
        >
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className={`md:hidden ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setOpen(true)}
        >
          <Menu size={28} />
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black/70 z-50">
          
          {/* SIDE PANEL */}
          <div className="fixed right-0 top-0 h-full w-64 bg-white p-6 shadow-lg">
            
            {/* CLOSE BUTTON */}
            <div className="flex justify-end mb-6">
              <button onClick={() => setOpen(false)}>
                <X size={28} />
              </button>
            </div>

            {/* MENU ITEMS */}
            <ul className="flex flex-col gap-6 text-lg font-medium text-black">
              <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
              <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
              <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
              <li><a href="#services" onClick={() => setOpen(false)}>Services</a></li>
              <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>

          </div>
        </div>
      )}
    </>
  );
}