import Link from "next/link";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function BannerTwo() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full md:max-w-7xl m-auto md:px-0 px-5 mb-10">
      <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10">
        <div className="banner-middle-image w-full">
          <Link href={"/category/" + data[4]?.id}>
            <a>
              <LazyLoad>
                <img src="Images/banner-left.png" alt="Others" />
              </LazyLoad>
            </a>
          </Link>
        </div>
        <div className="banner-middle-image w-full">
          <Link href={"/category/" + data[4]?.id}>
            <a>
              <LazyLoad>
                <img src="Images/banner-right.png" alt="Others" />
              </LazyLoad>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;
