let allProducts = document.querySelector("#all_products")
let productsDiv = document.querySelector(".products")
let button = document.querySelector("#btn")
let select = document.querySelector("#filter_select")

;(async() => {
    let response = await fetch('https://dummyjson.com/products')
    let data = await response.json();
        for(let products of data.products){
            select.innerHTML += `<option value="${products.id}">${products.category}</option>`
            allProducts.innerHTML += `
            <div class="products">
                <div class ="image" style="background-image: url(${products.images[0]});"></div>
                <br><br>
                <span class="title">${products.title}</span><hr>
                <span class="price">${products.price}$</span><br><br>
                <span class="title">Category: </span>${products.category}<br><br>
                <button id="btn" onClick="sendId(${products.id})">Add to cart</button><br><br>
            </div>`
        }
        console.log(data.products)
})();



function sendId(productId){
    let arr = JSON.parse(localStorage.getItem("key")) || [];
    localStorage.setItem("key", JSON.stringify([...arr, productId]))
}

select.addEventListener("change", () => {

})


