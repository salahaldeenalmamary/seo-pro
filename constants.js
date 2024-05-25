const globalVariants = {
  containerVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.3,
      },
    },
  },

  scrollUpVariants: {
    hidden: {
      y: 500,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 2.5,
        type: "spring",
        stiffness: 20,
      },
    },
  },
  fadeZoomInVariants: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1,
        type: "tween",
      },
    },
  },
  fadeZoomInVariants1: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 2,
        type: "tween",
      },
    },
  },
  bounceVariants: {
    hidden: {
      y: -100,
      opacity: 0,
    },
    visible: {
      y: [0, -20, 0, -10, 0],
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 200,
      },
    },
  },
};

const heroVariants = {
  containerVariants: {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
  },
  childrenVariants: {
    hidden: {
      scale: 0.5,
      opacity: 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  },
  leftButtonVariants: {
    hidden: {
      x: -300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "tween",
      },
    },
  },
  rightButtonVariants: {
    hidden: {
      x: 300,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1.5,
        type: "tween",
      },
    },
  },
  colorChangeVariants: {
    hidden: {
      backgroundColor: "#fff",
    },
    visible: {
      backgroundColor: ["#ff4b2b", "#ff416c"],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  },
};

export { globalVariants, heroVariants };
