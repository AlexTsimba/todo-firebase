const motionConfig = {
  popup: {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { ease: 'easeInOut', duration: 0.3 },
  },
};

export default motionConfig;
