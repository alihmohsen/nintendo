import React from "react";
import { IoMdCloseCircle } from "react-icons/io";

import LoginForm from "../common/LoginForm";

const RightSidebar = ({onClose , OpenLoginForm }) => {
  return (
    <>
      <div className={` right-sidebar ${OpenLoginForm ? " open" : ""}`} >
         <div className="flex justify-between py-5 px-2">
            <h2 className="title ">Log in / Sign up</h2>
            <button className="close-button" onClick={onClose}>
              <IoMdCloseCircle />
            </button>
          </div>
           <LoginForm onClose={onClose} />
        </div>
    </>
  );
};

export default RightSidebar;
