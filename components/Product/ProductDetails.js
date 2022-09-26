import Breadcrumb from "../Breadcrumb";

function ProductDetails({ Product }) {
  const ProTitle = Product.title;
  const ProCat = Product.category;

  return (
    <>
      <Breadcrumb title={ProTitle} proCat={ProCat} />
      <section className="md:max-w-7xl w-full m-auto py-20">
        <div className="grid md:grid-cols-2 grid-cols-1">
          <div className="product-image">
            <img src={Product.image} alt="" />
          </div>
          <div className="product-details text-center">
            <div className="flex md:justify-around justify-center md:flex-row flex-col md:mt-0 mt-20">
              <h2>{Product.title}</h2>
              <p className="font-bold">{Product.price}$</p>
            </div>
            <div className="md:mt-24 mt-10 max-w-xl text-center m-auto">
              <h4 className="font-bold mb-5">Product Details:</h4>
              <p>{Product.description}</p>
            </div>
            <div className="add-to-cart mt-10">
              <button className="bg-gray-800 px-5 py-2 text-white">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
