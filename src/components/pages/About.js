import React from 'react';
import { motion } from 'framer-motion';
import pageAnimation from '../animations/pageAnimation';

const About = () => {
  const { variants, transition } = pageAnimation;
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <p className="me">
        <a href="https://www.linkedin.com/in/mateusmsant">@mateusmsant</a>
      </p>
      <h1>Sobre</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    </motion.div>
  );
};

export default About;
