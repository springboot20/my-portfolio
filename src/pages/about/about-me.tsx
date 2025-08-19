import React, { Fragment } from "react";
import { SplittedAnimatedText } from "../../components/splitted-text/splitted-text";
import { motion } from "framer-motion";
import AboutImage from "../../assets/images/about-image.png";
import { SkillCard } from "../../components/card/cards";
import { languages, dataBases, frameworks, others, tools } from "../../data/skills";
import { SlideIn } from "../../components/slide-in";

const skills = {
  languages: {
    title: "languages",
    skills: languages,
  },

  databases: {
    title: "databases",
    skills: dataBases,
  },

  tools: {
    title: "tools",
    skills: tools,
  },

  others: {
    title: "others",
    skills: others,
  },

  frameworks: {
    title: "frameworks",
    skills: frameworks,
  },
};

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
    width: "50%",
  },
};

export default function AboutPageComponent() {
  return (
    <article className="w-full py-28">
      <div className="w-full">
        <header className="space-y-3">
          <motion.h1
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                type: "spring",
                delay: 0.3,
              },
            }}
            className="font-fira-code font-semibold text-3xl text-port-light-text dark:text-white"
          >
            <span className="text-port-light-primary dark:text-port-primary">/</span>about me
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
                  type: "spring",
                  delay: 0.5,
                },
              },
            }}
            initial="initial"
            animate="animate"
            className="text-port-light-text dark:text-white font-fira-code font-normal text-lg"
          >
            who am i?
          </motion.p>
        </header>

        <section className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <SlideIn classnames="">
              <div className="space-y-6 flex flex-col justify-center">
                <h3 className="text-2xl font-semibold font-fira-code text-port-light-text dark:text-port-gray">
                  {SplittedAnimatedText({
                    content: ["Hello, i'm Abbas!"],
                    type: "letter",
                  })}
                </h3>

                <motion.div initial="hidden" animate="visible" className="overflow-hidden">
                  <h1 className="text-xl text-port-light-muted dark:text-white font-bold font-fira-code leading-normal cursor-hover">
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

                <p className="text-xl font-fira-code font-normal text-port-gray cursor-hover">
                  {SplittedAnimatedText({
                    content: [
                      "He specialized on using his experience to implement aesthetically pleasing UI designs and building scalable applications that perform efficiently.",
                    ],
                    type: "word",
                  })}
                </p>
              </div>
            </SlideIn>

            <SlideIn direction="right" classnames="xl:place-self-end">
              <div className="relative oveflow-hidden">
                <div className="w-full flex items-center justify-center">
                  <img src={AboutImage} alt="about image" className="h-full w-full" />
                </div>
              </div>
            </SlideIn>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full space-y-10">
            <div className="flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:items-center sm:space-x-2 shrink-0 flex-1">
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
                initial="initial"
                whileInView="animate"
                viewport={{ amount: 0.7, once: false }}
                className="text-port-light-text dark:text-white font-medium font-fira-code text-2xl"
              >
                <span className="text-port-light-primary dark:text-port-primary">#</span>skills
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
                initial="initial"
                whileInView="animate"
                viewport={{ amount: "all", once: false }}
                className="h-0.5 w-full sm:w-1/2 bg-port-light-primary dark:bg-port-primary block"
              />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 flex-1 gap-2">
              {React.Children.toArray(
                Object.values(skills).map((skill, index) => {
                  return (
                    <Fragment key={index}>
                      <SkillCard key={index} {...skill} />
                    </Fragment>
                  );
                })
              )}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
