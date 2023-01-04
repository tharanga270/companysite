import React from "react";
import whobestimage from "../images/who-best-image.jpg";

function WhoAreTheBest() {
  return (
    <>
      <section className="who-are-the-best">
        <img src={whobestimage} className="who-best-image" alt="whoimage" />
        <div className="who-best-yellow-right"></div>
        <div className="who-are-the-best-cont">
          <h1 className="who-best-title">
            Who are the best 100 architecture firms in the world?
          </h1>
          <p className="who-best-p">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <p className="mb-0">Image from</p>
          <p className="pt-0 mt-0">
            <a href="" className="freepik">
              Freepik
            </a>
          </p>
          <button className="cmn-btns">read more</button>
        </div>
      </section>
    </>
  );
}

export default WhoAreTheBest;

/* <section class="who-are-the-best">
    <img class="who-best-image" src="images/who-best-image.jpg" alt="">
    <div class="who-best-yellow-right"></div>
    <div class="who-are-the-best-cont">
        <h1 class="who-best-title">Who are the best 100 architecture firms in the world?</h1>
        <p class="who-best-p">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.</p>
        <p class="mb-0">Image from</p>
        <p class="pt-0 mt-0"><a href="#" style="color: black;">Freepik</a></p>
        <button class="cmn-btns">read more</button>
    </div>
</section> */
