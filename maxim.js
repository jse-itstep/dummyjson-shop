let obj = [
    {
        title: "Iphone X",
        price: "3000",
        category: "Smartphones",
        img: "https://i.dummyjson.com/data/products/1/1.jpg"
    },
    {
        title: "Iphone X",
        price: "3000",
        category: "l",
        img: "https://i.dummyjson.com/data/products/1/1.jpg"
    },
    {
        title: "Iphone X",
        price: "3000",
        category: "l",
        img: "https://i.dummyjson.com/data/products/1/1.jpg"
    },
    {
        title: "Iphone X",
        price: "3000",
        category: "l",
        img: "https://i.dummyjson.com/data/products/1/1.jpg"
    },
    {
        title: "Iphone X",
        price: "3000",
        category: "l",
        img: "https://i.dummyjson.com/data/products/1/1.jpg"
    },
]


let cart = localStorage.getItem("cart")
let select = document.querySelector("#filter_select")
let sum = document.querySelector("#sum_span")
let cartDiv = document.querySelector("#cartDiv")


select.innerHTML += `
    <option>Smartphones</option>
    <option>Laptops</option>
    <option>Fragrances</option>
    <option>Skincare</option>
    <option>Groceries</option>
    <option>Home-Decoration</option>
`


function drawProducts(fill){
    let sumIn = 0
    for(let product of obj){
        cartDiv.innerHTML += `
        <p>${product.title}</p>
        <p>${product.price}</p>
        <p>${product.category}</p>
        <img width="100px" height="100px" src="${product.img}">
        <hr>
        `
        sumIn += +product.price
    }
    sum.innerHTML = +sumIn
}
drawProducts(obj)

select.addEventListener("change", () => {
    cartDiv.innerHTML = ""
    let result = obj.filter(obj => obj.category === select.value)
    drawProducts(result)
})