import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

function Cart() {
  const { msg, setMsg } = useContext(ProductContext);

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
