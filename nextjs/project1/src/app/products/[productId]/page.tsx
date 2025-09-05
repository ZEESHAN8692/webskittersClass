const ProductsDetails = ({ params }: { params: { productId: string } }) => {
  return (
    <>
      <h1>Deatils of product {params.productId}</h1>
    </>
  );
};
export default ProductsDetails;
