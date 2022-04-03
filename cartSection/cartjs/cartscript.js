import { categories } from "../../allproducts/js/categories.js";

const addToCartButton = document.querySelector('.add-to-cart-btn')
const itemQuantity = document.querySelector('#quantity')
const cartItem = document.querySelector('.cartNo')
const addcart = document.querySelector('#addcart')

let count = 0;

addToCartButton.addEventListener('click', function(e) {
    e.preventDefault();
    count++;
    cartItem.innerHTML = count
    let cart = JSON.parse(sessionStorage.getItem('cart'))

    const categoryRequested = window.location.search.slice(1,window.location.search.length).toLowerCase()

    let category = categoryRequested.split('+')[0];
    let productAlias = categoryRequested.split('+')[1];
    let product = productAlias.split('%20').join(' ')

    let productObjectsArray = categories[category]

    for (let item of productObjectsArray) {
        if (product === item.productName.toLowerCase()){
            console.log(item)
            cart.push(item)
            sessionStorage.setItem('cart', JSON.stringify(cart))
            console.log(cart)
        }
    }

});

// like icon
const likeItemIcon = document.querySelector('.fa-heart')
likeItemIcon.addEventListener('click', function() {
    icon.addEventListener('click', clickToLikeItem)
})

const mainImage = document.querySelector('#main-image');
const optionImages = document.querySelectorAll('.option-image');
const firstPreviewImage = document.querySelector('.previw-img-1');
const secondPreviewImage = document.querySelector('.previw-img-2');
const thirdPreviewImage = document.querySelector('.previw-img-3');

optionImages.forEach((option) => {
    option.addEventListener('click', function(e) {
        e.preventDefault()
        mainImage.src = option.src;
        firstPreviewImage.src = option.src;
        secondPreviewImage.src = option.src;
        thirdPreviewImage.src = option.src;
    })
})






    // for(let cart of cartitem){
    //     console.log(cart.)
    //         inputData[input.name] = input.value
    //         input.value = ''
    // }
    // sessionStorage.setItem('what', JSON.stringify(inputData))
    // console.log(inputData)
// })