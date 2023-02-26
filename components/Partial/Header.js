import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import Logo from "./../../public/Images/logo.png";
import Image from "next/image";
import { ProductContext, Store } from "../../context/ProductContext";
import { BsSearch } from "react-icons/bs";

function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [progress, setProgress] = useState(false);
  const [progressLoading, setProgressLoading] = useState(false);
  const [Search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  // const { msg, setMsg } = useContext(ProductContext);

  Router.events.on("routeChangeStart", () => {
    setProgress(true);
    setProgressLoading(true);
  });

  Router.events.on("routeChangeComplete", () => {
    setProgress(false);
    setProgressLoading(false);
    setOpenMenu(false);
  });

  function openMobilMenu() {
    setOpenMenu(true);
  }

  function closeMobilMenu() {
    setOpenMenu(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  useEffect(() => {
    setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.Quantity, 0));
  }, [cart.cartItems]);

  const removeItem = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
  };

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  useEffect(() => {
    setIsOpen(false);
    if (router.query.ok == 1) {
      setIsOpen(true);
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    }
  }, [router]);

  return (
    <>
      <nav className="w-full bg-white z-[100] h-auto">
        <div className="flex justify-between items-center md:px-0 px-5 m-auto py-2 w-full md:max-w-7xl">
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={Logo} alt="logo" />
              </a>
            </Link>
          </div>
          {/* big size */}
          <div className="menu lg:flex hidden">
            <ul className="menu-lists">
              {data.map((category, index) => {
                if (index < 6) {
                  return (
                    <li key={index}>
                      <Link href={"/category/" + category.id}>
                        <a>{category.name}</a>
                      </Link>
                    </li>
                  );
                }
              })}
            </ul>
          </div>

          {/* icons */}
          <div className="icons flex items-center justify-center">
            {/* ******search******** */}
            <div className="mr-5 md:w-64 w-full md:block hidden relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearch("");
                  Router.push({
                    pathname: "/search",
                    query: {
                      searchText: Search,
                    },
                  });
                }}
              >
                <input
                  value={Search}
                  onChange={(e) =>
                    setSearch(e.target.value.toLocaleLowerCase())
                  }
                  className="border w-full border-black bg-gray-100 py-1 px-5 rounded-lg"
                  placeholder="Search.."
                />
                <button type="submit" className="absolute right-5 top-2">
                  <BsSearch />
                </button>
              </form>
            </div>

            {/* shopping cart bag */}
            <div className="shopping-cart relative">
              <a className="flex" onClick={openModal}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  style={{ color: "#405861" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                {cartItemsCount > 0 ? (
                  <span>
                    {/* {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} */}
                    {cart.cartItems.length}
                  </span>
                ) : (
                  <span>0</span>
                )}
              </a>
              {IsOpen ? (
                <>
                  <div className="absolute bg-gray-500 shadow-3xl py-3 md:px-3 px-10 text-white w-96 md:right-0 -right-16 total-cart rounded-lg top-9">
                    <button
                      onClick={closeModal}
                      className="cursor-pointer underline relative right-0 w-full"
                    >
                      Close
                    </button>
                    <div>
                      {cart.cartItems.map((shop, index) => {
                        return (
                          <>
                            <div
                              key={index}
                              className="total-cart-card grid grid-cols-4 py-5 border-b border-black"
                            >
                              <div className="cart-image">
                                <img src={shop.images[0]} alt={shop.title} />
                              </div>

                              <div className="col-span-2">
                                <div className="cart-name">
                                  {shop.title.substring(0, 40)}...
                                </div>
                                <div className="cart-quantity">
                                  Quantity: {shop.Quantity}
                                </div>
                              </div>
                              <div className="cart-price ml-10">
                                <div> {shop.price}$</div>
                                <div className="mt-3 text-sm text-red-500">
                                  <span
                                    className="cursor-pointer"
                                    onClick={() => removeItem(shop)}
                                  >
                                    Delete
                                  </span>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </div>
                    <div className="cart-total-price">
                      <div>
                        Total Cart: (
                        {cart.cartItems.reduce((a, c) => a + c.Quantity, 0)}) :
                        $
                        {cart.cartItems
                          .reduce((a, c) => a + c.Quantity * c.price, 0)
                          .toFixed(2)}
                      </div>
                      <div className="w-full text-center bg-black text-white py-3 rounded-lg">
                        <Link href="/cart">
                          <a>Complete</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                ""
              )}
            </div>

            {/* mobil-menu icon */}
            <div className="mobil-menu-icon lg:hidden block ml-3">
              {!openMenu ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 cursor-pointer"
                  onClick={openMobilMenu}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-7 h-7 cursor-pointer"
                  onClick={closeMobilMenu}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </div>
          </div>
        </div>

        {/* for mobil */}

        {openMenu ? (
          <>
            <div className="mobil-menu md:hidden block">
              <ul>
                {data.map((category, index) => {
                  return (
                    <li key={index}>
                      <Link href={"/category/" + category.id}>
                        <a className="uppercase text-sm">{category.name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="mr-5 w-full md:hidden block bg-gray-200 text-center border-t-2 border-gray-300 py-5 mb-5 relative">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSearch("");
                  Router.push({
                    pathname: "/search",
                    query: {
                      searchText: Search,
                    },
                  });
                }}
              >
                <input
                  value={Search}
                  onChange={(e) =>
                    setSearch(e.target.value.toLocaleLowerCase())
                  }
                  className=" w-64 bg-white py-1 px-5"
                />
                <button type="submit" className="absolute right-16 top-7">
                  <BsSearch />
                </button>
              </form>
            </div>
          </>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Header;
