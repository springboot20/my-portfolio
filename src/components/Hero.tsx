import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/hero-image.png";
import { scrollReveal } from "../utils/scrollreveal.config";
import { useEffect } from "react";
import { useTypeWriter } from "../hooks/useTypeWriter";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const HeroSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { textToDisplay } = useTypeWriter();

  const descriptionVariants = {
    final: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    initial: {
      x: -100,
      opacity: 0,
      scale: 0,
    },
  };

  const imageVariants = {
    final: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
    initial: {
      x: 200,
      opacity: 0,
      scale: 0,
    },
  };

  const overlayVariants = {
    final: {
      scale: 1,
      skewY: 0,
      opacity: 1,
      rotate: "-6deg",
      transition: {
        duration: 0.6,
      },
    },
    initial: {
      opacity: 0,
      scale: 0,
      skewY: "-6deg",
      rotate: 0,
    },
  };

  useEffect(() => {
    console.log(inView);
    if (inView) {
      control.start("final");
    } else {
      control.start("initial");
    }
  }, [control, inView]);

  useEffect(() => {
    scrollReveal.reveal("#developer-name", { delay: 250 });
    scrollReveal.reveal("#developer-description", { delay: 300 });
    scrollReveal.reveal("#developer-img", { delay: 400 });
    scrollReveal.reveal("#hire-button", { delay: 400 });
  }, []);

  return (
    <Disclosure
      as="section"
      id="home"
      className="flex justify-start items-start sm:justify-center sm:items-center p-4 w-full mt-8"
    >
      <div className="relative w-full">
        <motion.div
          ref={ref}
          animate={control}
          variants={overlayVariants}
          initial="initial"
          className="absolute bg-gradient-to-r inset-5 z-0 from-port-yellow to-port-yellow/20 rounded-lg"
        ></motion.div>
        <div className="relative z-10 flex items-center flex-col md:flex-row lg:h-[467px] bg-white p-4 sm:p-8 rounded-lg overflow-hidden">
          <motion.div
            ref={ref}
            variants={descriptionVariants}
            initial={"initial"}
            animate={control}
            className="space-y-6 max-w-2xl lg:max-w-3xl"
          >
            <h1
              className="text-2xl sm:text-3xl xl:text-5xl !leading-[1.2] font-inter font-bold text-port-black capitalize"
              id="developer-name"
            >
              i'm yunus abbas opeyemi <br />
              <span className="text-port-yellow ">front-end</span>{" "}
              <span className="border-r-4 border-port-black ">{textToDisplay}</span>
            </h1>

            <p
              className="text-lg sm:text-xl font-inter font-normal text-port-gray !leading-relaxed"
              id="developer-description"
            >
              A passionate Front-end developer with a zeal for crafting intuitive and responsive
              digital experience. With a strong foundation in HTML, CSS, Javascript,
              React/Typescript , Tailwind and others...
            </p>

            <Link to="#" className="inline-block group" id="hire-button">
              <button className="text-base sm:text-lg font-inter font-medium py-3 px-6 space-x-3 rounded-md bg-port-yellow hover:bg-transparent hover:text-port-yellow hover:ring-2 transition-colors hover:ring-port-yellow flex items-center justify-center uppercase">
                <span>hire me</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="group-hover:text-port-yellow transition-all group-hover:translate-x-1 h-5 text-port-black"
                />
              </button>
            </Link>
          </motion.div>

          <motion.div
            ref={ref}
            variants={imageVariants}
            animate={control}
            initial="initial"
            className="relative w-full flex items-center justify-center lg:h-[25rem]"
          >
            <img
              src={ProfileImage}
              alt="profile avatar"
              className="block h-full"
              id="developer-img"
            />
          </motion.div>
        </div>
      </div>
    </Disclosure>
  );
};

/*
 * 08029150459
 */
