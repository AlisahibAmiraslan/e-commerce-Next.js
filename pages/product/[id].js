import { ProductDetails } from "../../components/index";

function Products({ products }) {
  return <ProductDetails Product={products} />;
}

export const getServerSideProps = async ({ query }) => {
  let id = query.id;

  const res = await fetch("https://fakestoreapi.com/products/" + id);
  const data = await res.json();

  return {
    props: {
      products: data,
    },
  };
};

export default Products;
