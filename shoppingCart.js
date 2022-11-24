const productId = JSON.parse(localStorage.getItem('key'))
let productsDiv = document.querySelector("#products_list");
console.log(productId);



;(async function(){
    let response = await fetch('https://dummyjson.com/products?limit=100');
    let products = await response.json();
    for(const item of products.products){
        
        let itemId = item.id;
        console.log(itemId);
        if(productId.includes(itemId)){
        productsDiv.innerHTML += `<div class ="image" style="background-image: url(${item.images[0]}) ;height:250px;
                    background-repeat: no-repeat;background-size: contain;background-position: center;">
                        </div>
                                <span class="title">${item.title}</span> <br> <br>
                                <span class="price">${item.price}$</span><br><br>
                                <span class="title">Category: </span>${item.category}<br>
                                <hr>`
        }
    }

    
})();

// const loadAuthors =() =>{
//     const settings = {
//         url:'https://jsonplaceholder.ir/users',
//         method:'get',
//         success:(response)=>{
//             authorsSelect.empty();
//             authorsSelect.append(`<option value= "">Choose an author</option>`);
//             response.map(user => authorsSelect.append(`<option value="${user.id}">${user.name}</option>`))
//         },
//         error:(error) => {
//             alert("Smth went wrong");
//         }
//     }
//     $.ajax(settings);
// }