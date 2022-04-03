import { categories } from "../allproducts/js/categories.js";
// console.log(0)
const categoryRequested = window.location.search.slice(1, window.location.search.length).toLowerCase()

let category = categoryRequested.split('+')[0];

let productAlias = categoryRequested.split('+')[1];
let product = productAlias.split('%20').join(' ')

let productObjectsArray = categories[category]

let productNameSpace = document.querySelector('#productName')
let mainImg = document.querySelector('#main-image')
let price = document.querySelector('#price')
let about = document.querySelector('#about')
let previewImg1 = document.querySelector('.previw-img-1')
let previewImg2 = document.querySelector('.previw-img-2')
let previewImg3 = document.querySelector('.previw-img-3')

for (let item of productObjectsArray) {
    if (product === item.productName.toLowerCase()) {

        let newMainImage = document.createElement('div')
        newMainImage.classList.add('shoe-item');
        newMainImage.innerHTML = `
        <div class="shoe-item grey-bg-color">
                        <img src="${item.image}" alt="" width="100%">
        </div>`
        mainImg.appendChild(newMainImage)

        productNameSpace.innerHTML = item.productName
            // mainImg.src = item.image
        price.innerHTML = item.price
        about.innerHTML = item.description
        previewImg1.src = item.image
        previewImg2.src = item.image
        previewImg3.src = item.image
    }
}


// suggested cart session
const suggestedItemDisplay = document.querySelector('.suggest-product-display-grid')
console.log(suggestedItemDisplay)

function addToSuggestedCartItem() {
    for (let i = 0; i < productObjectsArray.length; i++) {
        let suggestedItems = productObjectsArray[i];
        let newSuggestedItems = document.createElement('div');
        newSuggestedItems.classList.add('suggest-product')

        newSuggestedItems.innerHTML += `
        <div class="suggest-product">
                        <div class="product-item grey-bg-color">
                            <img src="${suggestedItems.image}" alt="" width="100%" class="option-image">
                            <p class="love-icon"><i class="fa fa-heart" aria-hidden="true"></i></p>
                        </div>
                        <p class="fw-bold">${suggestedItems.productName}</p>
                        <small>${suggestedItems.price}</small>
        </div>`

        suggestedItemDisplay.appendChild(newSuggestedItems)
            // console.log(newSuggestedItems)
    }
}
addToSuggestedCartItem()


// like item icon
const likeItemIcon = document.querySelectorAll('.fa-heart')
likeItemIcon.forEach(icon => {
    icon.addEventListener('click', clickToLikeItem)

    function clickToLikeItem() {
        icon.classList.toggle('like-icon')
    }
    addToSuggestedCartItem()
});