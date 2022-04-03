//  modal drop down
// close Event here 
let closeBtn = document.querySelector('.close')
let closeBtnReg = document.querySelector('#closeReg')
let loginModal = document.querySelector('.login-modal')
let registerModal = document.querySelector('#register')
closeBtn.addEventListener('click', function() {
        loginModal.style.top = "-1000px";
    })
    // purchase section

let explore = document.getElementById('purchase-btn')
explore.addEventListener('click', function(e) {
        e.preventDefault()
        loginModal.style.top = "0%";
    })
    // let exploreReg = document.getElementById("dropbtnReg")
    // exploreReg.addEventListener('click', function() {
    //     registerModal.style.top = "20%";
    // })
closeBtnReg.addEventListener('click', function() {
    registerModal.style.top = "-1000px";
})