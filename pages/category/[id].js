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
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/categories/${id}/products`
  );

  const data = await res.json();
  return {
    props: {
      categories: data,
    },
  };
};

export default Category;
