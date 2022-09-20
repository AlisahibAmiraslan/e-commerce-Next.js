import Link from "next/link";

function BannerTop() {
  return (
    <div className="w-full md:px-16 px-5">
      <div className="banner-top-image w-full md:block hidden">
        <Link href="/">
          <a>
            <img src="Images/banner-top.png" alt="New Season" />
          </a>
        </Link>
      </div>

      <div className="banner-top-image w-full md:hidden block">
        <Link href="/">
          <a>
            <img src="Images/banner-top-mobil.png" alt="New Season" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerTop;
