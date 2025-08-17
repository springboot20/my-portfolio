import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface ProjectCardComponentProps {
  title: string;
  link: string;
  image?: string;
  frameworks: string[];
  description: string;
}

export const ProjectCardComponent = (props: ProjectCardComponentProps) => {
  const { title, frameworks, image, link, description } = props;
  return (
    <article className="overflow-hidden border border-port-light-border dark:border-white">
      <div className="w-full">
        {image && (
          <header className="h-64">
            <img
              src={image}
              alt="project image"
              className="h-full w-full object-cover object-center"
            />
          </header>
        )}

        <div className="p-2 flex items-center flex-wrap gap-4">
          {frameworks.map((framework) => {
            return (
              <p
                key={framework}
                className="text-port-light-muted dark:text-port-gray font-normal font-fira-code"
              >
                {framework}
              </p>
            );
          })}
        </div>

        <div className="p-4 border-t px-4 space-y-3">
          <h3 className="text-port-light-text dark:text-white font-medium font-fira-code text-lg sm:text-xl">{title}</h3>
          <p className="text-port-gray font-normal font-fira-code">{description}</p>
          <div className="flex items-center gap-2 flex-wrap">
            <Link
              to={link}
              className="inline-block w-fitbg-transparent hover:bg-port-light-accent active:bg-port-light-accent/80
                    dark:active:bg-port-primary/25 dark:hover:bg-port-primary/25 
                    border border-port-light-border dark:border-port-primary
                    text-port-light-text dark:text-white 
                    hover:underline hover:border-port-light-primary dark:hover:border-port-primary
                    font-medium font-fira-code px-5 py-2.5 
                    transition-all focus:border-none focus:ring-2 focus:ring-port-light-primary dark:focus:ring-port-primary"
            >
              <span>live preview </span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="h-4" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export const SkillCard = () => {
  return (
    <div className="overflow-hidden border border-port-light-border dark:border-white">
      <div className="w-full">
        <div className="p-2.5">
          <h3 className="text-port-light-text dark:text-white font-medium font-fira-code">Title</h3>
        </div>

        <div className="p-2 flex items-center flex-wrap gap-2 border-t borderport-light-border dark:border-white">
          {["TypeScript", "Python", "JavaScript"].map((skill) => {
            return (
              <p key={skill} className="text-port-light-muted dark:text-port-gray font-fira-code">
                {skill}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};
