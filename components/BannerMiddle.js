import Link from "next/link";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";

function BannerMiddle() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="w-full md:max-w-7xl m-auto md:px-0 px-5 mb-10">
      <div className="banner-middle-image w-full md:block hidden">
        <Link href={"/category/" + data[1]?.id}>
          <a>
            <LazyLoad>
              <img src="Images/banner-middle.jpg" alt="New Season" />
            </LazyLoad>
          </a>
        </Link>
      </div>

      <div className="banner-middle-image w-full md:hidden block">
        <Link href={"/category/" + data[1]?.id}>
          <a>
            <LazyLoad>
              <img src="Images/banner-middle-mobil.jpg" alt="New Season" />
            </LazyLoad>
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerMiddle;
