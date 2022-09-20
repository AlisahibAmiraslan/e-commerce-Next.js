import Link from "next/link";

function BannerMiddle() {
  return (
    <div className="w-full md:px-16 px-5 mb-10">
      <div className="banner-middle-image w-full md:block hidden">
        <Link href="/">
          <a>
            <img src="Images/banner-middle.png" alt="New Season" />
          </a>
        </Link>
      </div>

      <div className="banner-middle-image w-full md:hidden block">
        <Link href="/">
          <a>
            <img src="Images/banner-middle-mobil.png" alt="New Season" />
          </a>
        </Link>
      </div>
    </div>
  );
}

export default BannerMiddle;
