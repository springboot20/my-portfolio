import { Route, Routes } from "react-router-dom";
import PortfolioLayout from "./layout/Portfolio";
import { useCallback, useEffect, useState } from "react";

import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import AboutMe from "./pages/about/about-me";
import ContactMe from "./pages/contact/contact-me";

import { motion, AnimatePresence } from "framer-motion";

export const AnimatedDigit = ({ digit }: { digit: number }) => {
  return (
    <span className="relative inline-block w-[0.75ch] text-center h-[1em] orverflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={digit}
          initial={{ y: -5, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 5, opacity: 0 }}
          style={{ backfaceVisibility: "hidden" }}
          className="absolute left-0 top-0 w-full"
        >
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

function App() {
  // const { user, token } = useAuth();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onLoadingComplete = useCallback(() => setIsLoading(false), []);

  // More controlled progress simulation that guarantees completion
  useEffect(() => {
    let timer: any;

    if (progress < 100) {
      // Increment by 1% every 100ms (takes ~5 seconds to complete)
      timer = setTimeout(() => {
        setProgress((prev) => prev + 1);
      }, 50);
    } else {
      // When we reach 100%, trigger the callback after a small delay
      const completeTimer = setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 500); // Show 100% for half a second before transitioning

      return () => clearTimeout(completeTimer);
    }

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  const padTimerString = (value: number) => value.toString().padStart(3, "0").split("").map(Number);
  const [h1, h2, h3] = padTimerString(Math.floor(progress % 101));

  return isLoading ? (
    <div className="bg-port-light-bg dark:bg-port-bg z-20 fixed inset-0 overflow-hidden">
      <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="loader"></div>
        {/* Progress percentage */}
        <p className="text-port-light-text dark:text-white flex items-center font-fira-code font-medium text-xl mt-3">
          <span className="space-x-1">
            <AnimatedDigit digit={h1} />
            <AnimatedDigit digit={h2} />
            <AnimatedDigit digit={h3} />
            <span>%</span>
          </span>
        </p>
      </div>
    </div>
  ) : (
    <Routes>
      <Route path="/" element={<PortfolioLayout />}>
        <Route index element={<Home />} />
        <Route path="projects" element={<Projects />} />
        <Route path="about-me" element={<AboutMe />} />
        <Route path="contact-me" element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
