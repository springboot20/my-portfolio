import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { classNames } from "../../utils";

export const AnimatedDigit = ({ digit }: { digit: number }) => {
  return (
    <span className="relative inline-block w-[0.75ch] text-center h-[1em] orverflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={digit}
          initial={{ rotateX: -90, opacity: 0 }}
          animate={{ rotateX: 0, opacity: 1 }}
          exit={{ rotateX: 90, opacity: 0 }}
          style={{ backfaceVisibility: "hidden" }}
          transition={{
            duration: 0.4,
            ease: "easeInOut",
          }}
          className="absolute left-0 top-0 w-full origin-bottom backface-hidden"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export const TimeComponent = () => {
  const [showColon, setShowColon] = useState<boolean>(true);
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now);
      setShowColon((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hoursRaw = time.getHours();
  const hours = hoursRaw % 12 || 12;
  const isAM = hoursRaw < 12;

  const padTimerString = (value: number) => value.toString().padStart(2, "0").split("").map(Number);

  const [h1, h2] = padTimerString(hours);
  const [m1, m2] = padTimerString(minutes);
  const [s1, s2] = padTimerString(seconds);

  return (
    <div className="flex items-center text-2xl font-fira-code font-medium text-port-gray cursor-hover">
      {/* Hours */}
      <div className="space-x-0.5">
        <AnimatedDigit digit={h1} />
        <AnimatedDigit digit={h2} />
      </div>
      <span
        className={classNames(
          "transition-opacity duration-200",
          showColon ? "opacity-100" : "opacity-0"
        )}
      >
        :
      </span>

      {/* Minutes */}
      <div className="space-x-0.5">
        <AnimatedDigit digit={m1} />
        <AnimatedDigit digit={m2} />
      </div>
      <span
        className={classNames(
          "transition-opacity duration-300",
          showColon ? "opacity-100" : "opacity-0"
        )}
      >
        :
      </span>

      {/* Seconds */}
      <div className="space-x-0.5">
        <AnimatedDigit digit={s1} />
        <AnimatedDigit digit={s2} />
      </div>

      <motion.span
        key={isAM ? "AM" : "PM"}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 10 }}
        transition={{ duration: 0.3 }}
        className="ml-2 text-sm"
      >
        {isAM ? "AM" : "PM"}
      </motion.span>
    </div>
  );
};
