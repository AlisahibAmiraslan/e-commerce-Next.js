import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import ClipLoader from "react-spinners/ClipLoader";
import Logo from "./../../public/Images/logo.png";
import Image from "next/image";
import { ProductContext, Store } from "../../context/ProductContext";

function Header() {
  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [progress, setProgress] = useState(false);
  const [progressLoading, setProgressLoading] = useState(false);
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

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="w-full fixed top-0">
        {progressLoading && (
          <div className="progress">
            <div className="color"></div>
          </div>
        )}

        {progress && (
          <div className="relative loading-circle">
            <ClipLoader
              color="black"
              size={20}
              cssOverride={{ position: "absolute", right: 20, top: 10 }}
            />
          </div>
        )}
      </div>
      <nav className="w-full bg-white z-[100] h-auto">
        <div className="flex justify-between items-center md:px-0 px-5 m-auto md:py-7 py-5 w-full md:max-w-7xl">
          <div className="logo">
            <Link href="/">
              <a>
                <Image src={Logo} alt="logo" />
              </a>
            </Link>
          </div>
          {/* big sizes */}
          <div className="menu lg:flex hidden">
            <ul className="menu-lists">
              {data.map((category, index) => {
                return (
                  <li key={index}>
                    <Link href={"/category/" + category}>
                      <a>{category}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* icons */}
          <div className="icons flex items-center justify-center">
            {/* shopping cart bag */}
            <div className="shopping-cart">
              <Link href="/cart">
                <a className="flex">
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
                  {cart.cartItems.length > 0 && (
                    <span>
                      {/* {cart.cartItems.reduce((a, c) => a + c.quantity, 0)} */}
                      {cart.cartItems.length}
                    </span>
                  )}
                </a>
              </Link>
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
          <div className="mobil-menu md:hidden block">
            <ul>
              {data.map((category, index) => {
                return (
                  <li key={index}>
                    <Link href={"/category/" + category}>
                      <a className="uppercase text-sm">{category}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
}

export default Header;
