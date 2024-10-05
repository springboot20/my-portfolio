import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { scrollReveal } from "../utils/scrollreveal.config";

export const Recommendation = () => {
  useEffect(() => {
    scrollReveal.reveal("#developer-recommendation-rating", {});
    scrollReveal.reveal("#developer-recommendation-title", {});
    scrollReveal.reveal("#developer-recommendation-info", { delay: 250 });
    scrollReveal.reveal("#developer-recommendation-profile", { interval: 300 });
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

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <div className="card">
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
          </div>
          <div className="card">
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
          </div>

          <div className="card">
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
          </div>
        </div>
      </div>
    </section>
  );
};
