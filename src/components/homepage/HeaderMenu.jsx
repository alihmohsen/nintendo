import React, { useState ,useEffect , useRef} from "react";
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

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
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
        {/* <div className={` right-sidebar ${OpenLoginForm ? " open" : ""}`}>
          <div className="flex justify-between py-5 px-2">
            <h2 className="title ">Log in / Sign up</h2>
            <button className="close-button" onClick={closeRightForm}>
              <IoMdCloseCircle />
            </button>
          </div>
          <div className="login-form">
            <div className="flex mt-3  login-body">
              <div className="bg-white rounded-2xl flex flex-col justify-center py-4 px-8">
                <div>
                  <img
                    src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_300/Dev/Global%20Navigation/unauthd-asset.png"
                    alt=""
                  />
                </div>
                <div className="flex flex-col details px-2">
                  <h2>With a free account, you can</h2>
                  <div className="flex flex-row py-1 items-center">
                    <FaCheck />
                    <span>Shop online</span>
                  </div>
                  <div className="flex flex-row py-1 items-center">
                    <FaCheck />
                    <span>Earn My Nintendo points</span>
                  </div>
                  <div className="flex flex-row py-1 items-center">
                    <FaCheck />
                    <span>Save a Wish List</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4  text-center mt-5">
              <Link className="btn-primary w-full "> Login</Link>
              <Link className="btn-secondary  w-full "> Sign up</Link>
            </div>
          
            <Link>
              <div className="items-center  flex p-4 bg-white   mt-3 order-status-row">
              
                <div className=" flex items-center ml-2">
                <FaReceipt  className="primary-icon-color" />
                </div>
                <div className=" grid grid-cols-1 items-center  w-full ml-2">
                  <span className="col-span-1 ">Order status</span>
                </div>

              </div>
            </Link>
          
            <div className=" bg-white  mt-6 list-login-form">
            <Link>
              <div className="items-center  flex p-4 ">
                <div className=" flex items-center ml-2">
              <span >
                  <svg className="primary-icon-color" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="16" role="presentation" alt="" data-testid="MyNintendoTileIcon" size="16" color="currentColor">
                        <path d="M26.667 0H5.333A5.333 5.333 0 0 0 0 5.333v21.334A5.333 5.333 0 0 0 5.333 32h21.334A5.333 5.333 0 0 0 32 26.667V5.333A5.333 5.333 0 0 0 26.667 0zm-5.105 22.423a5.212 5.212 0 0 1-2.37-.602 10.482 10.482 0 0 1-13.67-1.608.803.803 0 0 1 1.228-1.036 8.866 8.866 0 0 0 11.914 1.04.803.803 0 0 1 .986-.005 3.461 3.461 0 0 0 5.41-2.888 3.495 3.495 0 0 0-3.39-3.416c-.016 0-.036 0-.063-.002a.962.962 0 0 0-.12.003.806.806 0 0 1-.778-.455 6.54 6.54 0 0 0-5.992-3.848c-2.82 0-5.738 1.802-5.738 4.819-.003.818.35 1.596.969 2.132l1.688-3.147a.803.803 0 0 1 1.423.015l.982 1.926.983-1.926a.8.8 0 0 1 .71-.438c.3 0 .574.164.716.428l2.076 3.933a.8.8 0 0 1-.03.804.802.802 0 0 1-1.391-.054l-1.353-2.564-.995 1.95a.803.803 0 0 1-1.431-.001l-1-1.96-1.384 2.58a.805.805 0 0 1-1.046.349 4.563 4.563 0 0 1-2.524-4.027C7.372 10.403 11.107 8 14.717 8a8.081 8.081 0 0 1 7.209 4.308 5.063 5.063 0 0 1-.363 10.115z" fill="currentColor" fillRule="evenodd"></path>
                      </svg>
              </span>
                </div>
                <div className=" grid grid-cols-3 items-center  w-full ml-2">
                  <span className="col-span-2 ">My Nintendo</span>
                  <span className="col-span-1 flex justify-end mr-5">  <FaArrowUpRightFromSquare /></span>
                </div>
              </div>
              </Link>
              <Link>
                <div className="items-center  flex p-4 border-top">
                  <div className=" flex items-center ml-2">
                  <TbGiftCardFilled className="primary-icon-color" />
                  </div>
                  <div className=" grid grid-cols-3 items-center  w-full ml-2">
                    <span className="col-span-2 ">My Nintendo</span>
                    <span className="col-span-1 flex justify-end mr-5">  <FaArrowUpRightFromSquare /></span>
                  </div>
                </div>
              </Link>
              <Link>
                <div className="items-center  flex p-4 border-top">
                  <div className=" flex items-center ml-2">
                    <IoMdSettings className="primary-icon-color" />
                  </div>
                  <div className=" grid grid-cols-3 items-center  w-full ml-2">
                    <span className="col-span-2 ">My Nintendo</span>
                    <span className="col-span-1 flex justify-end mr-5">  <FaArrowUpRightFromSquare /></span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div> */}
        <RightSidebar   onClose={closeRightForm}  OpenLoginForm={OpenLoginForm}  />
    </div>
    <div  className={`hidden lg:block  ${OpenLoginForm ? 'overlay open' : ''}`}></div>
    </>
  );
};

export default HeaderMenu;
