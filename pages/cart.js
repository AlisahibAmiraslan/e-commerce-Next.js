import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { msg, setMsg } = useContext(ProductContext);
  console.log(msg);
  return (
    <>
      <div>
        {msg.map((item) => {
          return (
            <>
              <h1>{item.title}</h1>
              <p>{item.price}</p>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
