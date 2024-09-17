import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './Navbar.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

export default function Swipper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide><img style={{height:"800px"}} src='./images/bn1.png'/></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}}src='./images/bn2.png'/></SwiperSlide>
        <SwiperSlide><img style={{height:"800px"}} src='./images/bn3.png'/></SwiperSlide>
      
      </Swiper>
    </>
  );
}
