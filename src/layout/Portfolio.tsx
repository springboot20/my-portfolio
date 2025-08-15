import { Disclosure } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose, faCopyright } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { classNames } from "../utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function PortfolioLayout() {
  const [enableBackground, setEnableBackground] = useState<boolean>(false);

  const navigations = [
    {
      title: "home",
      path: "/",
    },
    {
      title: "works",
      path: "/projects",
    },
    {
      title: "about-me",
      path: "/about-me",
    },
    {
      title: "contacts",
      path: "/contact-me",
    },
  ];

  const splitText = (words: string) => {
    const splittedWords = words.split("");

    return splittedWords.map((word) => {
      const realWord = word === " " ? "\n" : word;
      return <span>{realWord}</span>;
    });
  };

  useEffect(() => {
    const handleWindowScroll = () => setEnableBackground(window.scrollY > 0);

    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  console.log(enableBackground);

  const listItem = (index: number) => {
    return {
      hidden: {
        opacity: 0,
        y: 10,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.35 * index,
        },
      },
    };
  };

  return (
    <Fragment>
      <Disclosure>
        {({ open }) => (
          <Fragment>
            <header
              className={classNames(
                "h-20 fixed inset-x-0 top-0 transition-transform",
                enableBackground &&
                  "bg-black/40 backdrop-blur-md z-20 border-[1.8px] border-port-gray inset-x-14 xl:inset-x-44 h-16 translate-y-10 rounded-full px-8"
              )}
            >
              <nav className={classNames("max-w-7xl mx-auto h-full xl:px-0 px-4")}>
                <div className="w-full h-full flex items-center justify-between">
                  <div className=""></div>

                  <div className="lg:flex hidden items-center gap-6">
                    {navigations.map(({ path, title }, index) => {
                      return (
                        <motion.div
                          key={`${title}-${index}`}
                          variants={{ ...listItem(index) }}
                          initial="hidden"
                          animate="visible"
                        >
                          <NavLink to={path} className="group">
                            {({ isActive }) => (
                              <p
                                className={classNames(
                                  "font-fira-code text-lg group-hover:text-white",
                                  isActive ? "text-white font-medium" : "text-port-gray font-normal"
                                )}
                              >
                                <span className="text-port-primary">#</span>
                                {splitText(title)}
                              </p>
                            )}
                          </NavLink>
                        </motion.div>
                      );
                    })}
                  </div>

                  <Disclosure.Button
                    className={
                      "lg:hidden text-port-gray h-10 w-10 flex items-center justify-center border border-port-gray rounded-md"
                    }
                  >
                    {open ? (
                      <FontAwesomeIcon icon={faClose} className="h-5" />
                    ) : (
                      <FontAwesomeIcon icon={faBars} className="h-5" />
                    )}
                  </Disclosure.Button>
                </div>
              </nav>
            </header>

            <Disclosure.Panel className="lg:hidden fixed transition-all left-0 right-0 w-full z-20 h-full bg-port-bg">
              <Disclosure.Button
                className={
                  "absolute top-8 text-white right-7 h-10 w-10 flex items-center justify-center"
                }
              >
                <FontAwesomeIcon icon={faClose} className="h-10" strokeWidth={1.5} />
              </Disclosure.Button>
              <div className="flex flex-col space-y-10 px-4 mt-20">
                {navigations.map(({ path, title }, index) => {
                  const localIndex = index + navigations.length;

                  return (
                    <motion.div
                      key={`${title}-${localIndex}`}
                      variants={{ ...listItem(index) }}
                      initial="hidden"
                      animate="visible"
                    >
                      <NavLink to={path} className="group">
                        {({ isActive }) => (
                          <p
                            className={classNames(
                              "font-medium font-fira-code text-4xl group-hover:text-white",
                              isActive ? "text-white font-medium" : "text-port-gray font-normal"
                            )}
                          >
                            <span className="text-port-primary">#</span>
                            {splitText(title)}
                          </p>
                        )}
                      </NavLink>
                    </motion.div>
                  );
                })}
              </div>
            </Disclosure.Panel>
          </Fragment>
        )}
      </Disclosure>
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 xl:px-0">
          <Outlet />
        </div>
        <footer className="border-t-[3px] border-port-gray">
          <div className="max-w-7xl mx-auto px-4 xl:px-0">
            <div className="flex items-center justify-between py-5">
              <div className="">
                <div className="space-y-6">
                  <h3 className="text-2xl font-fira-code font-medium text-white">Media</h3>
                  <div className="flex items-center space-x-4">
                    <Link to="https://github.com/springboot20" className="inline-block shrink-0">
                      <span className="sr-only">Github</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10"
                        viewBox="0 0 496 512"
                      >
                        <path
                          d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          fill="#ABB2BF"
                        />
                      </svg>
                    </Link>
                    <Link to="" className="inline-block shrink-0">
                      <span className="sr-only">Linkedin</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10"
                        viewBox="0 0 448 512"
                      >
                        <path
                          d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"
                          fill="#ABB2BF"
                        />
                      </svg>
                    </Link>
                    <Link to=""></Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center py-5">
              <p className="text-xl font-normal font-fira-code text-port-gray">
                <small className="inline-block mr-2">
                  <FontAwesomeIcon icon={faCopyright} className="h-4 text-port-gray" />
                </small>
                Copyright {new Date(Date.now()).getFullYear()}. Made by Abbas
              </p>
            </div>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}
