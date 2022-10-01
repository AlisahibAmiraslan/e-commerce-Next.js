import React, { useContext } from "react";
import { ProductContext, Store } from "../context/ProductContext";

function Cart() {
  // const { msg, setMsg } = useContext(ProductContext);

  const { state } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  console.log(cartItems);

  return (
    <>
      <div>
        {cartItems.map((item) => {
          return (
            <>
              <div key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.price}</p>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Cart;
