import Link from "next/link";
import { useRouter } from "next/router";
import slugify from "slugify";

const Category = ({ categories }) => {
  console.log(categories);

  return (
    <>
      <div className="px:16">
        {categories.map((category) => {
          return (
            <>
              <Link href={"/category/" + category.id} key={category.id}>
                <a> {category.title} </a>
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
  };
};

export default Category;
