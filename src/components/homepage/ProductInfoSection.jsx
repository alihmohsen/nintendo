import React from "react";
import { Link } from "react-router-dom";
import EsrbSection from "../common/EsrbSection";
import { PiTelevision } from "react-icons/pi";
import { GiTabletopPlayers } from "react-icons/gi";
import { MdOutlineVideogameAsset } from "react-icons/md";
import data from "../../views/Data";

const ProductInfoSection = () => {
  return (
    <>
      <section className="container-section product-info-section">
        <div className="grid grid-cols-2  gap-4">
          <div className="col-span-2 md:col-span-1 px-4 flex justify-center items-center flex-col card-info rounded-2xl">
            <div className="mb-3">
              <span className="title font-semibold">ESRB rating</span>
            </div>
            <div className=" bg-white shadow p-4  rounded-2xl mb-10 px-7">
              <EsrbSection />
            </div>
          </div>
          <div className="col-span-2  md:col-span-1 card-info rounded-2xl">
            <div className="mb-4 flex justify-center items-center">
              <span className="title font-semibold">Supported play modes</span>
            </div>
            <div className="grid grid-cols-3  gap-6 right-image">
              <div className="col-span-1   flex flex-col  items-center ">
                <div className="card-icon flex justify-center">
                  <PiTelevision />
                </div>
                <span>TV</span>
              </div>
              <div className="col-span-1  flex flex-col  items-center">
                <div className="card-icon flex justify-center">
                  <GiTabletopPlayers />
                </div>
                <span>Tabletop</span>
              </div>
              <div className="col-span-1 flex flex-col  items-center">
                <div className="card-icon flex justify-center">
                  <MdOutlineVideogameAsset />
                </div>
                <span>Handheld</span>
              </div>
            </div>
          </div>
        </div>
        <div className="box-info mt-10">
          {data.product_info.map((info, index) => (
            <div key={index} className="row-info   items-center  flex py-4">
              <div
                className="icon-box flex items-center ml-2"
                dangerouslySetInnerHTML={{ __html: info.icon }}
              >
                {/* <BsPeople className="ml-2" /> */}
              </div>
              <div className=" grid grid-cols-3 items-center  w-full ml-5">
                <span className="col-span-3 md:col-span-1 title">
                  {info.title}
                </span>
                {info.links ? (
                  <div className="col-span-3 md:col-span-2">
                    {info.links.map((link, indexLink) => (
                      <Link to={link.path} key={indexLink}>
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <span className="col-span-3 md:col-span-2">
                    {info.description}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductInfoSection;
