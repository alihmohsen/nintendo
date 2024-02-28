import React from "react";
import { Link } from "react-router-dom";
import Content from "../common/ReadMore";
const ReadMoreSection = () => {
  return (
    <>
      <section className="read-more-section container-section">
        <div className="grid grid-cols-2  gap-4">
          <div className="col-span-2 md:col-span-1 px-2 ">
            <h2 className="mb-3">You're moving to the valley...</h2>
            <div>
              <Content />
            </div>
            <div className="py-2">
              <span className="text-small">
                Software description provided by the publisher.
              </span>
            </div>
            <div className="my-4">
              <Link className="btn-primary hover-animation-primary">
                Explore this game's official website
              </Link>
            </div>
          </div>
          <div className="col-span-2  md:col-span-1">
            <div className="read-more-img-box">
              <img
                src={require("../../assets/images/banner-carousel/1.jpg")}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadMoreSection;
