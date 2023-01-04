import React from "react";
import embedimage2 from "../images/embed-image2.jpg";
import fullserviceimg1 from "../images/full-service-img1.jpg";
import embedimage1 from "../images/embed-image1.jpg";

function FullService() {
  return (
    <>
      <section className="full-service-sec">
        <div className="full-serv-left-yellow"></div>
        <img
          className="emb-full-serv-image2"
          src={embedimage2}
          alt="embed-image2"
        />
        <img
          className="full-serv-img1"
          src={fullserviceimg1}
          alt="full-service-img1"
        />
        <img
          className="full-sev-emb1"
          src={embedimage1}
          alt="embed-image1"
        ></img>
        <div className="full-serv-cont">
          <h6>WHAT WE DO</h6>
          <h1 className="mt-4">
            Full service architecture design studio with offices in Brooklyn,
            New York and Richmond
          </h1>
          <p className="mt-3">
            Image from{" "}
            <a href="#" className="text-dark">
              Freepik
            </a>
          </p>
          <button className="cmn-btns">learn more</button>
        </div>
      </section>
    </>
  );
}

export default FullService;
