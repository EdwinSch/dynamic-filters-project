/* ---- TARGETS && INITIALIZERS ---- */
let filteredProducts = [...products];
const productsContainer = document.querySelector(".products-container");

/* ---- FUNCTIONS ---- */

// --- Display Products Function
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

// --- Text Filter
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

// --- Display Filter Buttons dynamically
const searchBtnsContainer = document.querySelector(".search-buttons");

function displayButtons() {
  const buttons = ["all", ...new Set(products.map((product) => product.type))];

  searchBtnsContainer.innerHTML = buttons
    .map((type) => {
      return `<button class="type-btn" data-id="${type}">${type}</button>`;
    })
    .join("");
}
//invoke function
displayButtons();

// --- Filter Buttons function
searchBtnsContainer.addEventListener("click", function (event) {
  const btnElement = event.target;

  if (btnElement.dataset.id === "all") {
    filteredProducts = [...products];
  } else {
    filteredProducts = products.filter((product) => {
      return product.type === btnElement.dataset.id;
    });
  }
  // reset search input field
  searchInput.value = "";
  // re-invoke display products function (new state)
  displayProducts();
});
