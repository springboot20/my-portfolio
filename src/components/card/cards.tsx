import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { truncate } from '../../utils';
import { motion } from 'framer-motion';

interface ProjectCardComponentProps {
  title: string;
  url: string;
  alt?: string;
  image?: string;
  githubUrl?: string;
  frameworks: string[];
  description: string;
}

export const ProjectCardComponent = (props: ProjectCardComponentProps) => {
  const { title, frameworks, image, url, description } = props;
  return (
    <article className='overflow-hidden border border-port-light-border dark:border-white'>
      <div className='w-full'>
        {image && (
          <header className='h-64'>
            <img
              src={image}
              alt='project image'
              className='h-full w-full object-cover object-center'
            />
          </header>
        )}

        <div className='p-2 flex items-center flex-wrap gap-4'>
          {frameworks.map((framework) => {
            return (
              <p
                key={framework}
                className='text-port-light-muted dark:text-port-gray font-normal font-fira-code'>
                {framework}
              </p>
            );
          })}
        </div>

        <div className='p-4 border-t px-4 space-y-3'>
          <h3 className='text-port-light-text dark:text-white font-medium font-fira-code text-lg sm:text-xl'>
            {title}
          </h3>
          <p className='text-port-gray font-normal font-fira-code'>{truncate(description, 70)}</p>
          <div className='flex items-center gap-2 flex-wrap'>
            <Link
              to={url}
              className='inline-block w-fitbg-transparent hover:bg-port-light-accent active:bg-port-light-accent/80
                    dark:active:bg-port-primary/25 dark:hover:bg-port-primary/25 
                    border border-port-light-border dark:border-port-primary
                    text-port-light-text dark:text-white 
                    hover:underline hover:border-port-light-primary dark:hover:border-port-primary
                    font-medium font-fira-code px-5 py-2.5 
                    transition-all focus:border-none focus:ring-2 focus:ring-port-light-primary dark:focus:ring-port-primary'>
              <span>live preview </span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} className='h-4' />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

interface SkillCardProps {
  title: string;
  index?: number;
  skills?: Array<{
    name: string;
    logo?: JSX.Element;
  }>;
}

export const SkillCard = (props: SkillCardProps) => {
  const { title, skills, index } = props;

  const skillTitleVariant = (index: number) => {
    return {
      initial: {
        y: -10,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          delay: index * 0.15,
        },
      },
    };
  };

  const subSkillIconVariant = (index: number) => {
    return {
      initial: {
        scale: 0,
        opacity: 0,
      },
      animate: {
        scale: 1,
        opacity: 1,
        transition: {
          delay: index * 0.15,
        },
      },
    };
  };

  const subSkillTitleVariant = (index: number) => {
    return {
      initial: {
        y: -10,
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
        transition: {
          delay: index * 0.15,
        },
      },
    };
  };

  return (
    <div className='overflow-hidden border border-port-light-border dark:border-port-light-border/30 h-max'>
      <div className='w-full h-full'>
        <div className='p-2.5'>
          <motion.h3
            variants={{
              ...skillTitleVariant(Number(index)),
            }}
            initial='initial'
            whileInView='animate'
            viewport={{ once: false, amount: 0.5 }}
            className='text-port-light-text dark:text-port-light-border/60 font-medium font-fira-code capitalize'>
            {title}
          </motion.h3>
        </div>

        <div className='p-2 flex items-center flex-wrap gap-2 border-t borderport-light-border dark:border-port-light-border/30'>
          {skills &&
            skills.map((skill, index) => {
              return (
                <div className='flex items-center flex-col' key={`${skill.name}-${index}`}>
                  <motion.span
                    variants={{
                      ...subSkillIconVariant(index),
                    }}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: false, amount: 0.5 }}>
                    {skill.logo}
                  </motion.span>

                  <motion.p
                    variants={{
                      ...subSkillTitleVariant(index),
                    }}
                    initial='initial'
                    whileInView='animate'
                    viewport={{ once: false, amount: 0.5 }}
                    className='text-port-light-muted dark:text-port-gray font-fira-code text-sm'>
                    {skill.name}
                  </motion.p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
