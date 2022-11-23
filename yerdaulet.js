;(async () => {

    let cart = JSON.parse(localStorage.getItem("key")) || [];

    console.log(cart);

    let response = await fetch("https://dummyjson.com/products?limit=100");

    let data = await response.json();

    console.log(data);

    let cart_mass = [];

    cart.map(id_num => cart_mass.push(data.products.filter(product => product.id == id_num)[0]));

    console.log(cart_mass);

    let container = document.querySelector("#container");

    container.innerHTML += `<select id="cart_select"></select>`;

    let cart_select = document.querySelector("#cart_select");

    let uniqueCategories = [...new Set(cart_mass.map(item => item.category))];
    
    uniqueCategories.map(category => cart_select.innerHTML += `<option>${category}</option>`);

    container.innerHTML += `<input type="text" id="cart_input">`;

    let cart_input = document.querySelector("#cart_input");

    container.innerHTML += `<div id="all_products"></div>`;

    let all_products = document.querySelector("#all_products");

    cart_mass.map(cart_item => all_products.innerHTML += `
    <div>
        <img src="${cart_item.images[0]}">
        <p>${cart_item.title}</p><hr>
        <p>${cart_item.price}$</p>
        <p>category: ${cart_item.category}</p>
    </div>
    `)
})();