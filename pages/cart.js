import Link from "next/link";
import React, { useContext } from "react";
import { ProductContext, Store } from "../context/ProductContext";

function Cart() {
  // const { msg, setMsg } = useContext(ProductContext);

  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
          return (
            <>
              <div key={index} className="w-full md:max-w-7xl mx-auto">
                <div className="w-full flex border mt-5 items-center md:flex-row flex-col">
                  <div className="cart-image mr-14 flex justify-center items-center ml-3">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div>
                    <h1>
                      <span className="mr-3 font-bold">Product Name:</span>
                      {item.title}
                    </h1>
                    <span>
                      <span className="mr-3 font-bold">Quantity:</span>
                      {item.Quantity}
                    </span>
                    <p>
                      <span className="mr-3 font-bold">Price:</span>
                      {item.price}$
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })
      ) : (
        <div className="w-full md:max-w-7xl mx-auto py-10">
          <p className="md:text-4xl text-xl text-red-700 text-center mb-5">
            Your Bag is empty
          </p>
          <Link href="/">
            <a className="w-full bg-black text-white text-center py-3 hover:bg-gray-500">
              Continue shopping
            </a>
          </Link>
        </div>
      )}
    </>
  );
}

export default Cart;
