import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { HiOutlineDownload } from "react-icons/hi";

const StickyMenu = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 170);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed sticky-menu top-0 bg-white shadow-lg z-10 hidden  lg:block  ${
          isScrolled ? "open" : ""
        }`}
      >
        <div className="flex justify-center items-center h-full ">
          <div className=" flex justify-between  mx-10 px-4 sticky-box ">
            {/* Your menu content goes here */}
            <div className=" items-center flex  text-center">
              <h2>Stardew Valley</h2>
            </div>
            <div className=" items-center flex  text-center font-semibold">
              <div className="text-small ">Digital </div>
              <div className="m-2">$14.99</div>
              <Link
                className="flex justify-center w-full btn-download hover-animation-primary"
                to="/"
              >
                <HiOutlineDownload /> Direct Download
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StickyMenu;
