import React from 'react';
import { motion } from 'framer-motion';
import pageAnimation from '../animations/pageAnimation';

const NotFound = () => {
  const { variants, transition } = pageAnimation;

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={transition}
    >
      <h1>A página não existe</h1>
    </motion.div>
  );
};

export default NotFound;
