import { Route, Routes } from 'react-router-dom';
import PortfolioLayout from './layout/Portfolio';
import { memo, useCallback, useEffect, useState } from 'react';

import Home from './pages/home/home';
import Projects from './pages/projects/projects';
import AboutMe from './pages/about/about-me';
import ContactMe from './pages/contact/contact-me';

import { motion, AnimatePresence } from 'framer-motion';

export const AnimatedDigit = memo(({ digit }: { digit: number | string }) => {
  return (
    <span className='relative inline-block w-[1ch] text-center h-[1em]'>
      <AnimatePresence mode='popLayout'>
        <motion.span
          key={digit}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 20, opacity: 0 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          style={{ backfaceVisibility: 'hidden' }}
          className='absolute left-0 top-0 w-full'>
          {digit}
        </motion.span>
      </AnimatePresence>
    </span>
  );
});

function App() {
  // const { user, token } = useAuth();
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const onLoadingComplete = useCallback(() => setIsLoading(false), []);

  useEffect(() => {
    if (!isLoading) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        // Increment by a random small amount to make it feel like a real count-up
        const increment = Math.floor(Math.random() * 3) + 1; // 1 to 3%
        return Math.min(prev + increment, 100);
      });
    }, 350); // 100ms interval gives enough time for the 250ms animation to begin

    return () => clearInterval(timer);
  }, [isLoading]);

  useEffect(() => {
    if (progress >= 100) {
      const completeTimer = setTimeout(() => {
        if (onLoadingComplete) {
          onLoadingComplete();
        }
      }, 350);
      return () => clearTimeout(completeTimer);
    }
  }, [progress, onLoadingComplete]);

  const padTimerString = (value: number) => {
    const str = value.toString().padStart(3, '0');
    return [str[0], str[1], str[2]];
  };
  const [h1, h2, h3] = padTimerString(progress);

  return isLoading ? (
    <div className='bg-port-light-bg dark:bg-port-bg z-20 fixed inset-0 overflow-hidden'>
      <div className='h-full w-full flex items-center justify-center flex-col'>
        <div className='loader'></div>
        {/* Progress percentage */}
        <p className='text-port-light-text dark:text-white flex items-center font-fira-code font-medium text-xl mt-3'>
          <span className='space-x-1 overflow-hidden'>
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
      <Route path='/' element={<PortfolioLayout />}>
        <Route index element={<Home />} />
        <Route path='projects' element={<Projects />} />
        <Route path='about-me' element={<AboutMe />} />
        <Route path='contact-me' element={<ContactMe />} />
      </Route>
    </Routes>
  );
}

export default App;
