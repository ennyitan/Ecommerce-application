// remove item section
const toRemoveButton = document.querySelectorAll('.removeButton')

for (let i = 0; i < toRemoveButton.length; i++) {
    const removeButton = toRemoveButton[i];
    removeButton.addEventListener('click', clickToRemoveItem)
}

function clickToRemoveItem(e) {
    e.preventDefault()
    const removeButton = e.target
    removeButton.parentElement.parentElement.parentElement.remove();
    updateCartTotal()
}


// to change quantity
const quantityInputs = document.querySelectorAll('.quantity-input')

for (let i = 0; i < quantityInputs.length; i++) {
    let inputs = quantityInputs[i]
    inputs.addEventListener('change', changeInputQuantity);
}

function changeInputQuantity(e) {
    let inputs = e.target
    if (inputs.value <= 0 || inputs.value == NaN) {
        inputs.value = 1;
    }
    updateCartTotal();
}

// pricing section
const totalPrice = document.querySelector('#total-price')

function updateCartTotal() {
    let total = 0;
    const cartItemContainer = document.querySelector('.sub-added-item-display')
    const cartRows = cartItemContainer.getElementsByClassName('cart-row')
    for (let i = 0; i < cartRows.length; i++) {
        const mycartRow = cartRows[i]
        const myItemPriceElement = mycartRow.getElementsByClassName('item-price')[0];
        const myItemQuantity = mycartRow.getElementsByClassName('quantity-input')[0]

        console.log(myItemPriceElement, myItemQuantity)
        const itemPrice = parseFloat(myItemPriceElement.innerHTML.replace('$', ''));
        const itemQuantity = myItemQuantity.value
        total += (itemPrice * itemQuantity);
        totalPrice.innerText = '$' + total;
        console.log(totalPrice)
    }

}
updateCartTotal()


// js for loopig through carts items 
const addedItemsDisplay = document.querySelector('.sub-added-item-display-one')
const totaItemsAdded = document.querySelector('#items')
const mySubtotal = document.querySelector('#sub-total')
let sesionItems = JSON.parse(sessionStorage.getItem('cart'));
console.log(sesionItems)

function addToCartItems() {
    let subtotal = 0;
    for (let i = 0; i < sesionItems.length; i++) {
        const items = sesionItems[i];
        const itemImg = items.image;
        const itemName = items.productName;
        const itemPrice = items.price
        console.log(`Price e ${itemPrice.split('').splice(1,1).join()}`)
        console.log(itemPrice)
        subtotal += (itemPrice.replace('$', ''));
        console.log(subtotal)
        totaItemsAdded.innerHTML = (sesionItems.length);

        const newCartRow = document.createElement('div');
        newCartRow.classList.add('cart-row')

        newCartRow.innerHTML += `
        <div class="item grey-bg-color">
                        <img src="${itemImg}" alt="" width="100%">
                    </div>
                    <div class="item">
                        <p class="text-margin-bt">${itemName}</p>
                        <p class="text-margin-bt">Size</p>
                        <p class="text-margin-bt">Color</p>
                        <div class="quantity">
                            <button class="quantity-btn subtract">-</button>
                            <input type="number" class="quantity-btn text-align-center quantity-input" id="input-quantity" value="1">
                            <button class="quantity-btn add">+</button>
                        </div>
                    </div>
                    <div class="item price-item">
                        <p>Price &nbsp;<span class="item-price orange-txt">${itemPrice}</span></p>
                        <p class=""><i class="fa-solid fa-xmark removeButton"></i></p>
                    </div>`
        addedItemsDisplay.appendChild(newCartRow)
        newCartRow.querySelectorAll('.removeButton')[0].addEventListener('click', clickToRemoveItem);
        newCartRow.querySelectorAll('.quantity-input')[0].addEventListener('click', changeInputQuantity);
    }
    updateCartTotal()
}
addToCartItems()