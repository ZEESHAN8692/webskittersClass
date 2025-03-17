function addProduct() {
  let form = document.querySelector("form");
  let Products = JSON.parse(localStorage.getItem("PRODUCTS")) || [];

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let productTitle = document.getElementById("productTitle").value;
    let productDes = document.getElementById("productDes").value;
    let productImage = document.getElementById("productImage").value;

    let FormData = {
      image: productImage,
      title: productTitle,
      description: productDes,
    };
    Products.push(FormData);
    localStorage.setItem("PRODUCTS", JSON.stringify(Products));
    alert("Product Save Successfull");

    form.reset();
  });
}
addProduct();
