import { useEffect } from "react";
import { scrollReveal } from "../utils/scrollreveal.config";

export const Contact = () => {
  useEffect(() => {
    scrollReveal.reveal("#contact-title", { origin: "bottom" });
  }, []);
  return (
    <section className="p-4 relative lg:mt-20" id="contact">
      <div className="h-full">
        {/* contact form start */}
        <div className="space-y-4">
          <div className="max-w-2xl w-full mx-auto">
            <h1
              id="contact-title"
              className="text-center text-port-black text-3xl font-inter font-bold"
            >
              Send me a Message
            </h1>
          </div>
          <form
            action=""
            className="max-w-xl mx-auto xl:mx-0 rounded-lg bg-white p-8 border space-y-5"
          >
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
      </div>
    </section>
  );
};
