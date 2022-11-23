let categories = document.querySelector("#allcategories")
let blockDiv = document.querySelector(".productblock")
let button = document.querySelector("#btn")

let categorySelect = document.querySelector('#category_select');
    ;(async() => {
        let response = await fetch('https://dummyjson.com/products/categories')
        let categories = await response.json();
            for(let category of categories){
                categorySelect.innerHTML += `
                <option value="${category}">${category}</option>`
            }
    
    })(); 

;(async() => {
    let response = await fetch('https://dummyjson.com/products?&limit=100')
    let data = await response.json();
        for(let products of data.products){
            categories.innerHTML += `
            <div class="productblock">
                <div class ="image" style="background-image: url(${products.images[0]});">
                </div> <br>
                <span class="title">${products.title}</span>
                <br>
                <span class="price">${products.price}$</span><br> 
                <span class="titles">Category: ${products.category} </span> <hr>
                <button id="btn" onClick="sendId(${products.id})">Add to cart</button><br>
            </div>`
        }

})(); 

function sendId(productId){
    let arr = JSON.parse(localStorage.getItem("key")) || [];
    localStorage.setItem("key", JSON.stringify([...arr, productId]))
}
 


categories.addEventListener("change", () => {
    cameraSelect.innerHTML = "";
    drawCameras(categories.value)
}); 


function clear() {
    localStorage.clear();
}