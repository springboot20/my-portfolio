import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;

    let mouseX = 0;
    let mouseY = 0;
    let posX = 0;
    let posY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", moveCursor);

    gsap.ticker.add(() => {
      posX += (mouseX - posX) * 0.15;
      posY += (mouseY - posY) * 0.15;

      gsap.set(cursor, {
        x: mouseX,
        y: mouseY,
      });

      gsap.set(follower, {
        x: posX - 12,
        y: posY - 12,
      });
    });

    const addHoverEvents = () => {
      const elements = document.querySelectorAll(
        "a, button, .cursor-hover"
      );

      elements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          gsap.to(follower, {
            scale: 2,
            backgroundColor: "#C778DD", // Tailwind blue-500
            duration: 0.3,
            ease: "power2.out",
          });
        });

        el.addEventListener("mouseleave", () => {
          gsap.to(follower, {
            scale: 1,
            backgroundColor: "#ffffff",
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    };

    addHoverEvents();

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] h-4 w-4 rounded-full bg-white mix-blend-difference"
      ></div>
      <div
        ref={followerRef}
        className="pointer-events-none fixed z-[9998] h-20 w-20 rounded-full bg-white mix-blend-difference"
      ></div>
    </>
  );
};

export default CustomCursor;
