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
        <SwiperSlide><img src='https://tapcoe.com/source/assets/img/bn1.jpg'/></SwiperSlide>
        <SwiperSlide><img src='https://tapcoe.com/source/assets/img/bn2.jpg'/></SwiperSlide>
        <SwiperSlide><img src='	https://tapcoe.com/source/assets/img/bn3.jpg'/></SwiperSlide>
      
      </Swiper>
    </>
  );
}
