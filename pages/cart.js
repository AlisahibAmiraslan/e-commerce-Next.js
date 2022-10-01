import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import { ProductContext, Store } from "../context/ProductContext";
import dynamic from "next/dynamic";

function Cart() {
  // const { msg, setMsg } = useContext(ProductContext);

  const Router = useRouter();
  const inputChangedHandler = (event) => {
    const updatedKeyword = event.target.value;
    // if we don't use this we see warning
  };

  const { state, dispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  const removeItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  const removeAllItem = (allItem) => {
    dispatch({ type: "CART_CLEAR_ITEMS" });
  };

  return (
    <>
      {cartItems.length > 0 ? (
        cartItems.map((item, index) => {
          return (
            <>
              <div key={index} className="w-full md:max-w-7xl mx-auto">
                <div className="w-full flex border mt-5 items-center md:flex-row flex-col">
                  <div className="cart-image md:mr-14 mr-0 md:my-0 my-10 flex justify-center items-center ml-3">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="md:pl-0 pl-5">
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
                    <Link href={"/product/" + item.id}>
                      <a className="text-green-700 font-bold mt-2">Details</a>
                    </Link>
                    <button
                      className="text-red-600 mt-3"
                      onClick={() => removeItem(item)}
                    >
                      Remove
                    </button>
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
      {cartItems.length > 0 && (
        <div className="mt-5 md:max-w-7xl w-full mx-auto">
          <div className="md:w-72 w-full border flex justify-center items-center flex-col p-5">
            <div className="pb-3 text-xl">
              Subtotal ({cartItems.reduce((a, c) => a + c.Quantity, 0)}) : $
              {cartItems
                .reduce((a, c) => a + c.Quantity * c.price, 0)
                .toFixed(2)}
            </div>
            <button
              className="button-buy bg-green-500 hover:bg-green-300 text-white px-6 md:py-2 py-4 md:w-24 w-full"
              onClick={() => {
                toast("Purchased");
                setTimeout(() => {
                  removeAllItem(cartItems);
                }, 1500);
              }}
            >
              Buy
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });
