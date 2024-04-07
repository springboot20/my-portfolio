import { classNames } from '../../utils';
import { motion } from 'framer-motion';
import ProfileImg from '../../assets/profile-img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { Fragment } from 'react';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const DetailPanel: React.FC<{
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}> = ({ setOpen, open }) => {
  const socialLinks: { to: string; icon: JSX.Element }[] = [
    {
      to: '#facebook',
      icon: <FontAwesomeIcon icon={faFacebook} className='h-6 text-port-black' />,
    },
    {
      to: '#instagram',
      icon: <FontAwesomeIcon icon={faInstagram} className='h-6 text-port-black' />,
    },
    {
      to: '#twitter',
      icon: <FontAwesomeIcon icon={faTwitter} className='h-6 text-port-black' />,
    },
    {
      to: '#linkedin',
      icon: <FontAwesomeIcon icon={faLinkedin} className='h-6 text-port-black' />,
    },
    {
      to: 'https://github.com/springboot20/',
      icon: <FontAwesomeIcon icon={faGithub} className='h-6 text-port-black' />,
    },
  ];

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0,
        x: 0,
      }}
      animate={{
        opacity: open ? 1 : 0,
        scale: 1,
        x: open ? 10 : '-100%',
        transition: {
          duration: 0.5,
        },
      }}
      className={classNames(
        'fixed top-5 bottom-5 z-20 bg-white h-auto w-1/2 lg:w-1/4 border border-port-gray rounded-xl py-8 px-12 overflow-y-scroll'
      )}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className='fixed right-4 top-4 inline-flex items-center justify-center rounded-md p-2 dark:text-white text-gray-900 hover:dark:bg-gray-700 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
        <FontAwesomeIcon icon={faClose} className='h-10 text-gray-800 ' />
      </button>
      <div className='space-y-5'>
        <div className='py-6 flex justify-center items-center flex-col space-y-3 border-b-2 border-port-gray/30'>
          <Fragment>
            <img src={ProfileImg} className='rounded-full h-64' alt='profile img' />
          </Fragment>

          <div className='text-center space-y-2'>
            <h3 className='text-3xl font-bold capitalize text-port-black'>yunus abbas opeyemi</h3>
            <p className='font-semibold text-2xl text-port-gray capitalize'>front-end developer</p>
          </div>

          <div className='inline-flex space-x-4 mt-4'>
            {socialLinks.map(({ to, icon }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  className='flex items-center justify-center h-12 w-12 rounded-full bg-port-yellow'>
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>

        <ul className='space-y-4 border-b-2 border-port-gray/30 py-3  '>
          <li className='flex justify-between items-center'>
            <span className='block py-1.5 px-5 bg-port-yellow capitalize text-xl font-semibold text-port-black'>
              age:
            </span>
            <span className='text-xl font-semibold text-port-gray'>20</span>
          </li>
          <li className='flex justify-between items-center'>
            <span className='block py-1.5 px-5 bg-port-yellow capitalize text-xl font-semibold text-port-black'>
              residence:
            </span>
            <span className='text-xl font-semibold text-port-gray'>20</span>
          </li>
          <li className='flex justify-between items-center'>
            <span className='block py-1.5 px-5 bg-port-yellow capitalize text-xl font-semibold text-port-black'>
              freelance:
            </span>
            <span className='text-xl font-semibold text-port-green capitalize'>available</span>
          </li>
          <li className='flex justify-between items-center'>
            <span className='block py-1.5 px-5 bg-port-yellow capitalize text-xl font-semibold text-port-black'>
              address:
            </span>
            <span className='text-xl font-semibold text-port-gray'>20</span>
          </li>
        </ul>

        <div className='space-y-3 py-3 border-b-2 border-port-gray/30'>
          <h1 className='text-2xl font-semibold text-port-black capitalize'>languages</h1>
          <ul className='space-y-4'>
            <li className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='capitalize text-xl font-semibold text-port-gray'>english:</span>
                <span className='text-xl font-semibold text-port-gray'>75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='capitalize text-xl font-semibold text-port-gray'>yoruba:</span>
                <span className='text-xl font-semibold text-port-gray'>90%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
          </ul>
        </div>

        <div className='space-y-3 py-3 border-b-2 border-port-gray/30'>
          <h1 className='text-2xl font-semibold text-port-black capitalize'>skills</h1>
          <ul className='space-y-4'>
            <li className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='capitalize text-xl font-semibold text-port-gray'>html:</span>
                <span className='text-xl font-semibold text-port-gray'>90%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='uppercase text-xl font-semibold text-port-gray'>css:</span>
                <span className='text-xl font-semibold text-port-gray'>75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className='space-y-2'>
              <div className='flex justify-between items-center'>
                <span className='capitalize text-xl font-semibold text-port-gray'>js:</span>
                <span className='text-xl font-semibold text-port-gray'>75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
          </ul>
        </div>
        <div className='space-y-3 py-3 border-b-2 border-port-gray/30'>
          <h1 className='text-2xl font-semibold text-port-black capitalize'>extra skills</h1>
          <ul className='space-y-3 flex flex-col items-start'>
            <li className='space-x-2 inline-flex items-center'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
              </svg>
              <small className='text-lg capitalize text-port-gray font-semibold'>
                tailwind, bootstrap
              </small>
            </li>
            <li className='space-x-2 inline-flex items-center'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
              </svg>
              <small className='text-lg capitalize text-port-gray font-semibold'>sass</small>
            </li>
            <li className='space-x-2 inline-flex items-center'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
              </svg>
              <small className='text-lg capitalize text-port-gray font-semibold'>
                react, nodejs
              </small>
            </li>
            <li className='space-x-2 inline-flex items-center'>
              <svg
                width='15'
                height='15'
                viewBox='0 0 15 15'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
                <rect x='0.5' y='0.5' width='9' height='9' stroke='#FFB400' />
                <rect x='5.5' y='5.5' width='9' height='9' stroke='#FFB400' />
              </svg>
              <small className='text-lg capitalize text-port-gray font-semibold'>webpack</small>
            </li>
          </ul>
        </div>
        <Link to='#' download='' className='mt-4 block'>
          <button className='w-full text-2xl text-port-black font-semibold uppercase py-2.5 px-8 bg-port-yellow flex items-center space-x-3 justify-center'>
            <small>download cv</small>
            <FontAwesomeIcon icon={faDownload} className='h-6 text-port-black' />
          </button>
        </Link>
      </div>
    </motion.div>
  );
};
