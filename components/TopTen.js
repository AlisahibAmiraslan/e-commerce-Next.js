import React from "react";
// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import data from "../data/Data";
import Link from "next/link";

function TopTen() {
  return (
    <>
      <div className="w-full md:px-16 px-5 my-10 md:block hidden">
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={3}
          className="flex justify-center"
        >
          {data.map((item, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <Link href="/">
                    <a>
                      <div className="banner-top-content">
                        <div className="banner-top-img">
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="banner-top-title text-center mt-2">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>

      <div className="w-full md:px-16 px-5 my-10 md:hidden block">
        <Swiper
          loop={true}
          centeredSlides={true}
          slidesPerView={2}
          spaceBetween={3}
          className="flex justify-center"
        >
          {data.map((item, index) => {
            return (
              <>
                <SwiperSlide key={index}>
                  <Link href="/">
                    <a>
                      <div className="banner-top-content">
                        <div className="banner-top-img">
                          <img src={item.img} alt={item.title} />
                        </div>
                        <div className="banner-top-title text-center mt-2">
                          <p>{item.title}</p>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default TopTen;
