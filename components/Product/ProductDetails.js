import React, { useState, useContext } from "react";
import Breadcrumb from "../Breadcrumb";
import { toast } from "react-toastify";
import { ProductContext } from "../../context/ProductContext";

function ProductDetails({ Product }) {
  const { msg, setMsg } = useContext(ProductContext);

  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // if we don't use this we see warning
  };

  const ProTitle = Product.title;
  const ProCat = Product.category;
  const [Quantity, setQuantity] = useState(1);
  //There isn't any stock in APİ, and for this react I used rate value
  const StockQuantity = Product.rating.rate;

  function SebetEkle(value) {
    fetch("https://fakestoreapi.com/products/" + value)
      .then((res) => res.json())
      .then((data) => setMsg([...msg, data]));
  }

  return (
    <>
      <Breadcrumb title={ProTitle} proCat={ProCat} />
      <section className="md:max-w-7xl w-full m-auto py-20">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="product-image">
            <img src={Product.image} alt="" />
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
                    if (Quantity > StockQuantity) {
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
                  className="bg-gray-800 px-5 py-2 text-white hover:bg-gray-600"
                  onClick={() => {
                    SebetEkle(Product.id);
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
