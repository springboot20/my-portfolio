import { classNames } from "../../utils";
import ProfileImg from "../../assets/hero-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import myCV from "../../assets/my-cv.pdf";
import { motion } from "framer-motion";

type DetailPanelProps = {
  open: boolean;
};

const socialLinks: { to: string; icon: JSX.Element; name: string }[] = [
  {
    to: "#facebook",
    name: "Facebook icon",
    icon: <FontAwesomeIcon icon={faFacebook} className="h-5 text-gray-800" />,
  },
  {
    to: "#instagram",
    name: "Instagram icon",
    icon: <FontAwesomeIcon icon={faInstagram} className="h-5 text-gray-800" />,
  },
  {
    to: "#twitter",
    name: "Twitter icon",
    icon: <FontAwesomeIcon icon={faTwitter} className="h-5 text-gray-800" />,
  },
  {
    to: "#linkedin",
    name: "Linkedin icon",
    icon: <FontAwesomeIcon icon={faLinkedin} className="h-5 text-gray-800" />,
  },
  {
    to: "https://github.com/springboot20/",
    icon: <FontAwesomeIcon icon={faGithub} className="h-5 text-gray-800" />,
    name: "Github icon",
  },
];

export const DetailPanel: React.FC<DetailPanelProps> = ({ open }) => {

  return (
    <div
      className={classNames(
        open ? "translate-x-0 fixed overflow-y-scroll h-screen" : "-translate-x-full",
        "top-0 left-0 bottom-5 z-20 bg-white transition-transform xl:h-auto w-[22rem] p-6 -translate-x-full xl:relative xl:translate-x-0 xl:block",
      )}
    >
      <div className="space-y-3">
        <div className="py-6 flex justify-center items-center flex-col space-y-3 border-b-2 border-port-gray/30">
          <div className="relative flex items-center justify-center overflow-hidden h-32 w-32 rounded-full border">
            <img
              src={ProfileImg}
              className="h-full w-full object-cover object-top"
              alt="profile img"
            />
          </div>

          <div className="text-center">
            <h3 className="text-xl font-medium font-inter capitalize text-port-black">
              yunus abbas opeyemi
            </h3>
            <p className="font-normal font-inter text-lg text-port-gray capitalize">
              front-end developer
            </p>
          </div>

          <div className="inline-flex space-x-4 mt-4">
            {socialLinks.map(({ to, name, icon }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  arial-label={name}
                  className="flex items-center justify-center h-9 w-9 rounded-full bg-port-yellow"
                >
                  <span className="sr-only">{name}</span>
                  {icon}
                </Link>
              );
            })}
          </div>
        </div>

        <ul className="space-y-4 border-b-2 border-port-gray/30 py-3  ">
          <li className="flex justify-between items-center">
            <motion.p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              age:
            </motion.p>
            <motion.p className="text-lg font-inter font-normal text-port-gray">20</motion.p>
          </li>
          <li className="flex justify-between items-center">
            <motion.p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              residence:
            </motion.p>
            <p className="text-lg font-inter font-normal text-port-gray">20</p>
          </li>
          <li className="flex justify-between items-center">
            <motion.p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              freelance:
            </motion.p>
            <p className="text-lg font-inter font-normal text-port-green capitalize">available</p>
          </li>
          <li className="flex justify-between items-center">
            <motion.p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              address:
            </motion.p>
            <motion.p className="text-lg font-inter font-normal text-port-gray">20</motion.p>
          </li>
        </ul>

        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-xl font-medium font-inter text-port-black capitalize">languages</h1>
          <ul className="space-y-1.5 language-list">
            <li className="space-y-1 language-item">
              <div className="flex justify-between items-center">
                <p className="capitalize text-lg font-normal font-inter text-port-gray">english:</p>
                <p className="text-lg font-inter font-normal text-port-gray">75%</p>
              </div>
              <motion.span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></motion.span>
            </li>

            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-lg font-normal font-inter text-port-gray">
                  yoruba:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">90%</span>
              </div>
              <motion.span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></motion.span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-xl font-medium font-inter text-port-black capitalize">skills</h1>
          <ul className="space-y-1.5">
            <li className="space-y-1.5">
              <div className="flex justify-between items-center">
                <span className="capitalize text-lg font-normal font-inter text-port-gray">
                  html:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">90%</span>
              </div>
              <motion.span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></motion.span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="uppercase text-lg font-normal font-inter text-port-gray">
                  css:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">75%</span>
              </div>
              <motion.span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></motion.span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-lg font-normal font-inter text-port-gray">
                  js:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">75%</span>
              </div>
              <motion.span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></motion.span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-xl font-inter font-medium text-port-black capitalize">
            extra skills
          </h1>
          <ul className="space-y-3 flex flex-col items-start">
            <li className="space-x-2 inline-flex items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
              </svg>
              <small className="text-lg capitalize text-port-gray font-inter font-medium">
                tailwind, bootstrap
              </small>
            </li>
            <li className="space-x-2 inline-flex items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
              </svg>
              <small className="text-lg capitalize text-port-gray font-inter font-medium">
                sass
              </small>
            </li>
            <li className="space-x-2 inline-flex items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
              </svg>
              <small className="text-lg capitalize text-port-gray font-inter font-medium">
                react, nodejs
              </small>
            </li>
            <li className="space-x-2 inline-flex items-center">
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
                <rect x="0.5" y="0.5" width="9" height="9" stroke="#FFB400" />
                <rect x="5.5" y="5.5" width="9" height="9" stroke="#FFB400" />
              </svg>
              <small className="text-lg capitalize text-port-gray font-inter font-medium">
                webpack
              </small>
            </li>
          </ul>
        </div>

        <Link
          to={"/"}
          download={myCV}
          className="w-full text-lg sm:text-xl font-inter font-medium uppercase py-2.5 px-8 bg-port-yellow flex items-center space-x-3 justify-center mt-4"
        >
          <small>download cv</small>
          <FontAwesomeIcon icon={faDownload} className="h-5 text-gray-800" />
        </Link>
      </div>
    </div>
  );
};
