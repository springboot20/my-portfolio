import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ProjectType } from '../../data/projects';
import ProjectPreview from '../preview/project-preview';

type ProjectCardComponentProps = {
  project: ProjectType;
  index?: number;
};

export const ProjectCardComponent = (props: ProjectCardComponentProps) => {
  const { project, index } = props;

  return (
    <div className='p-6 overflow-hidden border border-port-light-border dark:border-port-light-primary/20 rounded-xl font-fira-code'>
      {/* Header */}
      <div className='flex items-start justify-between gap-4 mb-6'>
        <div>
          <div className='flex items-center gap-2 mb-2'>
            {index && (
              <>
                <span className='text-sm text-port-light-text dark:text-white/20'>
                  {String(index).padStart(2, '0')}
                </span>

                <span className='w-4 h-px bg-white/15' />
              </>
            )}
            <span className='text-xs text-port-light-text dark:text-violet-400'>
              {project['frameworks'].slice(0, 3).join(', ')}
            </span>
          </div>
          <h3 className='text-lg sm:text-xl font-semibold text-port-light-text dark:text-white/90 leading-snug'>
            {project['project-title']}
          </h3>
        </div>

        <div className='flex items-center gap-2 shrink-0'>
          <Link
            to={project['github-url']}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-1.5 px-3 py-2 rounded-3xl bg-white/[0.03] border dark:border-white/[0.07] text-port-light-text dark:text-white/40 dark:hover:text-white text-xs transition-colors'>
              <GitHubIcon />
              <span className='hidden sm:block'>Code</span>
            </motion.button>
          </Link>

          <Link
            to={project.url}
            target='_blank'
            rel='noopener noreferrer'
            className='cursor-pointer'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className='flex items-center gap-1.5 px-3 py-2 rounded-3xl border border-port-light-border dark:border-transparent bg-port-light-bg text-port-light-text dark:bg-port-light-primary/20 dark:hover:bg-port-light-primary/60 dark:text-white text-xs font-medium transition-colors'>
              <ExternalIcon />
              <span className='hidden sm:block'>Open Site</span>
            </motion.button>
          </Link>
        </div>
      </div>

      {/* Image + description grid */}
      <div className='grid grid-cols-1 lg:grid-cols-5 gap-6'>
        {/* Image */}
        <div className='lg:col-span-3 overflow-hidden rounded-xl aspect-video bg-white/5 border border-white/5'>
          <ProjectPreview
            url={project.url}
            image={project.image}
            alt={project.alt}
            title={project['project-title']}
          />
        </div>

        {/* Description */}
        <div className='lg:col-span-2 flex flex-col justify-between lg:max-h-[100px] gap-4'>
          <p className='text-sm text-port-light-text dark:text-white/40 leading-relaxed'>
            {project['project-description'].slice(0, 300)}
            {project['project-description'].length > 300 && '…'}
          </p>

          {/* Tech stack tags */}
          <div className='flex flex-wrap gap-2'>
            {project['frameworks'].map((tech) => (
              <span
                key={tech}
                className='rounded-full text-xs px-2 py-1.5 bg-port-light-bg text-port-light-text dark:bg-port-light-primary/20 border dark:border-port-light-primary dark:text-white'>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
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
          delay: index * 0.35,
        },
      },
    };
  };

  return (
    <motion.div
      variants={{
        initial: {
          y: Math.floor(Math.random() * -20) + Number(index),
          opacity: 0,
        },
        animate: {
          y: 0,
          opacity: 1,
          transition: {
            delay: Number(index) * 0.15,
          },
        },
      }}
      initial='initial'
      whileInView='animate'
      viewport={{ once: false, amount: 0.5 }}
      className='overflow-hidden border border-port-light-border dark:border-port-light-border/30 h-max'>
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

        <div className='p-2 flex items-center flex-wrap gap-2 border-t border-port-light-border dark:border-port-light-border/30'>
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
    </motion.div>
  );
};

const GitHubIcon = () => (
  <svg viewBox='0 0 24 24' className='w-4 h-4 fill-current'>
    <path d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z' />
  </svg>
);

const ExternalIcon = () => (
  <svg
    viewBox='0 0 24 24'
    className='w-3.5 h-3.5'
    fill='none'
    stroke='currentColor'
    strokeWidth={2}>
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
    />
  </svg>
);
