import React, { useState } from "react";
import Breadcrumb from "./Breadcrumb";
import EsrbSection from '../common/EsrbSection';
import { Link } from "react-router-dom";
import { HiOutlineDownload } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import {Thumbs ,Navigation} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Video from "yet-another-react-lightbox/plugins/video";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";


const CarouselBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const LightBoxSliders = [
    { src:require('../../assets/images/banner-carousel/1.jpg'), title: "Puppy in sunglasses", description: "Mollie Sivaram" },
    {
      src :require('../../assets/images/banner-carousel/2.jpg'),
      title: "Miami Beach",
      description:
        "Clark Van Der Beken\n\nSouth Beach, Miami Beach, Florida, United States",
    },
    {
      src : require('../../assets/images/banner-carousel/3.jpg'),
      title: "Flamingo",
      description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
    },
    {
      type: "video" ,
      title: "Big Buck Bunny",
      description:
        "The Peach Open Movie Project\n\nBlender Institute, Netherlands",
      width: 1280,
      height: 720,
      poster:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg",
      sources: [
        {
          src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
          type: "video/mp4",
        },
      ],
    },
    {
      src : require('../../assets/images/banner-carousel/4.jpg'),
      title: "Flamingo",
      description: "Vicko Mozara\n\nVeliki zali, Dubravica, Croatia",
    },
  
  ];
  const [LightBoxOpen, setLightBoxOpen] = useState(false);
  const [Index, setIndex] = useState(0);
  const openLightBox = (index) => {
    setIndex(index)
    setLightBoxOpen(true)
  };
  const breakpoints={
    // when window width is >= 480px
   0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    500: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1168: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
  }
  return (
    <>

     <div className="mb-20">
        <Lightbox
          open={LightBoxOpen}
          close={() => setLightBoxOpen(false)}
          slides={LightBoxSliders}
          plugins={[Captions, Fullscreen, Slideshow, Thumbnails, Video, Zoom]}
          index={Index}
        />
        <section className="relative banner-section flex justify-center ">
          <div className="md:w-full  absolute shadow rounded carousel-box  md:px-10  py-8  ">
            <Breadcrumb/>
            
            <div className="grid grid-cols-5 gap-4 mt-4">
              <div className="col-span-5 md:col-span-3" >
                  <Swiper className="main-swiper" modules={[Thumbs,Navigation]} thumbs={{ swiper: thumbsSwiper }}
                        spaceBetween={50}
                        slidesPerView={1} 
                        navigation  
                        allowTouchMove= {false}
                        onClick={(swiper) => openLightBox(swiper.activeIndex)}
                        >
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/1.jpg')} alt="" /></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/2.jpg')} alt="" /></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/3.jpg')} alt="" /></SwiperSlide>
                      <SwiperSlide > <video  controls><source src={require('../../assets/videos/video1.mp4')} type="video/mp4" /></video></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/4.jpg')} alt="" /></SwiperSlide>
                  </Swiper>
                  
                
                  <Swiper className="second-swiper"
                    modules={[Thumbs,Navigation]}
                    onSwiper={setThumbsSwiper}
                    spaceBetween={30}
                        slidesPerView={4}
                        navigation
                        breakpoints={breakpoints}
                        loop={true}
                  >
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/1.jpg')} alt="" /></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/2.jpg')} alt="" /></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/3.jpg')} alt="" /></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/video-img.png')} alt="" /></SwiperSlide>
                      <SwiperSlide ><img src={require('../../assets/images/banner-carousel/4.jpg')} alt="" /></SwiperSlide>
                  </Swiper>

                    <EsrbSection/>
              </div>
              <div  className="col-span-5 md:col-span-2 banner-right-box md:mx-8">
                <div className="flex mb-6">
                <div className='bar-div primary-bg-color'></div>
                  <span>Nintendo Switch</span>
                </div>
                  <h2 className="mb-6 large-bold-text">Stardew Valley</h2>
                  <div className="flex justify-between mb-6">
                      <span className="large-bold-text">$14.99</span>
                      <FaRegHeart className="heart-icon"/>
                  </div>
                    <div className="flex mb-6">
                        <img className="coin-img mr-2" src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.25/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png" alt="" />
                        <span>Eligible for up to <b>75</b>  Gold Points</span>
                    </div>
                    <div className="mb-6">
                    <Link className="flex justify-center w-full btn-download hover-animation-primary" to='/'><HiOutlineDownload /> Direct Download</Link>
                      
                    </div>
                    <span>This item will be sent to your system automatically after purchase.</span>
                  
              </div>
            </div>
          </div>


        </section> 
      </div>
    </>
  );
}

export default CarouselBanner;