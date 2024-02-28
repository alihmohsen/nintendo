import React from "react";
import { TERipple } from "tw-elements-react";
import { FaRegHeart } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
      <div className="card block rounded-2xl bg-white  dark:bg-neutral-700">
        <TERipple>
          <div className="relative overflow-visible bg-cover bg-no-repeat">
            <img
              className="rounded-t-2xl"
              src={props.card.image}
              alt={props.card.name}
            />
            <a href="#!">
              <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-visible  bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-'-20%'"></div>
            </a>
          </div>
        </TERipple>
        <div className="p-6 card-box flex flex-col">
          <h5 className="title mb-1 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {props.card.name}
          </h5>
          <h2 className="mb-8 date">{props.card.date}</h2>
          {props.card.discount ? (
            <div className="flex sale-box mb-2">
              
              <span>Sales ends: </span> <span>{props.card.sale_duration}</span>
            </div>
          ) : (
            ""
          )}
          {props.card.free_demo ? (
            <span className="free_demo">Free demo</span>
          ) : (
            ""
          )}
          <div className="mt-auto">
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {props.card.discount ? (
                <div>
                  <span className="discounted_price mr-1">
                    {props.card.discounted_price}
                  </span>
                  <del>
                    
                    <span className="price">{props.card.price}</span>
                  </del>
                  <span className="text-white primary-bg-color discount_percentage relative ml-2">
                    {props.card.discount_percentage}
                  </span>
                </div>
              ) : (
                <div>
                  <span className="ml-1">{props.card.price}</span>
                </div>
              )}
            </h5>

            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="bar-div primary-bg-color"></div>
                <h2>{props.card.label}</h2>
              </div>
              <div>
                {props.card.is_favorite ? (
                  <FaHeart className="primary-icon-color heart-animation" />
                ) : (
                  <FaRegHeart className="primary-icon-color  heart-animation" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
