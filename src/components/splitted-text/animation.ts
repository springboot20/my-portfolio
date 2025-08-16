export const textParentVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

export const wordVariant = {
  hidden: {
    opacity: 0,
    y: 20,
    rotateY: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};
