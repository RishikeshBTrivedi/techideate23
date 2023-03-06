import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "./images/speakers/speaker1.png"
import image2 from "./images/speakers/speaker2.png"
import image3 from "./images/speakers/speaker3.png"
import image4 from "./images/speakers/speaker4.png"
import image5 from "./images/speakers/speaker5.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

export default function CustomCarousel() {
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide><img src = {image1}></img></SwiperSlide>
        <SwiperSlide><img src = {image2}></img></SwiperSlide>
        <SwiperSlide><img src = {image3}></img></SwiperSlide>
        <SwiperSlide><img src = {image4}></img></SwiperSlide>
        <SwiperSlide><img src = {image5}></img></SwiperSlide>
      </Swiper>
    </>
  );
}