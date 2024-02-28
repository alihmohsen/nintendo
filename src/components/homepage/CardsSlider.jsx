import React from "react";
import Cards from "../common/Card";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CardsSlider = () => {
  const CardsData = [
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: false,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: false,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/1.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: false,
      discounted_price: "$13.99",
      discount_percentage: "-30%",
      sale_duration: "12 hrs",
      is_favorite: false,
      free_demo: true,
      image: require("../../assets/images/banner-carousel/2.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: true,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: true,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/1.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: false,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: true,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/3.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: true,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: false,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/4.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: true,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: true,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/1.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: false,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: true,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/3.jpg"),
    },
    {
      name: "Potion Permit",
      date: "9/2/22",
      price: "$19.99",
      label: "Nintendo Switch",
      discount: true,
      discounted_price: "$13.99",
      discount_percentage: "-20%",
      sale_duration: "12 hrs",
      is_favorite: false,
      free_demo: false,
      image: require("../../assets/images/banner-carousel/4.jpg"),
    },
  ];
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1168: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  };
  return (
    <>
      <section className="card-slider container-section">
        <h2 className="title-section">More like this</h2>
        <Swiper
          className=""
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={4}
          navigation
          loop={true}
          breakpoints={breakpoints}
        >
          {CardsData.map((card, index) => (
            <SwiperSlide key={index} className="">
              
              <Cards card={card} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default CardsSlider;
