import React from "react";
import { FaTruckArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { VscActivateBreakpoints } from "react-icons/vsc";
const ServicesNavbar = () => {


  return (
    <>
     <div className=' services border-bottom'>
          <div className="flex  justify-center flex-shrink-0 py-4 sm:py-0 ">
            <ul className="flex space-x-4 service-list">
              <li  className="hidden lg:block">
                <div className="flex service-box">
                  <span><FaTruckArrowRight className="primary-icon-color"/></span>
                  <span className=" font-bold">Free shipping</span>
                  <div >
                   <span>on orders $50 or more.</span>
                    <Link className="underline" to='/'>Restrictions apply. </Link>
                  </div>
                </div>
              </li>
              <li>
                <div className="flex service-box ">
                  <span><VscActivateBreakpoints  className="primary-icon-color"/></span>
                  <span className=" ">Earn </span>
                  <div>
                    <Link  className="underline font-bold" to='/'>My Nintendo Points  </Link>
                     <span>on digital games.</span>
                  </div>
                </div>
              </li>
              
            </ul>
          </div>
        </div>
    </>
  );
}

export default ServicesNavbar;