let select = document.querySelector("#products_select")
let div = document.querySelector("#cart")



async function loadTodos(){
    let response = await fetch("https://dummyjson.com/products")
    let data = await response.json()
        for(let product of data.products){
            div.innerHTML += `
            <div style="width: 300px; height:300px;">
            ${product.title}
            ${product.category}
            ${product.price}
            <img src="${product.images[0]}" width="200px" >
            <button id="basket" onclick="add_t(${+product.id})" style="background:green;color:white;border-color:white;">Добавить в корзину</button>
            </div>
            `
        }
        

}
loadTodos();

function add_t(id) {
    let arr = JSON.parse(localStorage.getItem("key")) || [];
    localStorage.setItem("key", JSON.stringify([...arr, id]));
}