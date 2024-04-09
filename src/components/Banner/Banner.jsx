import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-2 w-[95%] mx-auto bg-cover bg-center h-[50vh] md:h-screen rounded-lg p-5">
      	<div className="col-span-1 border rounded-lg">
   <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-full"
      >
        <SwiperSlide><img className="h-full w-full z-0" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
        <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
   </Swiper>
      	</div>
      </div>
    </>
  );
}
export default Banner