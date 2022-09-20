import React, { useState } from "react";
import Link from "next/link";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  function openMobilMenu() {
    setOpenMenu(true);
  }

  function closeMobilMenu() {
    setOpenMenu(false);
  }

  return (
    <>
      <nav className="w-full md:px-16 px-5 flex justify-between md:py-7 py-5 bg-white z-[100]">
        <div className="logo">Logo</div>
        {/* big sizes */}
        <div className="menu lg:flex hidden">
          <ul className="menu-lists">
            <li>
              <Link href="/">
                <a>New Season</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Men's Clothing</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Women's Clothing</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Electronics</a>
              </Link>
            </li>
          </ul>
        </div>

        {/* icons */}
        <div className="icons flex items-center justify-center">
          {/* shopping cart bag */}
          <div className="shopping-cart">
            <Link href="/cart">
              <a>
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
      </nav>

      {/* for mobil */}

      {openMenu ? (
        <div className="mobil-menu md:hidden block px-5">
          <ul>
            <li>
              <Link href="/">
                <a>AnaSayfa</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Hakkımızda</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Galery</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default Header;
