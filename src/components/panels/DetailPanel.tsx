import { classNames } from "../../utils";
import ProfileImg from "../../assets/my-pics.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faClose, faDownload } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import myCV from "../../assets/my-cv.pdf";
import { Disclosure } from "@headlessui/react";

type DetailPanelProps = {
  close: (focusableElement?: HTMLElement | React.MutableRefObject<HTMLElement | null>) => void;
  open: boolean;
};

export const DetailPanel: React.FC<DetailPanelProps> = ({ close, open }) => {
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

  return (
    <div
      className={classNames(
        open ? "translate-x-0 fixed" : "-translate-x-full",
        "top-0 left-0 bottom-5 z-20 bg-white transition-transform h-auto w-[22rem] p-6 -translate-x-full xl:relative xl:translate-x-0 xl:block",
      )}
    >
      <Disclosure.Button className="absolute right-4 xl:hidden top-1 inline-flex items-center justify-center rounded-md p-2 dark:text-white text-gray-900 hover:dark:bg-gray-700 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
        <span className="sr-only">Close button</span>
        <FontAwesomeIcon icon={faClose} className="h-5 text-gray-800" />
      </Disclosure.Button>

      <div className="space-y-3">
        <div className="py-6 flex justify-center items-center flex-col space-y-3 border-b-2 border-port-gray/30">
          <div className="relative flex items-center justify-center overflow-hidden h-32 w-32 rounded-full">
            <img src={ProfileImg} className="absolute" alt="profile img" />
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
            <p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              age:
            </p>
            <p className="text-lg font-inter font-normal text-port-gray">20</p>
          </li>
          <li className="flex justify-between items-center">
            <p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              residence:
            </p>
            <p className="text-lg font-inter font-normal text-port-gray">20</p>
          </li>
          <li className="flex justify-between items-center">
            <p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              freelance:
            </p>
            <p className="text-lg font-inter font-normal text-port-green capitalize">available</p>
          </li>
          <li className="flex justify-between items-center">
            <p className="block py-1.5 px-2 bg-port-yellow capitalize text-base font-normal font-inter text-port-black">
              address:
            </p>
            <p className="text-lg font-inter font-normal text-port-gray">20</p>
          </li>
        </ul>

        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-xl font-medium font-inter text-port-black capitalize">languages</h1>
          <ul className="space-y-1.5">
            <li className="space-y-1">
              <div className="flex justify-between items-center">
                <p className="capitalize text-lg font-normal font-inter text-port-gray">english:</p>
                <p className="text-lg font-inter font-normal text-port-gray">75%</p>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>

            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-lg font-normal font-inter text-port-gray">
                  yoruba:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">90%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></span>
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
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="uppercase text-lg font-normal font-inter text-port-gray">
                  css:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-lg font-normal font-inter text-port-gray">
                  js:
                </span>
                <span className="text-lg font-inter font-normal text-port-gray">75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
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

        <Link to={"/"} download={myCV} className="mt-4 block">
          <button className="w-full text-lg sm:text-xl font-inter font-medium uppercase py-2.5 px-8 bg-port-yellow flex items-center space-x-3 justify-center">
            <small>download cv</small>
            <FontAwesomeIcon icon={faDownload} className="h-5 text-gray-800" />
          </button>
        </Link>
      </div>
    </div>
  );
};
