import React from "react";
import commentimg from "../images/comment_image1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";

function Comment() {
  return (
    <>
      <section className="comment-sec">
        <div className="comment-left-yellow"></div>
        <img className="comment-imaga1" src={commentimg} alt="comment-imaga1" />
        <div className="comment-right-cont">
          <h1>
            We believe design should have a positive impact on people's lives
            and the environment.
          </h1>
          <p className="pt-3">
            Image from{" "}
            <a href="" className="text-dark">
              Freepik
            </a>
          </p>
          <button className="cmn-btns">learn more</button>
        </div>
        <div className="comment-div">
          <FontAwesomeIcon icon={faQuoteLeft} className="comment-quote" />
          <p className="comment-para">
            Success is not final; failure is not fatal: it is the courage to
            continue that counts
          </p>
          <div className="text-end">
            <p className="comment-wrote-by">&#8212; Winston Churchill</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Comment;
