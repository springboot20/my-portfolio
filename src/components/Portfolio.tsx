import { useState } from 'react';

export const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  return (
    <section className='pt-20 pb-28 px-6 lg:px-0'>
      <div className='mx-auto max-w-8xl'>
        <header className='text-center space-y-4'>
          <h1 className='text-port-black text-3xl font-bold capitalize'>recommendations</h1>
          <p className='text-2xl font-semibold text-port-gray max-w-2xl mx-auto'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quae, rem laboriosam
            eligendi sequi quaerat quia assumenda commodi sit modi unde, numquam est temporibus
          </p>
        </header>

        <nav></nav>

        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
          {projects.map((project) => {
            return <div className='card'></div>;
          })}
        </div>
      </div>
    </section>
  );
};
