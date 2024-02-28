import React, { useState, useEffect, useRef } from "react";
import HeaderMenu from "./HeaderMenu";
import NavMenu from "./NavMenu";
import ServicesNavbar from "./ServicesNav";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { FaChevronDown } from "react-icons/fa";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
  const [activeInputSearch, setActiveInputSearch] = useState(false);
  const [activeListCategories, setActiveListCategories] = useState(false);

  const titles = {
    trendingTopicsText: "Trending topics",
    TopStoreText: "Top store products",
  };
  const [selectedFilter, setSelectedFilter] = useState("All categories");
  const filters = ["All categories", "Popular", "Recent", "Favorites"];
  const TrendingTopics = [
    {
      title: "Nintendo Switch™ - OLED Model: Mario Red Edition",
      path: "/",
    },
    {
      title: "Nintendo Switch",
      path: "/",
    },
    {
      title: "Super Mario Bros. Wonder",
      path: "/",
    },
    {
      title: "Nintendo Switch games",
      path: "/",
    },
    {
      title: "Zelda games",
      path: "/",
    },
  ];
  const StoreProducts = [
    {
      description: "Nintendo Switch™ - OLED Model: Mario Red Edition",
      path: "/",
      name: "Hardware",
      isFavorite: false,
      colorBar: "secondary",
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/My%20Nintendo%20Store/EN-US/Hardware/nintendo-switch-oled-model-mario-red-edition-112872/112872-nintendo-switch-oled-model-mario-red-edition-package-1200x675",
    },
    {
      description: "Nintendo Switch",
      path: "/",
      name: "Nintendo Switch",
      isFavorite: true,
      colorBar: "primary",
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/software/switch/70010000068688/87e8aa5f1fdc950b88eae7d7c62ed185c8a6373c845090bbdb2e2cf039b38da1",
    },
    {
      description: "Super Mario Bros. Wonder",
      path: "/",
      name: "Nintendo Switch",
      isFavorite: false,
      colorBar: "primary",
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/software/switch/70010000068683/fe4afe940b0e707798332e86f0af56cdbde48da59dc37cdfb8d59febb88ac72a",
    },
    {
      description: "Nintendo Switch games",
      path: "/",
      name: "Nintendo Switch",
      isFavorite: false,
      colorBar: "primary",
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.0/c_scale,w_200/ncom/software/switch/70010000068678/5b072b55e8a6993071b4cde9f74d9cf7aeac0b52141177efed6c8ce9b580a435",
    },
  ];

  const navbarRef = useRef(null);
  const megaMenuRef = useRef(null);
  useEffect(() => {
    const handleOutsideClickSearchBar = (event) => {
      if (
        navbarRef.current &&
        !navbarRef.current.contains(event.target) &&
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target)
      ) {
        setActiveInputSearch(false);
      }
    };

    document.addEventListener("click", handleOutsideClickSearchBar);

    return () => {
      document.removeEventListener("click", handleOutsideClickSearchBar);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setActiveListCategories(false); // Reset rotation when clicking outside the SVG
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []); // Empty dependency array to ensure the effect only runs once

  const handleSvgClick = (e) => {
    e.stopPropagation(); // Prevent body click event from firing when clicking on SVG
    setActiveListCategories(!activeListCategories);
  };

  return (
    <>
      <header className="bg-white header" ref={navbarRef}>
        <div className="pr-7 hidden  lg:block">
          <div className="flex items-center justify-between border-bottom">
            <div className="flex items-center flex-grow  min-w-0">
              <Link
                className="text-white font-semibold text-lg logo-box flex-shrink-0"
                to="/"
              >
                <svg
                  viewBox="0 0 97 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="69"
                  role="presentation"
                  alt=""
                  data-testid="NintendoRacetrackLogoIcon"
                  size="69"
                  color="currentColor"
                >
                  <path
                    d="M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z"
                    fill="currentColor"
                  ></path>
                </svg>
              </Link>

              <div className="flex-grow">
                <form
                  action=""
                  className={`search-form mx-2 flex  ${
                    activeInputSearch ? "active" : ""
                  } `}
                >
                  <div className="search-box">
                    <IoMdSearch onClick={() => setActiveInputSearch(true)} />
                    <input
                      onFocus={() => setActiveInputSearch(true)}
                      type="text"
                      className="border border-gray-300 rounded-md p-2 w-64"
                      placeholder="Search games, hardware, news, etc"
                    />
                  </div>
                  <div
                    className={`relative category-box grid  items-center ${
                      activeListCategories ? "color-primary" : ""
                    }`}
                    onClick={handleSvgClick}
                  >
                    <div className="flex justify-around items-center ">
                      <span className="mr-2">{selectedFilter}</span>
                      <FaChevronDown
                        className={`arrow transform transition-transform duration-300  ${
                          activeListCategories ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                    {activeListCategories && (
                      <div className={`absolute category-list  `}>
                        <ul>
                          {filters.map((filter, index) => (
                            <li
                              key={index}
                              onClick={() => setSelectedFilter(filter)}
                            >
                              <span>{filter}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <div className="md:hidden">
              {/* Hamburger menu icon for mobile */}
              <button className="text-white">
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
            {activeInputSearch ? null : <HeaderMenu />}
            {activeInputSearch && (
              <div>
                <button onClick={() => setActiveInputSearch(false)}>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    role="presentation"
                    alt=""
                    data-testid="CloseCircleIcon"
                    size="24"
                    color="currentColor"
                  >
                    <path
                      d="M16 0c8.837 0 16 7.163 16 16s-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0zm5.735 8L16 13.735 10.265 8 8 10.265 13.735 16 8 21.735 10.265 24 16 18.265 21.735 24 24 21.735 18.265 16 24 10.265 21.735 8z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="lg:hidden bg-primary-color">
          <Link className="text-white font-semibold text-lg logo-box " to="/">
            <svg
              viewBox="0 0 97 24"
              xmlns="http://www.w3.org/2000/svg"
              width="69"
              role="presentation"
              alt=""
              data-testid="NintendoRacetrackLogoIcon"
              size="69"
              color="currentColor"
            >
              <path
                d="M17.945 14.157l-4.85-7.838H9.609V17.59h3.486V9.752l4.85 7.838h3.456V6.32h-3.486l.03 7.837zm27.554-4.04V8.993H43.68v-1.52h-3.395v1.52h-1.849v1.124h1.85v7.473h3.394v-7.473h1.82zM23.341 17.56h3.364v-7.474h-3.364v7.474zm0-8.932h3.395V6.319H23.34v2.309zm59.17.942c-2.728 0-4.941 1.883-4.941 4.192s2.213 4.193 4.94 4.193c2.729 0 4.942-1.884 4.942-4.193 0-2.309-2.213-4.192-4.941-4.192zm1.364 5.772c0 1.185-.698 1.67-1.364 1.67-.667 0-1.395-.485-1.395-1.67v-3.16c0-1.184.697-1.67 1.395-1.67.666 0 1.364.486 1.364 1.67v3.16zm-10.73-4.891c-.547-.304-1.123-.608-1.91-.669-2.426-.212-4.305 1.945-4.305 3.92 0 2.612 2 3.554 2.304 3.706 1.152.516 2.607.547 3.88-.274v.426h3.334V6.32h-3.334c.03 0 .03 2.4.03 4.13zm.03 3.342v1.336c0 1.155-.789 1.458-1.334 1.458-.546 0-1.334-.303-1.334-1.458v-2.673c0-1.155.788-1.458 1.334-1.458.515 0 1.333.303 1.333 1.458v1.337zM34.616 9.752c-1.122.03-2.031.516-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.607-1.367.909 0 1.546.73 1.546 1.367v4.922h3.364v-4.071c0-2.947-2.546-3.798-3.82-3.737zm27.433 0a4.075 4.075 0 0 0-2.698 1.124v-.79h-3.365v7.474h3.365v-4.922c0-.638.697-1.367 1.606-1.367.91 0 1.546.73 1.546 1.367v4.922h3.365v-4.071c0-2.947-2.546-3.798-3.82-3.737zm-7.063 4.101c0-2.309-2.243-4.253-4.971-4.253-2.759 0-4.972 1.884-4.972 4.193 0 2.308 2.213 4.192 4.972 4.192 2.273 0 4.213-1.306 4.789-3.068H51.44v.455c0 1.367-.91 1.671-1.394 1.671-.515 0-1.425-.304-1.425-1.67v-1.55l6.366.03zm-6.123-2.643a1.391 1.391 0 0 1 1.182-.668c.455 0 .91.213 1.182.668.212.365.212.82.212 1.458H48.62c0-.637.03-1.063.243-1.458zm39.921-3.493c0-.365-.272-.547-.818-.547h-.758v1.914h.455v-.79h.242l.364.79h.515l-.424-.851c.273-.091.424-.273.424-.516zm-.879.273h-.242v-.547h.212c.273 0 .424.091.424.274 0 .212-.12.273-.394.273zm.03-1.58c-.94 0-1.727.79-1.727 1.732s.788 1.732 1.728 1.732 1.727-.79 1.727-1.732a1.73 1.73 0 0 0-1.727-1.732zm0 3.13a1.413 1.413 0 0 1-1.394-1.398c0-.76.637-1.398 1.395-1.398.757 0 1.394.638 1.394 1.398 0 .76-.637 1.397-1.394 1.397zM84.148 0H12.64C5.062-.03 0 5.438 0 11.97c0 6.53 5.062 11.939 12.67 11.939h71.508c7.608 0 12.67-5.408 12.67-11.94C96.818 5.44 91.726 0 84.148 0zm-.03 20.993H12.671c-6.033.03-9.7-4.041-9.7-9.023 0-4.983 3.698-8.993 9.7-9.023h71.446c6.002 0 9.7 4.04 9.7 9.023 0 4.982-3.668 9.023-9.7 9.023z"
                fill="currentColor"
              ></path>
            </svg>
          </Link>
        </div>
      </header>
      <NavMenu />
      <ServicesNavbar />
      <div
        ref={megaMenuRef}
        className={` mega-box bg-white hidden  lg:block ${
          activeInputSearch ? "open" : ""
        }`}
      >
        <div className="flex flex-wrap">
          <div className={` xl:w-1/3 ${activeInputSearch ? "open" : "closed"}`}>
            <h2 className="mb-2">{titles.trendingTopicsText}</h2>
            <div className="flex flex-col topic-box">
              {TrendingTopics.map((topic, index) => (
                <Link key={index} to={topic.path}>
                  {topic.title}
                </Link>
              ))}
            </div>
          </div>
          <div
            className={` xl:w-2/3 top-products-box ${
              activeInputSearch ? "open" : "closed"
            }`}
          >
            <h2 className="mb-2">{titles.TopStoreText}</h2>
            <div className="flex flex-wrap gap-4">
              {StoreProducts.map((product, index) => (
                <div key={index} className=" relative">
                  <Link to={product.path} className=" flex flex-row  ">
                    <div className="flex  flex-row relative w-full">
                      <img
                        className=" inline mr-2"
                        src={product.image}
                        alt={product.name}
                      />
                      <div className="bg-black opacity-0 pointer-events-none absolute overlay-image"></div>
                      <div className="flex justify-around flex-col w-full">
                        <h2 className="w-full">{product.description}</h2>
                        <div className="flex  items-center ">
                          <div
                            className={`bar-div ${
                              product.colorBar + "-bg-color"
                            }`}
                          ></div>
                          <span>{product.name}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                  <button className=" absolute">
                    <svg
                      viewBox="0 0 54 54"
                      fill="currentColor"
                      stroke="currentColor"
                      width="24"
                      role="presentation"
                      alt=""
                      data-testid="heartspark"
                      color="currentColor"
                      size="24"
                    >
                      <g className="hearts">
                        <path
                          className="heart heart-outline"
                          d="M27 38.9c-.4 0-.6-.1-.8-.4L16.7 29c-1.8-1.8-2.7-3.8-2.7-6 0-4.4 3.5-8 7.9-8 1.9 0 3.7.8 5.1 2.3 1.4-1.4 3.2-2.3 5.1-2.3 4.4 0 7.9 3.6 7.9 8 0 2.6-1.5 4.6-2.7 6.1l-9.5 9.4c-.2.3-.6.4-.8.4zm-5.1-21.4c-3.1 0-5.6 2.5-5.6 5.6 0 1.9 1.1 3.3 2 4.3l8.6 8.7 8.5-8.6c1.4-1.5 2.1-3 2.1-4.4 0-3.1-2.5-5.6-5.6-5.6-1.5 0-3 1-4.1 2.5-.5.6-1.4.6-1.9 0-1-1.6-2.4-2.5-4-2.5z"
                        ></path>
                        <path
                          className="heart heart-filled"
                          d="M32.1 15.1c-1.9 0-3.7.8-5.1 2.3-1.4-1.4-3.2-2.3-5.1-2.3-4.4 0-7.9 3.6-7.9 8 0 2.1.9 4.2 2.7 6l9.5 9.5c.2.2.5.4.8.4.2 0 .6-.1.8-.4l9.5-9.4c1.2-1.4 2.7-3.5 2.7-6.1 0-4.4-3.5-8-7.9-8z"
                        ></path>
                      </g>
                      <g className="sparks">
                        <path
                          className="spark"
                          d="M27 8V0M27 46v8"
                          strokeWidth="2"
                        ></path>
                        <path
                          className="spark"
                          d="M41.171 12.828l5.657-5.657M12.829 12.828L7.171 7.172"
                          strokeWidth="1.99998"
                        ></path>
                        <path
                          className="spark"
                          d="M46 27h8M8 27H0"
                          strokeWidth="2"
                        ></path>
                        <path
                          className="spark"
                          d="M41.172 41.172l5.657 5.656M12.829 41.171l-5.657 5.657"
                          strokeWidth="1.99998"
                        ></path>
                      </g>
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div></div>
      </div>

      <div
        className={`hidden lg:block  ${
          activeInputSearch ? "overlay open" : ""
        }`}
      ></div>
      <MobileNavbar />
    </>
  );
};

export default Header;
