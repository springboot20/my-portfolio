import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { scrollReveal } from "../utils/scrollreveal.config";

export const Recommendation = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  const containerVariants = {
    final: {
      transition: {
        staggerChildren: 0.25,
      },
    },
  };

  const cardItemVariants = (delay: number) => {
    return {
      initial: {
        opacity: 0,
        y: 100,
      },

      final: {
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.5 + delay / 10,
        },
      },
    };
  };

  const stars = (delay: number) => {
    return {
      initial: {
        x: -100,
        y: 100,
        opacity: 0,
      },

      final: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
          delay: 0.1 + delay / 2,
        },
      },
    };
  };

  useEffect(() => {
    if (inView) {
      control.start("final");
    } else {
      control.start("initial");
    }
  });

  useEffect(() => {
    scrollReveal.reveal("#recommendation-title", { origin: "bottom" });
    scrollReveal.reveal("#recommendation-description", { origin: "bottom", delay: 400 });
  }, []);

  return (
    <section className="p-4 lg:h-[70vh]" id="recommendation">
      <div className="h-full flex justify-center items-center flex-col sm:h-auto">
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <h1
            id="recommendation-title"
            className="text-port-black text-3xl font-inter font-bold capitalize"
          >
            recommendations
          </h1>
          <p id="recommendation-description" className="text-base font-normal text-port-gray">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero quae, rem laboriosam
            eligendi sequi quaerat quia assumenda commodi sit modi unde, numquam est temporibus
          </p>
        </header>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="initial"
          animate={control}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        >
          <motion.div
            ref={ref}
            animate={control}
            initial="initial"
            variants={{ ...cardItemVariants(1) }}
            className="card"
          >
            <motion.div className="ratings" id="developer-recommendation-rating">
              {Array(5)
                .fill("-")
                .map((_, i) => (
                  <motion.span
                    key={i}
                    ref={ref}
                    animate={control}
                    initial="initial"
                    variants={{ ...stars(i) }}
                  >
                    <FontAwesomeIcon icon={faStar} className="icon" />
                  </motion.span>
                ))}
            </motion.div>
            <div className="card-body">
              <h3 className="card-title" id="developer-recommendation-title">
                great quality
              </h3>
              <p className="card-description" id="developer-recommendation-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci sed
                perspiciatis, libero inventore enim veritatis suscipit magni laudantium modi.
              </p>
            </div>

            <div className="recommender-profile" id="developer-recommendation-profile">
              <div className="recommender-avatar"></div>
              <div className="capitalize -space-y-1">
                <p className="text-lg font-inter font-medium">adewole ridwan</p>
                <p className="text-base font-inter text-port-gray font-normal">
                  front-end developer
                </p>
              </div>
            </div>
          </motion.div>
          <motion.div
            ref={ref}
            animate={control}
            initial="initial"
            variants={{ ...cardItemVariants(2) }}
            className="card"
          >
            <div className="ratings" id="developer-recommendation-rating">
              {Array(5)
                .fill("-")
                .map((_, i) => (
                  <motion.span
                    key={i}
                    ref={ref}
                    animate={control}
                    initial="initial"
                    variants={{ ...stars(i) }}
                  >
                    <FontAwesomeIcon icon={faStar} className="icon" />
                  </motion.span>
                ))}
            </div>
            <div className="card-body">
              <h3 className="card-title" id="developer-recommendation-title">
                great quality
              </h3>
              <p className="card-description" id="developer-recommendation-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci sed
                perspiciatis, libero inventore enim veritatis suscipit magni laudantium modi.
              </p>
            </div>

            <div className="recommender-profile" id="developer-recommendation-profile">
              <div className="recommender-avatar"></div>
              <div className="capitalize -space-y-1">
                <p className="text-lg font-inter font-medium">adewole ridwan</p>
                <p className="text-base font-inter text-port-gray font-normal">
                  front-end developer
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            ref={ref}
            animate={control}
            initial="initial"
            variants={{ ...cardItemVariants(3) }}
            className="card"
          >
            <div className="ratings" id="developer-recommendation-rating">
              {Array(5)
                .fill("-")
                .map((_, i) => (
                  <motion.span
                    key={i}
                    ref={ref}
                    animate={control}
                    initial="initial"
                    variants={{ ...stars(i) }}
                  >
                    <FontAwesomeIcon icon={faStar} className="icon" />
                  </motion.span>
                ))}
            </div>
            <div className="card-body">
              <h3 className="card-title" id="developer-recommendation-title">
                great quality
              </h3>
              <p className="card-description" id="developer-recommendation-info">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci sed
                perspiciatis, libero inventore enim veritatis suscipit magni laudantium modi.
              </p>
            </div>

            <div className="recommender-profile" id="developer-recommendation-profile">
              <div className="recommender-avatar"></div>
              <div className="capitalize -space-y-1">
                <p className="text-lg font-inter font-medium">adewole ridwan</p>
                <p className="text-base font-inter text-port-gray font-normal">
                  front-end developer
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
