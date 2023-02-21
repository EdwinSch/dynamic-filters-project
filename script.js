/* ---- TARGETS && INITIALIZERS ---- */
let filteredProducts = [...products];
const productsContainer = document.querySelector(".products-container");

/* ---- FUNCTIONS ---- */

// Display Products Function
function displayProducts() {
  // conditional for empty search results
  if (filteredProducts.length < 1) {
    productsContainer.innerHTML = `<h6>No matching search results.</h6>`;
    return;
  }

  productsContainer.innerHTML = filteredProducts
    .map(({ id, title, image, price }) => {
      return ` <article class="product" data-id='${id}'>
          <img
            class="product-img img"
            src="${image}"
            alt="product"
          />
          <footer>
            <h5 class="product-name">${title}</h5>
            <span class="product-price">&euro; ${price}</span>
          </footer>
        </article>`;
    })
    .join("");
}
//invoke function
displayProducts();

// Text Filter
const form = document.querySelector(".input-form");
const searchInput = document.querySelector(".search-input");

form.addEventListener("keyup", function () {
  const inputValue = searchInput.value;

  filteredProducts = products.filter((product) => {
    return product.title.toLowerCase().includes(inputValue);
  });
  // re-invoke display products function (new state)
  displayProducts();
});
