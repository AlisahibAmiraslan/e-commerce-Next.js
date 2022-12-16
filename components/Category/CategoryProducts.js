import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import LazyLoad from "react-lazyload";
import Breadcrumb from "../Breadcrumb";
import NoImage from "./../../public/Images/no_image.png";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CategoryProducts({ Categories }) {
	const [More, setMore] = useState(8);
	const Router = useRouter();

	const loadProducts = () => {
		setMore(More + 8);
	};

	useEffect(() => {
		setMore(8);
	}, [Router]);

	const TitleName = Router.query.id;

	const CategorySlice = Categories.slice(0, More);

	return (
		<section className="bg-white md:max-w-7xl w-full m-auto md:py-10 py-5">
			<Breadcrumb />
			<div className="w-full text-center">
				<h1 className="md:text-5xl text-3xl uppercase text-gray-600 underline">
					{Categories[0].category.name}
				</h1>
			</div>

			<div className="grid md:grid-cols-4 grid-cols-2 gap-2 py-10">
				{CategorySlice.map((category, index) => {
					return (
						<>
							<Link href={"/product/" + category.id} key={index}>
								<a>
									<div className="border">
										<div className="category-image">
											{category.images[0].includes("https") ? (
												<LazyLoad>
													<Image
														placeholder="blur"
														blurDataURL="https://cdn.myikas.com/images/6d452771-fa42-482d-a9a5-b47e65a5bf47/1584c545-2604-4edf-b183-4e8b0454e2c3/image_10.webp"
														width="350"
														height="350"
														src={category.images[0]}
														alt={category.title}
													/>
												</LazyLoad>
											) : (
												<div className="no_image">
													<LazyLoad>
														<Image src={NoImage} />
													</LazyLoad>
												</div>
											)}
										</div>
										<div className="category-content text-center mt-5">
											<h2 className="title">
												{category.title.substring(0, 30)}...
											</h2>
											<p className="category-price font-extrabold mt-5">
												{category.price}$
											</p>
										</div>
									</div>
								</a>
							</Link>
						</>
					);
				})}
			</div>
			{CategorySlice.length >= Categories.length ? (
				""
			) : (
				<div className="w-full text-center">
					<button
						className="border-b border-black"
						onClick={() => loadProducts()}
					>
						See More Products
					</button>
				</div>
			)}
		</section>
	);
}

export default CategoryProducts;
