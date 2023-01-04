import React from "react";
import embedimage1 from "../images/embed-image1.jpg";
import embedimage2 from "../images/embed-image2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
function EmbeddedArchitecture() {
  return (
    <>
      <section className="emb-arch-content">
        <img src={embedimage1} className="embed-image1" alt="embed-image1" />
        <img src={embedimage2} className="embed-image2" alt="embed-image2" />

        <div className="embed-yellow-cont">
          <div className="position-relative">
            <div className="embed-text-cont">
              <div>
                <FontAwesomeIcon icon={faBook} className="emb-icon" />
              </div>
              <h2 className="pt-4">We create embedded architecture</h2>
              <p className="emb-para1">
                Paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Curabitur id suscipit ex. Suspendisse rhoncus laoreet
                purus quis elementum. Phasellus sed efficitur dolor, et
                ultricies sapien.
              </p>
              <p>
                Images from{" "}
                <a href="#" className="text-dark">
                  Freepik
                </a>
              </p>
              <button className="cmn-btns">learn more</button>
            </div>
          </div>
        </div>
        <div className="embed-image3"></div>
      </section>
    </>
  );
}

export default EmbeddedArchitecture;
