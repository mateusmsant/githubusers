import React from 'react';
import { motion } from 'framer-motion';
import {
  loadingContainer,
  loadingContainerVariants,
  loadingCircle,
  loadingCircleVariants,
  loadingCircleTransition,
} from '../animations/loadingAnimation';

const Spinner = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></motion.span>
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></motion.span>
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      ></motion.span>
    </motion.div>
  );
};

export default Spinner;
