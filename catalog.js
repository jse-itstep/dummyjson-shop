const productsDiv = document.querySelector("#products");
const categorySelect = document.querySelector("#category_select");
const PRODUCTS_URL = "https://dummyjson.com/products";

(async () => {
    const response = await fetch(PRODUCTS_URL);
    const data = await response.json();

    for(let product of data.products){
        productsDiv.innerHTML += `
            <div class="product">
                <div class="image" style="background-image: url(${product.images[0]});"></div>
                <div class="text">
                    <div class="title">${product.title}</div>
                    <div class="price">$${product.price}</div>
                </div>
                <div>
                    <button class="add_to_cart_button" onclick="addToCart(${product.id})">Add to cart</button>
                </div>
            </div>
        `;
    }

    let categoriesWithRepeats = data.products.map(item => item.category);
    let categories = new Set([...categoriesWithRepeats]);

    categorySelect.innerHTML = "";
    categorySelect.innerHTML += `<option value="All">All</option>`;
    for(let category of categories){
        categorySelect.innerHTML += `<option value="${category}">${category}</option>`;
    }
})();