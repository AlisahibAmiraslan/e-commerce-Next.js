import Link from "next/link";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import Image from "next/image";
import BannerTwo1 from "./../public/Images/banner-left.png";
import BannerTwo2 from "./../public/Images/banner-right.png";

function BannerTwo() {
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
			<div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-x-10 gap-x-0 md:gap-y-0 gap-y-10">
				<div className="banner-middle-image w-full">
					<Link href={"/category/" + data[4]?.id}>
						<a>
							<LazyLoad>
								<Image
									placeholder="blur"
									blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
									src={BannerTwo1}
									alt="Others"
								/>
							</LazyLoad>
						</a>
					</Link>
				</div>
				<div className="banner-middle-image w-full">
					<Link href={"/category/" + data[4]?.id}>
						<a>
							<LazyLoad>
								<Image
									placeholder="blur"
									blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
									src={BannerTwo2}
									alt="Others"
								/>
							</LazyLoad>
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default BannerTwo;
