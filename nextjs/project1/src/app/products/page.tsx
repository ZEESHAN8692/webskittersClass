import Link from "next/link";

const Products = () => {
  const id1 = 1;
  return (
    <>
      <h2>Products</h2>
      <Link href={`/products/${id1}`}>Product Id</Link>
    </>
  );
};

export default Products;
