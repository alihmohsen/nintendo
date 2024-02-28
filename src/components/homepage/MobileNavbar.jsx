import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdFavorite } from "react-icons/md";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { IoMdSearch, IoMdCloseCircle } from "react-icons/io";
import { ImMenu } from "react-icons/im";
import LoginForm from "../common/LoginForm";
import MobileMenu from "./MobileMenu";
const MobileNavbar = ({ onClose }) => {
  const [OpenMenu, SetOpenMenu] = useState(false);
  const [OpenLoginForm, SetOpenLoginForm] = useState(false);
  const menuRef = useRef(null);

  const LoginFormClickToggle = (e) => {
    e.stopPropagation();
    SetOpenMenu(false);
    SetOpenLoginForm(!OpenLoginForm);
  };
  const MenuClickToggle = (e) => {
    e.stopPropagation();
    SetOpenLoginForm(false);
    SetOpenMenu(!OpenMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        SetOpenLoginForm(false);
        SetOpenMenu(false);
      }
    };
    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div ref={menuRef} className="fixed   lg:hidden  w-full mobile-nav">
        <div className="relative bg-white rounded-full  mx-auto  mobile-nav-menu">
          <div className="">
            <ul className="flex justify-between space-x-4 w-full">
              <li onClick={MenuClickToggle}>
                <Link to="/">
                  <div>{OpenMenu ? <IoMdCloseCircle /> : <ImMenu />}</div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <MdFavorite />
                  </div>
                </Link>
              </li>
              <li className="search-mobile-nav-icon rounded-full flex justify-center items-center">
                <Link to="/">
                  <div>
                    <IoMdSearch />
                  </div>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <div>
                    <FaShoppingCart />
                  </div>
                </Link>
              </li>
              <li onClick={LoginFormClickToggle}>
                <Link to="/">
                  <div>{OpenLoginForm ? <IoMdCloseCircle /> : <FaUser />}</div>
                </Link>
              </li>
            </ul>
          </div>
          <div className={`login-form-mobile ${OpenLoginForm ? "open" : ""}`}>
            <div className="flex justify-between text-center bg-white py-3 px-4">
              <h2 className="title flex-1 items-center">Log in / Sign up</h2>
              <button className="close-button" onClick={LoginFormClickToggle}>
                <IoMdCloseCircle />
              </button>
            </div>
            <div className="py-2">
              <LoginForm onClose={onClose} className="px-4" />
            </div>
          </div>
          <div className={`mobile-menu-box ${OpenMenu ? "open" : ""}`}>
            <div className="flex justify-between text-center bg-white py-3 px-4">
              <h2 className="title flex-1 items-center">Menu</h2>
              <button className="close-button " onClick={MenuClickToggle}>
                <IoMdCloseCircle />
              </button>
            </div>
            <div>
              <MobileMenu onClose={onClose} className="" />
            </div>
          </div>
        </div>
      </div>
      <div
        className={` lg:hidden  ${
          OpenLoginForm || OpenMenu ? "overlay open" : ""
        }`}
      ></div>
    </>
  );
};

export default MobileNavbar;
