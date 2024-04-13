import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Aos from 'aos';
import "aos/dist/aos.css";

const Banner = () => {

    return (
      <div className="grid grid-cols-1 gap-2 w-full mx-auto h-[60vh] md:h-screen rounded-2xl p-5 overflow-hidden">
        <div className="col-span-1 border rounded-xl overflow-hidden">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper h-full"
          >
            <SwiperSlide><img className="h-full w-full z-0" src="https://img.freepik.com/premium-photo/luxury-house-exterior_977958-5743.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/house-isolated-field_1303-23773.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/free-photo/3d-rendering-house-model_23-2150799711.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/premium-photo/newly-constructed-modern-home_987686-6789.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/premium-photo/wellmaintained-residential-area-blue-sky_907293-1370.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img className="h-full w-full" src="https://img.freepik.com/premium-photo/front-view-modern-house-with-front-lawn-garage_432236-1107.jpg" alt="" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    );
  }

  export default Banner;
