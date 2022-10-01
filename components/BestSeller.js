// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

function BestSeller() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's%20clothing")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="w-full md:max-w-7xl m-auto md:px-0 px-5 my-20 md:block hidden top-ten">
        <Swiper
          loop={true}
          slidesPerView={4}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="flex justify-center"
        >
          {data.map((item, index) => {
            return (
              <>
                <SwiperSlide key={item.id}>
                  <Link href={"/product/" + item.id}>
                    <a>
                      <div className="banner-top-content">
                        <div className="banner-top-img">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="banner-top-title text-center mt-4">
                          <p>{item.title.substring(0, 35)}...</p>
                          <span className="font-extrabold mt-3 block">
                            {item.price}$
                          </span>
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

      <div className="w-full px-5 my-10 md:hidden block top-ten-mobil">
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
                <SwiperSlide key={item.id}>
                  <Link href={"/product/" + item.id}>
                    <a>
                      <div className="banner-top-content">
                        <div className="banner-top-img">
                          <img src={item.image} alt={item.title} />
                        </div>
                        <div className="banner-top-title text-center mt-4">
                          <p>{item.title.substring(0, 10)}...</p>
                          <span className="font-extrabold mt-2 block">
                            {item.price}$
                          </span>
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

export default BestSeller;
