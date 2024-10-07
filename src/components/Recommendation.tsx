import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

  const cardItemVariants = {
    initial: {
      opacity: 0,
      y: 100,
    },

    final: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    if (inView) {
      control.start("final");
    } else {
      control.start("initial");
    }
  });

  return (
    <section className="p-4" id="recommendation">
      <div className="mx-auto max-w-8xl">
        <header className="text-center space-y-4 max-w-2xl mx-auto">
          <h1 className="text-port-black text-3xl font-inter font-bold capitalize">
            recommendations
          </h1>
          <p className="text-base font-normal text-port-gray">
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
            variants={cardItemVariants}
            className="card"
          >
            <div className="ratings" id="developer-recommendation-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
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
            variants={cardItemVariants}
            className="card"
          >
            <div className="ratings" id="developer-recommendation-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
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
            variants={cardItemVariants}
            className="card"
          >
            <div className="ratings" id="developer-recommendation-rating">
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
              <FontAwesomeIcon icon={faStar} className="icon" />
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
