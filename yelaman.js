;(async () => {
    let cart = JSON.parse(localStorage.getItem("key")) || [];
    console.log(cart);

    let response = await fetch("https://dummyjson.com/products");

    let data = await response.json();
    console.log(data);
    
    let cart_mass = [];

    cart.map(id_num => cart_mass.push(data.products.filter(product => product.id == id_num)[0]));
    console.log(cart_mass);
    
    let container = document.querySelector("#container");
    cart_mass.map(product => container.innerHTML += `
        <p>${product.title}</p>
        <img src="${product.images}">
        <p>${product.price}</p>
        <p>${product.category}</p>
        <img src="${product.images}" width="200px">
        `);
})();