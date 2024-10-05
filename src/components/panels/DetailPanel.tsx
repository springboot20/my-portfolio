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
      icon: <FontAwesomeIcon icon={faFacebook} className="h-6 text-gray-800" />,
    },
    {
      to: "#instagram",
      name: "Instagram icon",
      icon: <FontAwesomeIcon icon={faInstagram} className="h-6 text-gray-800" />,
    },
    {
      to: "#twitter",
      name: "Twitter icon",
      icon: <FontAwesomeIcon icon={faTwitter} className="h-6 text-gray-800" />,
    },
    {
      to: "#linkedin",
      name: "Linkedin icon",
      icon: <FontAwesomeIcon icon={faLinkedin} className="h-6 text-gray-800" />,
    },
    {
      to: "https://github.com/springboot20/",
      icon: <FontAwesomeIcon icon={faGithub} className="h-6 text-gray-800" />,
      name: "Github icon",
    },
  ];

  return (
    <div
      className={classNames(
        // open ? "translate-x-0" : "-translate-x-full",
        "fixed top-0 left-0 bottom-5 z-20 bg-white h-screen w-[22rem] p-3 overflow-y-scroll hidden xl:block",
      )}
    >
      <Disclosure.Button
        onClick={() => close()}
        className="absolute right-4 top-1 inline-flex items-center justify-center rounded-md p-2 dark:text-white text-gray-900 hover:dark:bg-gray-700 hover:dark:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
      >
        <span className="sr-only">Close button</span>
        <FontAwesomeIcon icon={faClose} className="h-5 text-gray-800 " />
      </Disclosure.Button>

      <div className="space-y-5">
        <div className="py-6 flex justify-center items-center flex-col space-y-3 border-b-2 border-port-gray/30">
          <div className="relative flex items-center justify-center overflow-hidden h-32 w-32 rounded-full">
            <img src={ProfileImg} className="absolute" alt="profile img" />
          </div>

          <div className="text-center">
            <h3 className="text-2xl font-bold capitalize text-port-black">yunus abbas opeyemi</h3>
            <p className="font-semibold text-xl text-port-gray capitalize">front-end developer</p>
          </div>

          <div className="inline-flex space-x-4 mt-4">
            {socialLinks.map(({ to, name, icon }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  arial-label={name}
                  className="flex items-center justify-center h-10 w-10 rounded-full bg-port-yellow"
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
            <span className="block py-1.5 px-2 bg-port-yellow capitalize text-xl font-semibold text-port-black">
              age:
            </span>
            <span className="text-xl font-semibold text-port-gray">20</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="block py-1.5 px-2 bg-port-yellow capitalize text-xl font-semibold text-port-black">
              residence:
            </span>
            <span className="text-xl font-semibold text-port-gray">20</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="block py-1.5 px-2 bg-port-yellow capitalize text-xl font-semibold text-port-black">
              freelance:
            </span>
            <span className="text-xl font-semibold text-port-green capitalize">available</span>
          </li>
          <li className="flex justify-between items-center">
            <span className="block py-1.5 px-2 bg-port-yellow capitalize text-xl font-semibold text-port-black">
              address:
            </span>
            <span className="text-xl font-semibold text-port-gray">20</span>
          </li>
        </ul>

        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-2xl font-semibold text-port-black capitalize">languages</h1>
          <ul className="space-y-4">
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-xl font-semibold text-port-gray">english:</span>
                <span className="text-xl font-semibold text-port-gray">75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-xl font-semibold text-port-gray">yoruba:</span>
                <span className="text-xl font-semibold text-port-gray">90%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
          </ul>
        </div>

        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-2xl font-semibold text-port-black capitalize">skills</h1>
          <ul className="space-y-4">
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-xl font-semibold text-port-gray">html:</span>
                <span className="text-xl font-semibold text-port-gray">90%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-[90%] before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="uppercase text-xl font-semibold text-port-gray">css:</span>
                <span className="text-xl font-semibold text-port-gray">75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
            <li className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="capitalize text-xl font-semibold text-port-gray">js:</span>
                <span className="text-xl font-semibold text-port-gray">75%</span>
              </div>
              <span className='block rounded-md ring-1 ring-offset-1 ring-port-yellow w-full h-1 relative before:absolute before:content-[""] before:w-3/4 before:bg-port-yellow before:h-1 before:rounded-md'></span>
            </li>
          </ul>
        </div>
        <div className="space-y-3 py-3 border-b-2 border-port-gray/30">
          <h1 className="text-2xl font-semibold text-port-black capitalize">extra skills</h1>
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
              <small className="text-lg capitalize text-port-gray font-semibold">
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
              <small className="text-lg capitalize text-port-gray font-semibold">sass</small>
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
              <small className="text-lg capitalize text-port-gray font-semibold">
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
              <small className="text-lg capitalize text-port-gray font-semibold">webpack</small>
            </li>
          </ul>
        </div>
        <Link to={"/"} download={myCV} className="mt-4 block">
          <button className="w-full text-2xl text-port-black font-semibold uppercase py-2.5 px-8 bg-port-yellow flex items-center space-x-3 justify-center">
            <small>download cv</small>
            <FontAwesomeIcon icon={faDownload} className="h-6 text-gray-800" />
          </button>
        </Link>
      </div>
    </div>
  );
};
