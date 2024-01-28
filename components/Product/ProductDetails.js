import React, { useState, useContext } from "react";
import Breadcrumb from "../Breadcrumb";
import { toast } from "react-toastify";
import { Store } from "../../context/ProductContext";
// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);
import "swiper/css/navigation";
import NoImage from "./../../public/Images/no_image.png";
import Image from "next/image";
import { useRouter } from "next/router";

function ProductDetails({ Product }) {
  const Router = useRouter();

  const { state, dispatch } = useContext(Store);

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // if we don't use this we see warning
  };

  const ProTitle = Product.title;
  const ProCat = Product.category;
  const [Quantity, setQuantity] = useState(1);
  //There isn't any stock in APİ, and for this reason I used rate value
  const StockQuantity = 5;

  // this way is add to basket product with api

  // function SebetEkle(value) {
  //   fetch("https://fakestoreapi.com/products/" + value)
  //     .then((res) => res.json())
  //     .then((data) => setMsg([...msg, data]));
  // }

  // this way is add to basket product with context provider

  const addToCartHandler = async () => {
    const existItem = state.cart.cartItems.find((x) => x.id === Product.id);
    setQuantity(existItem ? existItem.Quantity + 1 : 1);
    dispatch({ type: "CART_ADD_ITEM", payload: { ...Product, Quantity } });
    setQuantity(1);
    Router.push(
      {
        pathname: Router.pathname,
        query: {
          id: Router.query.id,
          ok: 1,
        },
      },
      undefined,
      { shallow: true }
    );
  };

  return (
    <>
      <Breadcrumb title={ProTitle} proCat={ProCat} />
      <section className="md:max-w-7xl w-full m-auto md:py-10 py-5">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="product-image">
            <Swiper
              loop={true}
              slidesPerView={1}
              className="flex justify-center"
              navigation={true}
              modules={[Navigation]}
            >
              {Product.images.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    {img.includes("https") ? (
                      <img src={img} alt="image" />
                    ) : (
                      <div className="no_image">
                        <Image src={NoImage} alt="no image" />
                      </div>
                    )}
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="product-details text-center">
            <div className="flex md:justify-around justify-center md:flex-row flex-col md:mt-0 mt-20">
              <h2>{Product.title}</h2>
              <p className="font-bold">{Product.price}$</p>
            </div>
            <div className="md:mt-24 mt-10 max-w-xl text-center m-auto">
              <h4 className="font-bold mb-5">Product Details:</h4>
              <p>{Product.description}</p>
            </div>
            <div className="add-to-cart mt-10 flex justify-around w-full items-center">
              <div className="flex p-3 border mr-3">
                <svg
                  className="fill-current text-gray-400 w-4 cursor-pointer"
                  viewBox="0 0 448 512"
                  onClick={() => {
                    if (Quantity <= 1) {
                      setQuantity(1);
                    } else {
                      setQuantity(Quantity - 1);
                    }
                  }}
                >
                  <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
                <input
                  className="mx-2 text-center w-12"
                  type="text"
                  value={Quantity}
                  onChange={(event) => inputChangedHandler(event)}
                />
                <svg
                  className="fill-current text-gray-400 w-4 cursor-pointer"
                  viewBox="0 0 448 512"
                  onClick={() => {
                    if (Quantity >= StockQuantity) {
                      toast("No More Product");
                    } else {
                      setQuantity(Quantity + 1);
                    }
                  }}
                >
                  <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                </svg>
              </div>

              <div>
                <button
                  className="bg-black rounded-lg px-5 py-2 text-white hover:bg-green-500 md:w-80 font-extrabold w-full add-cart"
                  onClick={() => {
                    addToCartHandler();
                    toast("Added to Bag");
                  }}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
