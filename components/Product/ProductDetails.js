function ProductDetails({ Product }) {
  return (
    <>
      <div>
        <div key={Product.id}>
          <img src={Product.image} alt="" />
          <h2>{Product.title}</h2>
          <p>{Product.price}</p>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
