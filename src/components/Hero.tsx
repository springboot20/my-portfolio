import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import ProfileImage from "../assets/hero-image.png";
import { scrollReveal } from "../utils/scrollreveal.config";
import { useEffect } from "react";
import { useTypeWriter } from "../hooks/useTypeWriter";

export const HeroSection = () => {
  useEffect(() => {
    scrollReveal.reveal("#developer-name", { delay: 250 });
    scrollReveal.reveal("#developer-description", { delay: 300 });
    scrollReveal.reveal("#developer-img", { delay: 400 });
    scrollReveal.reveal("#hire-button", { delay: 400 });
  }, []);

  const { textToDisplay } = useTypeWriter();

  return (
    <Disclosure
      as="section"
      id="home"
      className="flex justify-start items-start sm:justify-center sm:items-center lg:min-h-[70vh] p-4 w-full"
    >
      <div className="relative w-full">
        <div className="absolute max-w-7xl mx-auto bg-gradient-to-r inset-5 z-0 from-port-yellow to-port-yellow/20 transform -skew-y-6 md:skew-y-0 md:-rotate-6 rounded-lg"></div>
        <div className="relative max-w-7xl mx-auto z-10 flex items-center flex-col md:flex-row bg-white p-4 sm:p-8 rounded-lg overflow-hidden">
          <div className="space-y-6 max-w-2xl">
            <h1
              className="text-2xl sm:text-3xl xl:text-5xl !leading-[1.2] font-inter font-bold text-port-black capitalize"
              id="developer-name"
            >
              i'm yunus abbas opeyemi <br />
              <span className="text-port-yellow ">front-end</span>{" "}
              <span className="border-r-4 border-port-black ">{textToDisplay}</span>
            </h1>

            <p
              className="text-base sm:text-lg font-inter font-normal text-port-gray"
              id="developer-description"
            >
              A passionate Front-end developer with a zeal for crafting intuitive and responsive
              digital experience. With a strong foundation in HTML, CSS, Javascript,
              React/Typescript , Tailwind and others...
            </p>

            <Link to="#" className="inline-block" id="hire-button">
              <button className="text-base sm:text-lg font-inter font-medium py-3.5 px-8 space-x-5 rounded-md bg-port-yellow flex items-center justify-center uppercase">
                <span>hire me</span>
                <FontAwesomeIcon icon={faArrowRight} className="h-6 text-port-black" />
              </button>
            </Link>
          </div>
          <div className="relative w-full flex items-center justify-center -bottom-8">
            <img
              src={ProfileImage}
              alt="profile avatar"
              className="block h-full"
              id="developer-img"
            />
          </div>
        </div>
      </div>
    </Disclosure>
  );
};
