import Link from "next/link";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function BannerTop() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="w-full md:max-w-7xl m-auto md:px-0 px-5">
      <div className="banner-top-image w-full md:block hidden">
        <Link href={"/category/" + data[3]}>
          <a>
            <LazyLoad>
              <img src="Images/banner-top.png" alt="New Season" />
            </LazyLoad>
          </a>
        </Link>
      </div>

      <div className="banner-top-image w-full md:hidden block">
        <Link href={"/category/" + data[3]}>
          <a>
            <LazyLoad>
              <img src="Images/banner-top-mobil.png" alt="New Season" />
            </LazyLoad>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerTop;
