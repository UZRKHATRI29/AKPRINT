import React from 'react';
import { motion } from 'framer-motion';

const About = () => (
  <motion.div
    className="about-section"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <h2>About Us</h2>
    <p>
      At AK Print Solution, we provide top-quality LED boards and digital signage solutions for all types of businesses. Our products are designed to make your brand stand out, whether you need outdoor signage, indoor displays, or custom solutions.
    </p>
    <motion.a 
      href="/about"
      className="cta-button"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      Learn More
    </motion.a>
  </motion.div>
);

export default About;
