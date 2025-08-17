import { Link } from "react-router-dom";
import DotPattern from "../../assets/images/dots-pattern.png";
import HeroImage from "../../assets/images/hero-image.png";
import ProjectDemoImage from "../../assets/images/project-demo-image.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";
import AboutImage from "../../assets/images/about-image.png";
import SkillCoverImage from "../../assets/images/skill-cover-image.png";
import { SlideIn } from "../../components/slide-in";
import { motion } from "framer-motion";
import { SplittedAnimatedText } from "../../components/splitted-text/splitted-text";
import { ProjectCardComponent, SkillCard } from "../../components/card/cards";

export default function HomePageComponent() {
  return (
    <article className="w-full py-28">
      <div className="w-full">
        {/* hero section starts */}
        <HeroSection />
        {/* hero section ends */}

        {/* projects section starts */}
        <ProjectSection />
        {/* projects section ends */}

        {/* skill section start */}
        <SkillSection />
        {/* skill section ends */}

        {/* about section start */}
        <AboutSection />
        {/* about section ends */}

        {/* contact section start */}
        <ContactSection />
        {/* contact section ends */}
      </div>
    </article>
  );
}

const HeroSection = () => {
  return (
    <section className="flex flex-col gap-16 py-12">
      <div className="grid grid-cols-1 gap-9 lg:grid-cols-2">
        <SlideIn>
          <div className="space-y-7">
            <motion.div initial="hidden" animate="visible" className="overflow-hidden">
              <h1 className="text-4xl text-gray-900 dark:text-white font-bold font-fira-code leading-normal cursor-hover">
                {SplittedAnimatedText({
                  content: [
                    "Abbas is a ",
                    <span>Front-end developer</span>,
                    " with a zeal for ",
                    <span>crafting intuitive</span>,
                    " and ",
                    <span>responsive digital experience.</span>,
                  ],
                  type: "word",
                })}
              </h1>
            </motion.div>

            <motion.p
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    delay: 0.1,
                    staggerChildren: 0.15,
                    delayChildren: 0.1,
                    ease: [0.25, 0.46, 0.45, 0.94],
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              className="text-xl font-fira-code font-normal text-port-light-muted dark:text-port-gray cursor-hover"
            >
              {SplittedAnimatedText({
                content: [
                  "He specialized on using his experience to implement aesthetically pleasing UI designs and building scalable applications that perform efficiently.",
                ],
                type: "word",
              })}
            </motion.p>

            <SlideIn direction="bottom">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <Link
                  to=""
                  className="inline-block w-fitbg-transparent hover:bg-port-light-accent active:bg-port-light-accent/80
                    dark:active:bg-port-primary/25 dark:hover:bg-port-primary/25 
                    border border-port-light-border dark:border-port-primary
                    text-port-light-text dark:text-white 
                    hover:underline hover:border-port-light-primary dark:hover:border-port-primary
                    font-medium font-fira-code px-5 py-2.5 
                    transition-all focus:border-none focus:ring-2 focus:ring-port-light-primary dark:focus:ring-port-primary"
                >
                  contact me!!
                </Link>
                <a href="/resume.pdf" download="Yunus_Abbas_Resume.pdf">
                  <button
                    type="button"
                    className="
                      bg-transparent 
                      hover:bg-port-light-accent dark:hover:bg-white/10 
                      active:bg-port-light-accent/80 dark:active:bg-white/10 
                      border border-port-light-border dark:border-port-primary
                      hover:border-port-light-primary dark:hover:border-port-primary hover:ring-2 hover:ring-port-light-primary dark:hover:ring-port-primary
                      px-8 py-2.5 flex items-center space-x-3 
                      transition-all"
                  >
                    <span className="bg-gradient-to-l from-indigo-700 to-red-500 bg-clip-text text-transparent font-fira-code">
                      Download Resume
                    </span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="download"
                      className="h-5 stroke-[20px] fill-none stroke-red-600"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V274.7l-73.4-73.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l128-128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L288 274.7V32zM64 352c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H346.5l-45.3 45.3c-25 25-65.5 25-90.5 0L165.5 352H64zm368 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"></path>
                    </svg>
                  </button>
                </a>
              </div>
            </SlideIn>
          </div>
        </SlideIn>

        <SlideIn direction="right">
          <div className="relative xl:place-self-end">
            <motion.img
              loading="lazy"
              variants={{
                hidden: {
                  opacity: 0,
                  scale: 0.75,
                },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    delay: 1.5,
                  },
                },
              }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              src={DotPattern}
              className="h-20 absolute z-10 right-5 top-10"
            />

            <div className="relative">
              <motion.img
                loading="lazy"
                variants={{
                  hidden: {
                    opacity: 0,
                    scale: 0.75,
                  },
                  visible: {
                    opacity: 1,
                    scale: 1,
                    transition: {
                      delay: 1.25,
                    },
                  },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                src={HeroImage}
              />
            </div>
          </div>
        </SlideIn>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-port-light-border dark:border-port-gray relative px-7 py-4 w-full bg-port-light-surface dark:bg-transparent">
          <span className="bg-port-light-surface dark:bg-port-bg absolute flex items-center justify-center px-2 py-1.5 -top-7">
            <svg
              width="42"
              height="29"
              viewBox="0 0 42 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="41.472" height="28.704" fill="#282C33" />
              <path
                d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
                fill="#ABB2BF"
              />
            </svg>
          </span>
          <p className="font-fira-code font-normal text-port-light-text dark:text-white sm:text-xl cursor-hover">
            {SplittedAnimatedText({
              content: ["With great power comes great electricity bill"],
              type: "word",
            })}
          </p>
        </div>
      </div>
    </section>
  );
};

const ProjectSection = () => {
  return (
    <section className="py-12">
      <div className="w-full space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 shrink-0 flex-1">
            <h2 className="text-port-light-text dark:text-white font-medium font-fira-code text-2xl">
              <span className="text-port-light-primary dark:text-port-primary">#</span>projects
            </h2>
            <div className="h-0.5 w-1/2 bg-port-light-primary dark:bg-port-primary block" />
          </div>

          <Link to="" className="group">
            <p className="group-hover:underline text-port-light-text group-hover:text-port-light-primary dark:text-white dark:group-hover:text-port-primary transition-colors flex items-center space-x-3 font-fira-code font-medium">
              <span>View all</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="h-4" />
              </span>
            </p>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }, (_, index) => {
            return (
              <ProjectCardComponent
                key={index}
                description="Minecraft servers hosting"
                link="/"
                image={ProjectDemoImage}
                title="ChertNodes"
                frameworks={["HTML", "CSS", "JavaScript", "Python", "Tailwind CSS"]}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

const SkillSection = () => {
  return (
    <section className="py-12">
      <div className="w-full space-y-10">
        <div className="flex items-center space-x-2 shrink-0 flex-1">
          <h2 className="text-port-light-text dark:text-white font-medium font-fira-code text-2xl">
            <span className="dark:text-port-primary">#</span>skills
          </h2>
          <div className="h-0.5 w-1/2 bg-port-light-primary dark:bg-port-primary block" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-start gap-9">
          <div className="shrink-0 relative flex-grow max-w-lg">
            {/* dot one pattern start */}
            <img src={SkillCoverImage} className="h-full w-full object-cover" />
            {/* dot one pattern end */}
          </div>

          <div className="grid grid-cols-2 xl:grid-cols-3 flex-1 gap-2">
            {Array.from({ length: 5 }, (_, index) => {
              return (
                <Fragment key={index}>
                  {index === 3 && <div className="hidden xl:block"></div>}
                  {index === 4 && <div className="xl:hidden"></div>}
                  <SkillCard key={index} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="w-full space-y-10">
        <div className="flex items-center space-x-2 shrink-0 flex-1">
          <h2 className="text-port-light-text dark:text-white font-medium font-fira-code text-2xl">
            <span className="text-port-light-primary dark:text-port-primary">#</span>about-me
          </h2>
          <div className="h-0.5 w-1/2 bg-port-light-primary dark:bg-port-primary block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="space-y-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold font-fira-code dark:text-port-gray">
              {SplittedAnimatedText({
                content: ["Hello, i'm Abbas!"],
                type: "letter",
              })}
            </h3>

            <motion.div initial="hidden" animate="visible" className="overflow-hidden">
              <h1 className="text-lg text-port-light-text dark:text-white font-bold font-fira-code leading-normal cursor-hover">
                {SplittedAnimatedText({
                  content: [
                    "I'm a ",
                    <span>Front-end developer</span>,
                    " with a zeal for ",
                    <span>crafting intuitive</span>,
                    " and ",
                    <span>responsive digital experience.</span>,
                  ],
                  type: "word",
                })}
              </h1>
            </motion.div>

            <p className="text-lg font-fira-code font-normal text-port-light-muted dark:text-port-gray cursor-hover">
              {SplittedAnimatedText({
                content: [
                  "He specialized on using his experience to implement aesthetically pleasing UI designs and building scalable applications that perform efficiently.",
                ],
                type: "word",
              })}
            </p>
            <Link
              to=""
              className="group inline-flex w-fit items-center space-x-3 
                bg-transparent hover:bg-port-light-accent active:bg-port-light-accent/80
                dark:active:bg-port-primary/25 dark:hover:bg-port-primary/25 
                border border-port-light-border dark:border-port-primary
                text-port-light-text dark:text-white 
                hover:underline hover:border-port-light-primary dark:hover:border-port-primary
                font-medium font-fira-code px-5 py-2.5 
                transition-all focus:border-none focus:ring-2 focus:ring-port-light-primary dark:focus:ring-port-primary"
            >
              <span>Read more</span>
              <span>
                <FontAwesomeIcon icon={faArrowRight} className="h-4" />
              </span>
            </Link>
          </div>
          <div className="relative oveflow-hidden place-self-end">
            <div className="w-full flex items-center justify-center h-[30rem]">
              <img src={AboutImage} alt="about image" className="h-full w-[20rem]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="py-12">
      <div className="w-full space-y-10">
        <div className="flex items-center space-x-2 shrink-0 flex-1">
          <h2 className="text-port-light-text dark:text-white font-medium font-fira-code text-2xl">
            <span className="text-port-light-text dark:text-port-primary">#</span>contact-me
          </h2>
          <div className="h-0.5 w-1/2 bg-port-light-primary dark:bg-port-primary block" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className=""></div>
          <div className=""></div>
        </div>
      </div>
    </section>
  );
};
