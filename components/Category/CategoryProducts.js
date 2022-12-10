import Link from "next/link";
import { useRouter } from "next/router";
import LazyLoad from "react-lazyload";
import Breadcrumb from "../Breadcrumb";
import NoImage from "./../../public/Images/no_image.png";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function CategoryProducts({ Categories }) {
  const Router = useRouter();
  const TitleName = Router.query.id;
  return (
    <section className="bg-white md:max-w-7xl w-full m-auto md:py-10 py-5">
      <Breadcrumb />
      <div className="w-full text-center">
        <h1 className="md:text-5xl text-3xl uppercase text-gray-600 underline">
          {Categories[0].category.name}
        </h1>
      </div>

      <div className="grid md:grid-cols-4 grid-cols-2 gap-2 py-10">
        {Categories.map((category, index) => {
          return (
            <>
              <Link href={"/product/" + category.id} key={index}>
                <a>
                  <div className="border">
                    <div className="category-image">
                      {category.images[0].includes("https") ? (
                        <LazyLoadImage
                          effect="blur"
                          src={category.images[0]}
                          alt={category.title}
                        />
                      ) : (
                        <div className="no_image">
                          <Image src={NoImage} />
                        </div>
                      )}
                    </div>
                    <div className="category-content text-center">
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
    </section>
  );
}

export default CategoryProducts;
