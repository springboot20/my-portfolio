// MirrorCursor.tsx
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { classNames } from "../../utils";

export default function MirrorCursor() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    handleResize(); // Initial

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Mirror position = opposite of cursor across both axes
  const mirrorX = windowSize.width - cursorPos.x;
  const mirrorY = windowSize.height - cursorPos.y;

  return (
    <>
      {/* Actual cursor follower */}
      <div
        className="fixed z-50 w-4 h-4 bg-port-primary rounded-full pointer-events-none"
        style={{
          transform: `translate(${cursorPos.x - 8}px, ${cursorPos.y - 8}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Mirrored follower */}
      <div
        className="fixed z-50 w-4 h-4 bg-white rounded-full pointer-events-none opacity-50"
        style={{
          transform: `translate(${mirrorX - 8}px, ${mirrorY - 8}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />
    </>
  );
}

// components/CustomCursor.tsx

const CustomCursor = () => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 200 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 40); // center cursor
      mouseY.set(e.clientY - 40);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    const hoverables = document.querySelectorAll("a, button, .cursor-hover");

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

  console.log(isHovered);

  return (
    <motion.div
      className={classNames(
        `fixed z-[9999] pointer-events-none mix-blend-difference rounded-full w-20 h-20`,
        isHovered ? "bg-black scale-150" : "bg-white"
      )}
      style={{
        translateX: cursorX,
        translateY: cursorY,
      }}
      // animate={{
      //   scale: isHovered ? 1.5 : 1,
      // }}
      // transition={{
      //   scale: { duration: 0.2, ease: "easeOut" },
      // }}
    />
  );
};

export { CustomCursor };
