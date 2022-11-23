let allProducts = document.querySelector("#all_products")
let productsDiv = document.querySelector(".products")
let button = document.querySelector("#btn")
let select = document.querySelector("#filter_select")
let URL = 'https://dummyjson.com/products?limit=100'

;(async() => {
    let response = await fetch('https://dummyjson.com/products/categories')
    let data = await response.jsxon();
    select.innerHTML += `<option value="">Выберите категорию</option>`
        for(let i = 0; i < data.length; i++){
            select.innerHTML += `<option value="${data[i]}">${data[i]}</option>`
        }
})();

drawCategories()

async function drawCategories(category){
    let response = await fetch(URL)
    let data = await response.json();
    allProducts.innerHTML = ""
    for(let products of data.products){
        if(category){
            if(category == products.category){
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
        }else{
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
        

    }
}


function sendId(productId){
    let arr = JSON.parse(localStorage.getItem("key")) || [];
    localStorage.setItem("key", JSON.stringify([...arr, productId]))
}


select.addEventListener("change", () => {
        drawCategories(select.value)


})


