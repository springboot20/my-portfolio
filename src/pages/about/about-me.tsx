import { SplittedAnimatedText } from "../../components/splitted-text/splitted-text";
import { motion } from "framer-motion";
import AboutImage from "../../assets/images/about-Image.png";
import { SkillCard } from "../../components/card/cards";

export default function AboutPageComponent() {
  return (
    <article className="w-full py-28">
      <div className="w-full">
        <header className="space-y-3">
          <h1 className="font-fira-code font-semibold text-3xl text-white">
            <span className="text-port-primary">/</span>about-me
          </h1>
          <p className="text-white font-fira-code font-normal text-lg">Who am i?</p>
        </header>

        <section className="py-10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="space-y-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold font-fira-code text-port-gray">
                {SplittedAnimatedText({
                  content: ["Hello, i'm Abbas!"],
                  type: "letter",
                })}
              </h3>

              <motion.div initial="hidden" animate="visible" className="overflow-hidden">
                <h1 className="text-xl text-white font-bold font-fira-code leading-normal cursor-hover">
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
            <div className="relative oveflow-hidden place-self-end">
              <div className="w-full flex items-center justify-center h-[30rem]">
                <img src={AboutImage} alt="about image" className="h-full w-[20rem]" />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="w-full space-y-10">
            <div className="flex items-center space-x-2 shrink-0 flex-1">
              <h2 className="text-white font-medium font-fira-code text-2xl">
                <span className="text-port-primary">#</span>skills
              </h2>
              <div className="h-0.5 w-1/2 bg-port-primary block" />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 flex-1 gap-2">
              {Array.from({ length: 5 }, (_, index) => {
                return <SkillCard key={index} />;
              })}
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
