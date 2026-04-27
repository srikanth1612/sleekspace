"use client";
import { motion, useScroll, useTransform } from "framer-motion";

const ParallaxSection = ({ children }) => {
  const { scrollY } = useScroll();

  const y = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <motion.div style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ParallaxSection;