import { CategoryProducts } from "../../components/index";

const Category = ({ categories }) => {
  return (
    <>
      <CategoryProducts Categories={categories} />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  let id = query.id;

  const res = await fetch("https://fakestoreapi.com/products/category/" + id);
  const data = await res.json();

  return {
    props: {
      categories: data,
    },
  };
};

export default Category;
