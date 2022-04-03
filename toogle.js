import { categories } from "./allproducts/js/categories.js"

let searchInput = document.getElementById("search-input")
let dropDownDiv = document.querySelector('.dropdownSearch')
// console.log(value)


searchInput.addEventListener('input', (e)=>{
let value = searchInput.value.toLowerCase()
dropDownDiv.innerHTML = ''
let len = value.length
if(len !== 0){
    dropDownDiv.style.display = 'block'
} else {
    dropDownDiv.style.display = 'none'
}
let matches = []
    // const result = 
    for(let key in categories){
        matches = matches.concat(categories[key].filter(product => {
            if(product.productName.toLowerCase().slice(0,len) === value) {
                return (true)
            } else {
                return (false)
            }
        }))
    }
    console.log(matches)
    matches.forEach(product => {
        dropDownDiv.innerHTML += `
        <a href="cartSection/cart.html?Electronics+${product.productName}">
            <img src="${product.image}" alt="">
            <span>${product.productName}</span>
        </a>
        `
    })
})
