import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import "./TextWindow.css";

const TextWindow = ({
  texts = [],
  interval = 3000,
  // Slide from left to right (sideways)
  initial = { x: "-100%", opacity: 10 },
  animate = { x: 0, opacity: 1 },
  exit = { x: "100%", opacity: 0 },
}) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (texts.length <= 1) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % texts.length),
      interval
    );
    return () => clearInterval(id);
  }, [texts.length, interval]);

  return (
    <div className="text-window">
      <AnimatePresence mode="wait">
        <motion.p
          key={index}
          initial={initial}
          animate={animate}
          exit={exit}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
        >
          {texts[index]}
        </motion.p>
      </AnimatePresence>
    </div>
  );
};

export default TextWindow;