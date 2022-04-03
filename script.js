// CODE FOR SLIDE SHOW 
if(!sessionStorage.getItem('cart')) {
    sessionStorage.setItem('cart', JSON.stringify([]))
}

let slideImage = ['bite1.webp','bite2.webp','bite3.webp','bite4.webp']
let sliderText = ['Enjoy Your shopping with us', "Giving You The Best You Deserve", "Your Satisfaction is our Pleasure", "Thank you for shopping with us"]
let count = 0
let textSliding = document.querySelector('.textslide')
let headerSlider = document.querySelector('.slider')
headerSlider.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/${slideImage[count]})`
setInterval(() => {
    textSliding.innerHTML= sliderText[count]
    headerSlider.style.backgroundImage=`linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(images/${slideImage[count]})`
    headerSlider.animate([
        {transform: 'scale(1.03)',
            opacity:0.5
        },
        {transform:'scale(1)',
            opacity:1
        }
    ], {
        duration:500,
    })
     if(count === slideImage.length - 1  ) {
         count = 0;
     }
     count ++
    
},4000);

// categories
