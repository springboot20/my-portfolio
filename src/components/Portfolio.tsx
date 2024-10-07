import projectsData from "../data/data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const Portfolio = () => {
  const projects = projectsData;

  const control = useAnimation();
  const [ref, inView] = useInView();

  const containerVariants = {
    final: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardItemVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },

    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("final");
    } else {
      control.start("initial");
    }
  });

  return (
    <section
      className="p-4"
      id="projects"
      style={{
        perspective: "1000px",
      }}
    >
      <div className="mx-auto max-w-8xl">
        <header className="text-center space-y-4 max-w-xl mx-auto">
          <h1 className="text-port-black text-3xl font-inter font-bold capitalize">Projects</h1>
          <p className="text-lg font-inter font-normal text-port-gray">
            A testament to creativity and technical prowess, these showcase my learning and
            experience roadmap.
          </p>
        </header>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="initial"
          animate={control}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          {projects.map((project) => {
            return (
              <motion.div
                ref={ref}
                animate={control}
                initial="initial"
                variants={cardItemVariants}
                className="group space-y-0  card overflow-hidden relative p-0 h-[15rem] w-full"
                key={project.url}
              >
                <header>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="block absolute h-full w-full"
                  />
                </header>

                <div className="group-hover:opacity-100 group-hover:scale-100 origin-top transition-all flex items-center justify-center space-x-8 scale-0 text-white  opacity-0 absolute top-0 left-0 right-0 bg-black/50 z-10 h-full">
                  <Link to={project["github-url"]} target="_blank">
                    <FontAwesomeIcon icon={faGithub} className="h-10" />
                  </Link>

                  <Link to={project["url"]}>
                    <FontAwesomeIcon icon={faLink} className="h-10" target="_blank" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
