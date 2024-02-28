import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer>
        <section className="footer-social-section primary-bg-color">
          <div className="md:flex justify-between items-center ">
            <div>
              <Link className="text-white  logo-footer" to="/">
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
            <div className="flex justify-between social-icons">
              <FaFacebook />
              <FaInstagram />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </div>
        </section>
        <section className=" py-5  px-5">
          <div className="grid gap-4  my-8  sm:grid-cols-2  md:grid-cols-4 xl:grid-cols-7  footer-list">
            <div>
              <h2>
                <Link to="/">About Nintendo</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/"> Careers</Link>
                </li>
                <li>
                  
                  <Link to="/">Corporate Social Responsibility</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to="/">Shop</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/"> Games </Link>
                </li>
                <li>
                  
                  <Link to="/">Hardware</Link>
                </li>
                <li>
                  
                  <Link to="/">Merchandise</Link>
                </li>
                <li>
                  
                  <Link to="/">Sales & deals</Link>
                </li>
                <li>
                  
                  <Link to="/">Exclusives</Link>
                </li>
                <li>
                  
                  <Link to="/">Online service</Link>
                </li>
                <li>
                  
                  <Link to="/">Nintendo NY store</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to="/">My Nintendo Store orders</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/"> Order details </Link>
                </li>
                <li>
                  
                  <Link to="/">Shipping info</Link>
                </li>
                <li>
                  
                  <Link to="/">Returns & exchanges</Link>
                </li>
                <li>
                  
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to="/">Support</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/"> Nintendo Switch </Link>
                </li>
                <li>
                  
                  <Link to="/">Nintendo Account</Link>
                </li>
                <li>
                  
                  <Link to="/">Other systems</Link>
                </li>
                <li>
                  
                  <Link to="/">Repairs</Link>
                </li>
                <li>
                  
                  <Link to="/">Nintendo product recycling</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to="/">Parents</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/">Info for parents</Link>
                </li>
                <li>
                  
                  <Link to="/">Parental controls</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to="/">Privacy</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/">Privacy policy</Link>
                </li>
                <li>
                  
                  <Link to="/">Cookies and interest-based ads</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2>
                <Link to="/">Community</Link>
              </h2>
              <ul>
                <li>
                  
                  <Link to="/"> Community guidelines </Link>
                </li>
                <li>
                  
                  <Link to="/">Online safety principles</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex   md:justify-end  privacy-img-box mr-6 mb-3">
            <Link to="/">
              
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </Link>
          </div>
        </section>
        <div className=" copy-right-section  ">
          <div className="grid grid-cols-6 gap-4  items-center text-white lg:ml-4">
            <p className="col-span-6 lg:col-span-3 justify-center flex text-center  lg:text-left">
              © Nintendo. Games are property of their respective owners.
              Nintendo of America Inc. Headquarters are in Redmond, Washington,
              USA
            </p>
            <div className="col-span-6 lg:col-span-2  flex justify-center font-bold">
              <ul className="flex flex-col sm:flex-row text-center">
                <li>
                  <Link to="/">Contact us</Link>
                </li>
                <li>
                  <Link to="/">Website feedback</Link>
                </li>
                <li>
                  <Link to="/">Terms of Use</Link>
                </li>
                <li>
                  <Link to="/">Documents & Policies</Link>
                </li>
              </ul>
            </div>
            <Link
              className="flex items-center justify-center col-span-6 lg:col-span-1"
              to="/"
            >
              <span className="px-2">
                <img
                  src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.png"
                  alt=""
                />
              </span>
              <span className="font-bold language-span">
                English (United States)
              </span>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
