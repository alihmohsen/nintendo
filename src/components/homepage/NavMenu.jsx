import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MegaMenu from "../common/MegaMenu";
import {
  MdGames,
  MdOutlineStar,
  MdGamepad,
  MdCompareArrows,
  MdOnlinePrediction,
} from "react-icons/md";
import { BsNintendoSwitch } from "react-icons/bs";
import { HiNewspaper } from "react-icons/hi2";
import { FaTshirt, FaChevronDown, FaCalendarAlt } from "react-icons/fa";
import { IoLogoGameControllerB } from "react-icons/io";
import { GiCharacter, GiMegaphone } from "react-icons/gi";
import { AiFillTag } from "react-icons/ai";
import { RiParentFill } from "react-icons/ri";
import { FaFaceGrinWide, FaShop } from "react-icons/fa6";
import { LuGamepad } from "react-icons/lu";

const NavMenu = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuToggle = (e, menuId) => {
    e.stopPropagation();
    setActiveMenu((prevMenu) => (prevMenu === menuId ? null : menuId));
  };
  const handleCloseMegaMenu = () => {
    setActiveMenu(null);
  };
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".nav-menu")) {
        setActiveMenu(null);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className="hidden lg:block border-bottom ">
        <div className="hidden md:flex  justify-center flex-shrink-0 pt-3 pb-1  ">
          <ul className="flex space-x-4 nav-menu">
            <li
              className={` active ${activeMenu === "menu1" ? "open" : ""}`}
              onClick={(e) => handleMenuToggle(e, "menu1")}
            >
              <Link to="/">
                <span>
                  <svg
                    viewBox="0 0 32 32"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    role="presentation"
                    alt=""
                    data-testid="MyNintendoTileIcon"
                    size="16"
                    color="currentColor"
                  >
                    <path
                      d="M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z"
                      fill="currentColor"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </span>
                <span>My Nintendo Store</span>
                <span className="arrow-icon">
                  <FaChevronDown
                    className={`arrow transform transition-transform duration-300  `}
                  />
                </span>
              </Link>
              <MegaMenu
                className="white-close-btn"
                onClose={handleCloseMegaMenu}
                isOpenMenu={activeMenu === "menu1" ? true : false}
              >
                <div>
                  <div className="flex flex-row justify-center bg-primary-color text-white items-center py-5">
                    <span className="px-2">
                      <svg
                        viewBox="0 0 135 18"
                        xmlns="http://www.w3.org/2000/svg"
                        width="188"
                        role="presentation"
                        alt=""
                        data-testid="MyNintendoStoreLogoIcon"
                        size="188"
                        color="currentColor"
                      >
                        <path
                          d="M76.974 9.947c-.19-.58-.727-1.197-1.672-1.197-.67 0-1.337.342-1.632 1.197h3.304zm1.781.54c0 .641-.42.81-1.25.81h-3.862c.187.86.965 1.313 1.632 1.313.658 0 1.155-.24 1.561-.761l1.553.564c-.505 1.03-1.674 1.854-3.098 1.854-1.956 0-3.44-1.76-3.44-3.6 0-1.78 1.45-3.578 3.422-3.578 2.27 0 3.455 1.996 3.483 3.398zm4.316-3.397c-.713 0-1.35.298-1.738.784h-.02V7.3h-1.904v6.758h1.903v-3.29c0-1.314.692-1.88 1.477-1.88.545 0 1.375.357 1.375 1.686v3.48h1.903V10.43c0-2.273-1.52-3.339-2.996-3.339zM70.409 5.435H68.51v1.863h-1.27v1.593h1.27v5.165h1.9V8.891h1.286V7.298H70.41V5.435h-.001zm29.304 5.246c0-1.001-.773-1.816-1.724-1.816-.95 0-1.723.815-1.723 1.816 0 1.002.773 1.817 1.724 1.817.95 0 1.724-.815 1.724-1.817h-.001zm1.771-.002c0 1.978-1.564 3.588-3.494 3.588-1.931 0-3.494-1.61-3.494-3.588 0-1.98 1.563-3.59 3.494-3.59 1.93 0 3.494 1.612 3.494 3.59zm1.184 3.093l-.147-.518h-.267v.805h.183l-.006-.603.169.603h.132l.168-.603-.006.603h.183v-.805h-.268l-.141.518zM91.96 10.677c0-1.022-.736-1.83-1.732-1.83-.995 0-1.755.822-1.755 1.83s.76 1.829 1.755 1.829c.996 0 1.732-.808 1.732-1.829zm-.01-6.133h1.904v9.515H91.95v-.5h-.032c-.15.231-.854.708-1.753.708-1.877 0-3.458-1.617-3.458-3.59 0-1.973 1.58-3.588 3.458-3.588.9 0 1.602.474 1.753.705h.032v-3.25zM35.933 4.48c-.484 0-1.023.197-1.45 1.202-.292.69-2.296 5.375-2.296 5.375h-.038l-2.298-5.378c-.427-1.002-.994-1.198-1.45-1.198-.661 0-1.276.451-1.276 1.53v8.046h2.042V8.753h.04l1.903 4.464c.33.773.697.902 1.057.902.361 0 .729-.129 1.058-.902l1.903-4.464h.04v5.303h2.042V6.018c0-1.079-.56-1.54-1.277-1.54zm65.714 8.955h.153v.625h.2v-.625h.153v-.18h-.506v.18zm-59.967-1.95L40.086 7.29h-2.128l2.844 6.63c-.182.876-.727 1.218-1.488 1.218h-.279v1.687h.362c1.454 0 2.207-.269 2.66-1.412.112-.28 3.2-8.123 3.2-8.123h-2.143l-1.434 4.194zM17.73 5.156C16.182 2.24 13.406.515 10.203.515c-3.769 0-7.667 2.59-7.667 6.922 0 3.042 2.526 4.287 2.635 4.338a.825.825 0 0 0 1.091-.376l1.445-2.78 1.044 2.113c.144.29.431.472.747.472s.604-.182.747-.472l1.039-2.1 1.413 2.762a.826.826 0 0 0 1.132.362.88.88 0 0 0 .35-1.17l-2.166-4.237a.846.846 0 0 0-.749-.461.835.835 0 0 0-.74.472L9.498 8.435 8.473 6.36a.835.835 0 0 0-.739-.472.837.837 0 0 0-.748.456l-1.762 3.39C4.757 9.3 4.213 8.557 4.213 7.437c0-3.249 3.045-5.191 5.99-5.191 2.715 0 5.054 1.55 6.256 4.145.148.32.47.513.813.49.08-.005.11-.003.125-.003.028.002.049.002.066.002 2.086 0 3.54 1.94 3.54 3.68 0 2.11-1.605 3.763-3.652 3.763-.81 0-1.602-.338-1.998-.651a.815.815 0 0 0-1.028.005 9.116 9.116 0 0 1-5.639 1.965c-3.375 0-5.863-1.94-6.8-3.085a.82.82 0 0 0-1.182-.104.886.886 0 0 0-.1 1.219c.31.379 3.168 3.7 8.082 3.7 2.867 0 4.98-1.106 6.19-1.967a5.305 5.305 0 0 0 2.474.649c2.988 0 5.33-2.414 5.33-5.494 0-2.537-1.978-5.25-4.95-5.403zm39.372 8.902h1.903V7.297h-1.903v6.762zm6.802-6.969c-.713 0-1.35.298-1.738.784h-.02V7.3h-1.903v6.758h1.903v-3.29c0-1.314.69-1.88 1.476-1.88.545 0 1.375.357 1.375 1.686v3.48H66.9V10.43c0-2.273-1.521-3.339-2.997-3.339zm-5.85-2.972c-.615 0-1.112.514-1.112 1.147 0 .634.497 1.148 1.111 1.148s1.112-.514 1.112-1.148c0-.633-.498-1.147-1.112-1.147zm-4.332 6.308l-3.86-5.239c-.398-.54-.778-.706-1.086-.706-.727 0-1.11.453-1.11 1.101v8.474h2.043V8.173l3.86 5.24c.398.54.777.707 1.085.707.729 0 1.11-.453 1.11-1.102V4.545H53.72v5.882zm71.964-2.516h-.021v-.612h-1.902v6.758h1.902V11.01c0-1.28.667-2.01 1.694-2.01h.065V7.09c-.666 0-1.39.277-1.738.82zm-4.267 2.771c0-1.001-.773-1.815-1.724-1.815-.95 0-1.723.814-1.723 1.816 0 1 .773 1.815 1.724 1.815.95 0 1.723-.814 1.723-1.816zm1.77-.002c0 1.978-1.562 3.588-3.493 3.588-1.93 0-3.494-1.61-3.494-3.588 0-1.98 1.564-3.59 3.494-3.59 1.93 0 3.494 1.612 3.494 3.59zm-8.428-5.244h-1.898v1.863h-1.272v1.594h1.272v5.164h1.898V8.892h1.287V7.298h-1.287V5.435zm17.965 4.512c-.192-.579-.729-1.197-1.674-1.197-.669 0-1.324.342-1.62 1.197h3.294zm.53 1.35h-3.87c.235.871.987 1.311 1.639 1.311.66 0 1.156-.236 1.561-.76l1.556.565c-.506 1.028-1.675 1.854-3.1 1.854-1.955 0-3.441-1.76-3.441-3.6 0-1.78 1.452-3.578 3.422-3.578 2.272 0 3.457 1.995 3.485 3.398 0 .641-.42.81-1.252.81zm-21.82.08c0 1.374-1.178 2.962-3.155 2.962-1.562 0-2.744-.99-3.345-1.768l1.744-1.252c.474.495 1.071.866 1.651.866.51 0 .992-.331.992-.808 0-.674-.92-.933-1.922-1.324-1.7-.663-2.225-1.681-2.225-2.882 0-1.445 1.224-2.908 3.108-2.908 1.223 0 2.283.75 2.957 1.605l-1.609 1.162c-.506-.485-.943-.659-1.425-.659-.696 0-.98.433-.98.783 0 .732.972.95 1.927 1.322 1.93.748 2.284 1.858 2.284 2.9h-.001z"
                          fill="currentColor"
                          fillRule="nonzero"
                          mask="url(#b)"
                        ></path>
                      </svg>
                    </span>
                  </div>
                  <div className="curve-box"></div>
                  <div className="container m-auto flex justify-center pt-3 store-box">
                    <div>
                      <Link to="/">
                        <span>
                          <MdGames className="primary-icon-color" />
                        </span>
                        <span>Games</span>
                      </Link>
                      <div className="store-list">
                        <Link to="/">
                          <span>Nintendo Switch games</span>
                        </Link>
                        <Link to="/">
                          <span>New releases</span>
                        </Link>
                        <Link to="/">
                          <span>Sales & deals</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span>
                          <IoLogoGameControllerB className="primary-icon-color" />
                        </span>
                        <span>Hardware</span>
                      </Link>
                      <div className="store-list">
                        <Link to="/">
                          <span>Nintendo Switch games</span>
                        </Link>
                        <Link to="/">
                          <span>New releases</span>
                        </Link>
                        <Link to="/">
                          <span>Sales & deals</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span>
                          <FaTshirt className="primary-icon-color" />
                        </span>
                        <span> Merchandise</span>
                      </Link>
                      <div className="store-list">
                        <Link to="/">
                          <span>Nintendo Switch games</span>
                        </Link>
                        <Link to="/">
                          <span>New releases</span>
                        </Link>
                        <Link to="/">
                          <span>Sales & deals</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span>
                          <MdOutlineStar className="primary-icon-color" />
                        </span>
                        <span>Store exclusives</span>
                      </Link>
                      <div className="store-list">
                        <Link to="/">
                          <span>Nintendo Switch games</span>
                        </Link>
                        <Link to="/">
                          <span>New releases</span>
                        </Link>
                        <Link to="/">
                          <span>Sales & deals</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span>
                          <GiCharacter className="primary-icon-color" />
                        </span>
                        <span>Characters</span>
                      </Link>
                      <div className="store-list">
                        <Link to="/">
                          <span>Nintendo Switch games</span>
                        </Link>
                        <Link to="/">
                          <span>New releases</span>
                        </Link>
                        <Link to="/">
                          <span>Sales & deals</span>
                        </Link>
                      </div>
                    </div>
                    <div>
                      <Link to="/">
                        <span>
                          <AiFillTag className="primary-icon-color" />
                        </span>
                        <span>Sales & deals</span>
                      </Link>
                      <div className="store-list">
                        <Link to="/">
                          <span>Nintendo Switch games</span>
                        </Link>
                        <Link to="/">
                          <span>New releases</span>
                        </Link>
                        <Link to="/">
                          <span>Sales & deals</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-center my-4">
                    <button className="shop-all-btn hover-animation-secondary">
                      Shop all
                    </button>
                  </div>
                </div>
              </MegaMenu>
            </li>
            <li
              className={`  ${activeMenu === "menu2" ? "open" : ""}`}
              onClick={(e) => handleMenuToggle(e, "menu2")}
            >
              <Link to="/">
                <span>
                  <MdGames />
                </span>
                <span>Games</span>
                <span className="arrow-icon">
                  <FaChevronDown
                    className={`arrow transform transition-transform duration-300  `}
                  />
                </span>
              </Link>

              <MegaMenu
                onClose={handleCloseMegaMenu}
                isOpenMenu={activeMenu === "menu2" ? true : false}
                className="h-2"
              >
                <div className="card-info  items-center mx-auto mt-10">
                  <div className="flex justify-center   gap-10 right-image">
                    <div className=" box  flex flex-col   text-center ">
                      <div className="card-icon flex justify-center">
                        <BsNintendoSwitch />
                      </div>
                      <span>Nintendo Switch games</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <GiMegaphone />
                      </div>
                      <span>New releases</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <FaCalendarAlt />
                      </div>
                      <span>Coming soon</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <MdGamepad />
                      </div>
                      <span>Shop games</span>
                    </div>
                  </div>
                </div>
              </MegaMenu>
            </li>
            <li
              className={`  ${activeMenu === "menu3" ? "open" : ""}`}
              onClick={(e) => handleMenuToggle(e, "menu3")}
            >
              <Link to="/">
                <span>
                  <BsNintendoSwitch />
                </span>
                <span>Nintendo Switch</span>
                <span className="arrow-icon">
                  <FaChevronDown
                    className={`arrow transform transition-transform duration-300  `}
                  />
                </span>
              </Link>
              <MegaMenu
                onClose={handleCloseMegaMenu}
                isOpenMenu={activeMenu === "menu3" ? true : false}
                className="h-2"
              >
                <div className="card-info  items-center mx-auto mt-10">
                  <div className="flex justify-center   gap-10 right-image">
                    <div className=" box  flex flex-col   text-center ">
                      <div className="card-icon flex justify-center">
                        <MdGames />
                      </div>
                      <span>Nintendo Switch lineup</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <MdCompareArrows />
                      </div>
                      <span>Compare systems</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <MdOnlinePrediction />
                      </div>
                      <span>Online service</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <LuGamepad />
                      </div>
                      <span>Accessories</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <FaShop />
                      </div>
                      <span>Shop systems</span>
                    </div>
                  </div>
                </div>
              </MegaMenu>
            </li>
            <li>
              <Link to="/r">
                <span>
                  <HiNewspaper />
                </span>
                <span>News & Events</span>
              </Link>
            </li>
            <li
              className={`  ${activeMenu === "menu5" ? "open" : ""}`}
              onClick={(e) => handleMenuToggle(e, "menu5")}
            >
              <Link to="/">
                <span>
                  <MdOutlineStar />
                </span>
                <span>Play Nintendo</span>
                <span className="arrow-icon">
                  <FaChevronDown
                    className={`arrow transform transition-transform duration-300  `}
                  />
                </span>
              </Link>
              <MegaMenu
                onClose={handleCloseMegaMenu}
                isOpenMenu={activeMenu === "menu5" ? true : false}
                className="h-2"
              >
                <div className="card-info  items-center mx-auto mt-10">
                  <div className="flex justify-center   gap-10 right-image">
                    <div className=" box  flex flex-col   text-center ">
                      <div className="card-icon flex justify-center">
                        <FaFaceGrinWide />
                      </div>
                      <span>For kids</span>
                    </div>
                    <div className=" box flex flex-col   text-center">
                      <div className="card-icon flex justify-center">
                        <RiParentFill />
                      </div>
                      <span>For parents</span>
                    </div>
                  </div>
                </div>
              </MegaMenu>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`hidden lg:block  ${
          activeMenu ? "nav-overlay overlay open" : ""
        }`}
      ></div>
    </>
  );
};

export default NavMenu;
