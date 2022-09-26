import Link from "next/link";
import { useRouter } from "next/router";
import LazyLoad from "react-lazyload";
import Breadcrumb from "../Breadcrumb";

function CategoryProducts({ Categories }) {
  const Router = useRouter();
  const TitleName = Router.query.id;

  return (
    <section className="bg-white md:max-w-7xl w-full m-auto md:py-10 py-5">
      <Breadcrumb />
      <div className="w-full text-center">
        <h1 className="md:text-5xl text-3xl uppercase text-gray-600 underline">
          {TitleName}
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
                      <LazyLoad>
                        <img src={category.image} alt={category.title} />
                      </LazyLoad>
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
