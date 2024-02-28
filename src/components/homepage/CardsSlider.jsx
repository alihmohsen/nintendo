import React from "react";
import Cards from "../common/Card";
import data from "../../views/Data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CardsSlider = () => {
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
          breakpoints={data.CardBreakpoints}
        >
          {data.CardsData.map((card, index) => (
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
