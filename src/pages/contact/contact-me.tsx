import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSearchEngineOptimization } from '../../hooks/useSEO';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function ContactPageComponent() {
  const baseUrl = import.meta.env.PROD
    ? 'https://codesuite-portfolio.vercel.app'
    : 'http://localhost:3001';

  useSearchEngineOptimization({
    title: 'Contact | Hire Abbas for your next project',
    description:
      'Available for freelance opportunities and full-time roles. Get in touch with Abbas to discuss building your next scalable digital product.',
    canonical: `${baseUrl}/contact-me`,
    keywords: [
      'Contact Abbas',
      'Hire Web Developer',
      'Freelance Frontend Developer',
      'Software Developer Nigeria',
    ],
  });

  return (
    <article className='w-full py-28'>
      <div className='w-full'>
        <header className='space-y-3'>
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
            <span className='text-port-light-primary dark:text-port-primary'>/</span>contacts
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
            who am i?
          </motion.p>
        </header>

        <div className='grid grid-cols-1 lg:grid-cols-4 gap-y-8 lg:gap-y-0 mt-12'>
          <div className='col-span-3'>
            <div className='max-w-md'>
              <p className='text-lg font-fira-code font-normal text-port-light-muted dark:text-port-gray'>
                I'm interested in freelance opportunities. However if you have other request or
                questions, don't hesitate to reach out or contact me.
              </p>
            </div>
          </div>

          <div className='col-span-1 border border-port-light-border dark:border-port-light-border/30 h-max p-3'>
            <h3 className='mb-4 text-lg text-port-light-text dark:text-port-light-border/60 font-medium font-fira-code'>
              Message me here
            </h3>
            <div className='space-y-2'>
              <div className='flex items-center space-x-2'>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className='h-5 text-port-light-text dark:text-port-light-border/60'
                />

                <Link
                  to='mailto:opeyemiakanbi328@gmail.com'
                  className='text-sm font-fira-code font-normal text-port-light-muted dark:text-port-gray'>
                  opeyemiakanbi328@gmail.com
                </Link>
              </div>
              <div className='flex items-center space-x-2'>
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className='h-5 text-port-light-text dark:text-port-light-border/60'
                />

                <Link
                  to='https://linkedin.com/in/abbas-yunus-70b65533a'
                  target='_blank'
                  className='text-sm font-fira-code font-normal text-port-light-muted dark:text-port-gray'>
                  Yunus Abbas Opeyemi
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
