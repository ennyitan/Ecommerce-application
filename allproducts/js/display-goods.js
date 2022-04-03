import { categories } from "./categories.js";
console.log(0)
const categoryRequested = window.location.search.slice(1,window.location.search.length).toLowerCase()

console.log(categoryRequested)

const productContainer = document.querySelector('#products-container')

for (let product of categories[categoryRequested]){
    productContainer.innerHTML += `
    <a href="../cartSection/cart.html?${categoryRequested}+${product.productName}" class="all-items-link">
    <div class="card">
        <img class="card-img mg-bt" src="${product.image}" alt="">
        <div class="d-dit">
        <h3 class="mg-b">${product.productName}</h3>
        <p class="mg-b">${product.price}</p>
        <p class="text-ellipsis mg-b">${product.description}</p>
        
        <div class="mg-tp shopnow"><a href= "#">Shop now</a></div>
        </div>
    </div>
   </a>


     `

}