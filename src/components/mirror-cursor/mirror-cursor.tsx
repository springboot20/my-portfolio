// MirrorCursor.tsx
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { classNames } from "../../utils";

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY }); // center cursor
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const cursorVariant = {
    default: {
      x: cursorPosition.x - 40,
      y: cursorPosition.y - 40,
    },
    text: {
      height: 150,
      width: 150,
      x: cursorPosition.x - 75,
      y: cursorPosition.y - 75,
    },
  };

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverables = document.querySelectorAll("a, button, .cursor-hover, img, svg");

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <motion.div
      className={classNames(
        `fixed z-[9999] top-0 left-0 pointer-events-none rounded-full w-20 h-20 bg-port-gray`
      )}
      variants={{
        ...cursorVariant,
        text: {
          ...cursorVariant.text,
          backgroundColor: "#ffffff",
          mixBlendMode: "difference",
        },
      }}
      animate={isHovered ? "text" : "default"}
    />
  );
};

export { CustomCursor };
