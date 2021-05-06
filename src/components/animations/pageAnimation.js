const pageAnimation = {
  variants: {
    in: { opacity: 1, x: 0 },
    out: { opacity: 0, x: '-100vh' },
  },

  transition: {
    type: 'tween',
    ease: 'anticipate',
    duration: 1,
  },
};

export default pageAnimation;
