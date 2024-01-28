// swipper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import "swiper/css/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import NoImage from "./../public/Images/no_image.png";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function TopTen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories/4/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  return (
    <>
      <div className="w-full md:max-w-7xl m-auto md:px-0 px-5 my-20 md:block hidden top-ten">
        <Swiper
          loop={true}
          slidesPerView={3}
          spaceBetween={10}
          className="flex justify-center"
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((item, index) => {
            if (index <= 6) {
              return (
                <SwiperSlide key={index}>
                  <Link href={"/product/" + item.id}>
                    <a>
                      <div className="banner-top-content">
                        <div className="banner-top-img banner-slider">
                          {item.images[0].includes("https") ? (
                            <Image
                              placeholder="blur"
                              width="450"
                              height="400"
                              blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
                              src={item.images[0]}
                              alt={item.title}
                            />
                          ) : (
                            <div className="no_image">
                              <Image src={NoImage} alt="No Image" />
                            </div>
                          )}
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
              );
            }
          })}
        </Swiper>
      </div>

      <div className="w-full px-5 my-10 md:hidden block top-ten-mobil">
        <Swiper
          loop={true}
          slidesPerView={2}
          spaceBetween={3}
          className="flex justify-center"
          navigation={true}
          modules={[Navigation]}
        >
          {data.map((item, index) => {
            if (index <= 6) {
              return (
                <SwiperSlide key={index}>
                  <Link href={"/product/" + item.id}>
                    <a>
                      <div className="banner-top-content">
                        <div className="banner-top-img">
                          {item.images[0].includes("https") ? (
                            <Image
                              placeholder="blur"
                              width="450"
                              height="400"
                              blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
                              src={item.images[0]}
                              alt={item.title}
                            />
                          ) : (
                            <div className="no_image">
                              <Image src={NoImage} alt="No Image" />
                            </div>
                          )}
                        </div>
                        <div className="banner-top-title text-center mt-4">
                          <p>{item.title.substring(0, 15)}...</p>
                          <span className="font-extrabold mt-2 block">
                            {item.price}$
                          </span>
                        </div>
                      </div>
                    </a>
                  </Link>
                </SwiperSlide>
              );
            }
          })}
        </Swiper>
      </div>
    </>
  );
}

export default TopTen;
