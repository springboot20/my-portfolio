import { motion } from "framer-motion";
import { textParentVariant } from "./animation";
import { classNames } from "../../utils";

type SplittedAnimatedTextProps = {
  content: (string | JSX.Element)[];
  type?: "word" | "letter";
};

const wordVariants = {
  hidden: { opacity: 0, y: 20, rotateY: -15 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      delay: i * 0.15,
    },
  }),
};

export const SplittedAnimatedText = ({ content, type }: SplittedAnimatedTextProps) => {
  const fragments: JSX.Element[] = [];

  let index = 0;

  content.forEach((item) => {
    if (typeof item === "string") {
      const parts = type === "word" ? item.split(" ") : item.split("");
      parts.forEach((part, idx) =>
        fragments.push(
          <motion.span
            key={`${part}-${index + idx}`}
            variants={textParentVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="inline-block whitespace-pre-wrap"
          >
            <motion.span
              key={`${part}-${index + idx}`}
              custom={index + idx}
              variants={wordVariants}
              className={classNames(type === "word" ? "inline-block mr-2" : "inline-block")}
            >
              {part === " " && type === "letter" ? "\u00A0" : part}
            </motion.span>
          </motion.span>
        )
      );

      index += parts.length;
    } else {
      fragments.push(
        <span key={`jsx-${index}`} className="text-port-primary">
          {item}
        </span>
      );

      index++;
    }
  });

  return fragments;
};
