import React from "react";
import Header from "../components/homepage/Header";
import Footer from "../components/homepage/Footer";
import StickyMenu from "../components/homepage/StickyMenu";
import ReadMoreSection from "../components/homepage/ReadMoreSection";
import CarouselBanner from "../components/homepage/CarouselBanner";
import CardsSlider from "../components/homepage/CardsSlider";
import WarningSection from "../components/homepage/WarningSection";
import OnlineSection from "../components/homepage/OnlineSection";
import ProductInfoSection from "../components/homepage/ProductInfoSection";

export default function Home() {


  return (
    <>
      <StickyMenu/>
      <Header/>
      <CarouselBanner/>
      <ReadMoreSection/>
      <ProductInfoSection/>
      <OnlineSection/>
      <CardsSlider/>
      <WarningSection/>
      <Footer/>

    </>
  );
}