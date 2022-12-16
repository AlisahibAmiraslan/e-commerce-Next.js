import Link from "next/link";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import Image from "next/image";
import BannerMidFoto from "./../public/Images/banner-middle.jpg";
import BannerMidMobilFoto from "./../public/Images/banner-middle-mobil.jpg";

function BannerMiddle() {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("https://api.escuelajs.co/api/v1/categories")
			.then((res) => res.json())
			.then((data) => {
				setData(data);
			});
	}, []);

	return (
		<div className="w-full md:max-w-7xl m-auto md:px-0 px-5 mb-10">
			<div className="banner-middle-image w-full md:block hidden">
				<Link href={"/category/" + data[1]?.id}>
					<a>
						<LazyLoad>
							<Image
								placeholder="blur"
								blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
								src={BannerMidFoto}
								alt="New Season"
							/>
						</LazyLoad>
					</a>
				</Link>
			</div>

			<div className="banner-middle-image w-full md:hidden block">
				<Link href={"/category/" + data[1]?.id}>
					<a>
						<LazyLoad>
							<Image
								placeholder="blur"
								blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
								src={BannerMidMobilFoto}
								alt="New Season"
							/>
						</LazyLoad>
					</a>
				</Link>
			</div>
		</div>
	);
}

export default BannerMiddle;
