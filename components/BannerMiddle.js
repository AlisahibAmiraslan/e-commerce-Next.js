import Link from "next/link";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function BannerMiddle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full md:px-16 px-5 mb-10">
      <div className="banner-middle-image w-full md:block hidden">
        <Link href={"/category/" + data[0]}>
          <a>
            <LazyLoad>
              <img src="Images/banner-middle.png" alt="New Season" />
            </LazyLoad>
          </a>
        </Link>
      </div>

      <div className="banner-middle-image w-full md:hidden block">
        <Link href={"/category/" + data[0]}>
          <a>
            <LazyLoad>
              <img src="Images/banner-middle-mobil.png" alt="New Season" />
            </LazyLoad>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerMiddle;
