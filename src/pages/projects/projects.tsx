import { ProjectCardComponent } from '../../components/card/cards';
import { projects } from '../../data/projects';
import React from 'react';
import { motion } from 'framer-motion';
import { useSearchEngineOptimization } from '../../hooks/useSEO';

export default function ProjectPageComponent() {
  const baseUrl = import.meta.env.PROD
    ? 'https://codesuite-portfolio.vercel.app'
    : 'http://localhost:3001';

  useSearchEngineOptimization({
    title: 'Portfolio | Selected Works by Abbas',
    description:
      'Explore a collection of scalable applications and responsive web designs built by Abbas, focusing on performance and user experience.',
    canonical: `${baseUrl}/projects`,
    keywords: [
      'Web Development Projects',
      'React Applications',
      'Portfolio Works',
      'UI Design Examples',
    ],
  });

  const titleVariants = {
    initial: {
      opacity: 0,
      y: 15,
    },
    animate: {
      opacity: 1,
      y: 0,
    },
  };

  const lineVariants = {
    initial: {
      opacity: 0,
      width: 0,
    },
    animate: {
      opacity: 1,
      width: '25%',
    },
  };

  return (
    <article className='w-full py-28'>
      <div className='w-full'>
        <motion.header className='space-y-3'>
          <motion.h1
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: 'spring',
                delay: 0.3,
              },
            }}
            className='font-fira-code font-semibold text-3xl text-port-light-text dark:text-white'>
            <motion.span className='text-port-light-primary dark:text-port-primary'>/</motion.span>
            projects
          </motion.h1>
          <motion.p
            variants={{
              initial: {
                opacity: 0,
                y: 20,
              },
              animate: {
                opacity: 1,
                y: 0,
                transition: {
                  type: 'spring',
                  delay: 0.5,
                },
              },
            }}
            initial='initial'
            animate='animate'
            className='text-port-light-text dark:text-white font-fira-code font-normal text-lg'>
            List of my projects
          </motion.p>
        </motion.header>

        <section className='py-10'>
          <div className='w-full space-y-10'>
            <div className='flex flex-col gap-2 sm:space-y-0 sm:flex-row sm:items-center sm:gap-x-2 shrink-0 flex-1'>
              <motion.h2
                variants={{
                  ...titleVariants,
                  animate: {
                    ...titleVariants.animate,
                    transition: {
                      delay: 0.6,
                    },
                  },
                }}
                initial='initial'
                whileInView='animate'
                viewport={{ amount: 0.7, once: false }}
                className='text-port-light-text dark:text-white font-medium font-fira-code text-2xl'>
                <span className='text-port-light-primary dark:text-port-primary'>#</span>completed
                projects
              </motion.h2>
              <motion.div
                variants={{
                  ...lineVariants,
                  animate: {
                    ...lineVariants.animate,
                    transition: {
                      delay: 0.4,
                    },
                  },
                }}
                initial='initial'
                whileInView='animate'
                viewport={{ amount: 'all', once: false }}
                className='h-0.5 w-full sm:w-1/2 bg-port-light-primary dark:bg-port-primary block'
              />
            </div>

            <div className='flex flex-col gap-6'>
              {React.Children.toArray(
                projects.map((project, index) => {
                  return (
                    <ProjectCardComponent
                      key={`${project['project-title']}-${index}`}
                      index={index + 1}
                      project={project}
                    />
                  );
                }),
              )}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
