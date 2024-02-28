import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdContactSupport, MdFavorite } from "react-icons/md";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import RightSidebar from "./RightSidebar";
const HeaderMenu = () => {
  const [OpenLoginForm, setOpenLoginForm] = useState(false);
  const formRef = useRef(null);

  const closeRightForm = (e) => {
    e.stopPropagation(); // Prevent body click event from firing when clicking on SVG
    setOpenLoginForm(false);
  };
  const openRightForm = (e) => {
    e.stopPropagation(); // Prevent body click event from firing when clicking on SVG
    setOpenLoginForm(true);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (formRef.current && !formRef.current.contains(event.target)) {
        setOpenLoginForm(false); // Call the onClose function to modify isOpenMenu in the parent component
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []); // Include onClose in the dependency array

  return (
    <>
      <div ref={formRef}>
        <div className="hidden md:flex md:items-center flex-shrink-0">
          {/* Links for medium and larger screens */}
          <ul className="flex space-x-4 nav-list">
            <li>
              <Link to="/">
                <span>
                  <MdContactSupport />
                </span>
                <span>Support</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <MdFavorite />
                </span>

                <span> Wish List</span>
              </Link>
            </li>
            <li>
              <Link to="/">
                <span>
                  <FaShoppingCart />
                </span>
                <span>Cart</span>
              </Link>
            </li>
            <li onClick={openRightForm}>
              <Link to="/">
                <span>
                  <FaUser />
                </span>
                <span> login / Sign up</span>
              </Link>
            </li>
            <li className="flex items-center">
              <Link to="/">
                <img
                  src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png"
                  alt="Flag of Usa"
                  loading="lazy"
                ></img>
              </Link>
            </li>
          </ul>
        </div>
        <RightSidebar onClose={closeRightForm} OpenLoginForm={OpenLoginForm} />
      </div>
      <div
        className={`hidden lg:block  ${OpenLoginForm ? "overlay open" : ""}`}
      ></div>
    </>
  );
};

export default HeaderMenu;
