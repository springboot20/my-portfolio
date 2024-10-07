import { faEnvelope, faFlag, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { truncate } from "../utils";

export const Contact = () => {
  return (
    <section className="p-4 relative lg:mt-20" id="contact">
      <div className="h-full">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* contact form start */}
          <div className="space-y-4 xl:max-w-4xl w-full">
            <h1 className="text-port-black text-3xl font-inter font-bold capitalize">
              Send me a Message
            </h1>
            <form action="" className="rounded-lg bg-white p-8 border space-y-5">
              <div className="space-y-2">
                <label
                  htmlFor="full-name"
                  className="capitalize text-lg font-medium font-inter text-gray-500"
                >
                  your full name (required)
                </label>
                <input
                  type="text"
                  aria-label="full-name"
                  className="w-full block px-3 py-2.5 border border-gray-300 bg-[#F0F0F6] rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-sm font-normal font-inter text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="capitalize text-lg font-medium font-inter text-gray-500"
                >
                  your email (required)
                </label>
                <input
                  type="email"
                  aria-label="email"
                  className="w-full block px-3 py-2.5 border border-gray-300 bg-[#F0F0F6] rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-sm font-normal font-inter text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-lg font-medium font-inter text-gray-500">
                  Subject
                </label>
                <input
                  type="text"
                  aria-label="subject"
                  className="w-full block px-3 py-2.5 border border-gray-300 bg-[#F0F0F6] rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-sm font-normal font-inter text-gray-700"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="capitalize text-lg font-medium font-inter text-gray-500"
                >
                  your message
                </label>
                <textarea
                  rows={5}
                  aria-label="message"
                  className="w-full block px-3 py-2.5 border border-gray-300 bg-[#F0F0F6] rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-sm font-normal font-inter text-gray-700"
                ></textarea>
              </div>

              <button className="text-lg font-semibold font-inter text-gray-700 uppercase bg-port-yellow rounded-lg py-3 px-6">
                Send Message
              </button>
            </form>
          </div>
          {/* contact form ends */}

          {/* contact information start */}
          <div className="space-y-4 xl:max-w-md w-full">
            <h1 className="text-port-black text-3xl font-inter font-bold capitalize">
              Contact Information
            </h1>
            <div className="space-y-4">
              <div className="rounded-lg bg-white p-8 border space-y-4">
                <div className="flex items-center justify-center h-20 w-20 bg-port-yellow rounded-full mx-auto">
                  <FontAwesomeIcon icon={faFlag} className="text-gray-700 h-10 text-center" />
                </div>
                <p className="text-gray-500 font-inter flex justify-between items-center">
                  <span className="text-xl font-medium">Country :</span>
                  <span className="font-normal text-base">Nigeria</span>
                </p>

                <p className="text-gray-500 font-inter flex justify-between items-center">
                  <span className="text-xl font-medium">City :</span>
                  <span className="font-normal text-base">Ogbomoso</span>
                </p>

                <p className="text-gray-500 font-inter flex justify-between items-center">
                  <span className="text-xl font-medium">State:</span>
                  <span className="font-normal text-base">Oyo state, Nigeria</span>
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 border space-y-4">
                <div className="flex items-center justify-center h-20 w-20 bg-port-yellow rounded-full mx-auto">
                  <FontAwesomeIcon icon={faEnvelope} className="text-gray-700 h-10 text-center" />
                </div>
                <p className="text-gray-500 font-inter flex justify-between items-center">
                  <span className="text-xl font-medium">Email :</span>
                  <span className="font-normal text-base">
                    {truncate("opeyemiakanbi328@gmail.com", 13)}
                  </span>
                </p>

                <p className="text-gray-500 font-inter flex justify-between items-center">
                  <span className="text-xl font-medium">Github :</span>
                  <a href="https://github.com/springboot20">
                    {truncate("https://github.com/springboot20", 16)}
                  </a>
                </p>
              </div>

              <div className="rounded-lg bg-white p-8 border space-y-4">
                <div className="flex items-center justify-center h-20 w-20 bg-port-yellow rounded-full mx-auto">
                  <FontAwesomeIcon icon={faMobile} className="text-gray-700 h-10 text-center" />
                </div>
                <p className="text-gray-500 font-inter flex justify-between items-center">
                  <span className="text-xl font-medium">Personal :</span>
                  <span className="font-normal text-base">07086807968</span>
                </p>
              </div>
            </div>
          </div>
          {/* contact information start */}
        </div>
      </div>
    </section>
  );
};
