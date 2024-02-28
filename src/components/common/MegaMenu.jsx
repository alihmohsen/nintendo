import React, { useEffect, useRef } from "react";
import { IoMdCloseCircle } from "react-icons/io";
const MegaMenu = ({ className = "", onClose, children, isOpenMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose(); // Call the onClose function to modify isOpenMenu in the parent component
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [onClose]); // Include onClose in the dependency array

  // Prevent event propagation
  const handleContentClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      <div
        ref={menuRef}
        className={`absolute mega-menu ${
          isOpenMenu ? "open" : ""
        } ${className}`}
        onClick={handleContentClick}
      >
        <button className="close-mega-box-button" onClick={onClose}>
          <IoMdCloseCircle />
        </button>
        <div className="menu-items">
          <div className="menu-content">{children}</div>
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
