import React from "react";
import glaryimage1 from "../images/glary-image1.jpg";
import glaryimage2 from "../images/glary-image2.jpg";
import glaryimage3 from "../images/glary-image3.jpg";

//import Image from "react-bootstrap/Image";

function PhotoGalaryWhatWeDo() {
  return (
    <>
      <section className="photo-galary-what-we-do">
        <div className="yellow-right"></div>
        <img src={glaryimage1} className="glary-image1" alt="glary-image1" />
        <img src={glaryimage2} className="glary-image2" alt="glary-image2" />
        <img src={glaryimage3} className="glary-image3" alt="glary-image3" />
        <div className="what-we-do">
          <h6 className="cmn-what-text">WHAT WE DO</h6>
          <h1 className="cmn-what-text">
            Integrated design practice of architecture, landscape, interiors
          </h1>
          <p className="mt-3">
            Image from <a href="">Freepik</a>
          </p>
          <button className="cmn-btns">learn more</button>
        </div>
      </section>
    </>
  );
}

export default PhotoGalaryWhatWeDo;
