import ProfileImage from '../assets/my-pics.jpg';
import { scrollReveal } from '../utils/scrollreveal.config';
import { useEffect } from 'react';

export const About = () => {
  useEffect(() => {
    scrollReveal.reveal('#profile-image', { delay: 250 });
    scrollReveal.reveal('#about-title', { delay: 300 });
    scrollReveal.reveal('#about-description', { delay: 350 });
  });

  return (
    <section className='pt-20 pb-28 px-6 lg:px-0'>
      <div className='mx-auto max-w-8xl'>
        <h1 className='text-port-black text-3xl font-bold capitalize text-center mb-10'>
          about me
        </h1>

        <div className='bg-white rounded-lg border grid sm:grid-cols-1 md:grid-cols-2 p-9 gap-8'>
          <div className='space-y-4 h-full'>
            <h3
              className='text-2xl font-semibold text-gray-700 uppercase text-center'
              id='about-title'>
              about me
            </h3>
            <p className='text-gray-500 text-xl font-semibold text-justify' id='about-description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita quo quibusdam
              quas, assumenda cupiditate voluptatum porro sunt, quia ratione sint ea impedit dolores
              doloremque odio fugit aut, esse pariatur blanditiis? Earum quia accusamus dignissimos.
            </p>
          </div>
          <div className='rounded-xl relative  w-full overflow-hidden h-[44rem]'>
            <img src={ProfileImage} alt='' id='profile-image' className="absolute" />
          </div>
        </div>
      </div>
    </section>
  );
};
