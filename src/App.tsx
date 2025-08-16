import { Route, Routes } from "react-router-dom";
import PortfolioLayout from "./layout/Portfolio";
import { useCallback, useEffect, useState } from "react";

import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import AboutMe from "./pages/about/about-me";
import ContactMe from "./pages/contact/contact-me";

function App() {
  // const { user, token } = useAuth();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onLoadingComplete = useCallback(() => setIsLoading(false), []);

  // More controlled progress simulation that guarantees completion
  useEffect(() => {
    let timer: any;

    if (progress < 100) {
      // Increment by 1% every 50ms (takes ~5 seconds to complete)
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

  return isLoading ? (
    <div className="bg-port-bg z-20 fixed inset-0">
      <div className="h-full w-full flex items-center justify-center flex-col">
        <div className="loader"></div>
        {/* Progress percentage */}
        <p className="text-port-gray font-fira-code font-medium text-xl mt-3">
          {Math.floor(progress)}%
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
