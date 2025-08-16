import { m, domAnimation, LazyMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface SlideProps {
  children: React.ReactNode;
  direction?: "left" | "top" | "right" | "bottom";
  duration?: number;
  trigger?: boolean;
}

export const SlideIn: React.FC<SlideProps> = ({
  direction = "left",
  duration = 0.5,
  children,
  trigger = true,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: trigger,
    threshold: 0.1,
  });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? 100 : direction === "left" ? -100 : 0,
      y: direction === "bottom" ? 100 : direction === "top" ? -100 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
    },
  };

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        ref={ref}
        variants={variants}
        initial="hidden"
        transition={{ duration }}
        animate={inView ? "visible" : "hidden"}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
};
