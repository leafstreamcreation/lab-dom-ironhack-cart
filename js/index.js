// ITERATION 1

function updateSubtotal(product) {
  console.log("Calculating subtotal, yey!");

  const priceElement = product.querySelector(".price span");
  const quantityElement = product.querySelector(".quantity input");
  const subtotal = Number(priceElement.innerText) * quantityElement.value;
  const subtotalElement = product.querySelector(".subtotal span");
  subtotalElement.innerText = `${subtotal}`;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector(".product");
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product");
  //products.forEach((product) => updateSubtotal(product));

  // ITERATION 3
  const totalElement = document.querySelector("#total-value span");
  totalElement.innerText = `${Array.from(products).reduce(
    (sub, product) => sub + updateSubtotal(product),
    0
  )}`;
}

// ITERATION 4
function removeProduct(event) {
  const target = event.currentTarget;
  console.log("The target in remove is:", target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener("load", () => {
  const calculatePricesBtn = document.getElementById("calculate");
  calculatePricesBtn.addEventListener("click", calculateAll);

  const removeButtons = document.querySelectorAll("btn-remove");
  removeButtons.forEach((button) =>
    button.addEventListener("click", removeProduct)
  );
});