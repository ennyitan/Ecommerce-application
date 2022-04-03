(function() {

    const customerReview = [
        {   
            picture: "client-1",
            name: "Robenson",
            review: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock"
        },

        {
            picture: "client-2",
            name: "Handeson",
            review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable."
        },

        {
            picture: "client-3",
            name: "Zigla",
            review: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."
        },

        {
            picture: "client-4",
            name: "Isabella",
            review: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

        {
            picture: "client-5",
            name: "Movic",
            review: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable."
        },

        {
            picture: "client-6",
            name: "Ayockson",
            review: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text."
        },

        {
            picture: "client-7",
            name: "Bencason",
            review: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },
        {
            picture: "client-8",
            name: "Nightbirde",
            review: "Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        },

        
    ]

let counter = 0;
    
    const buttons = document.querySelectorAll('.btn');
    const clientImage = document.querySelector('.client-image');
    const clientText = document.querySelector('.client-text');
    const clientName = document.querySelector('.client-name');

    console.log(buttons)

    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('click')
            if (button.classList.contains('nextBtn')) {
                counter++;
                if (counter > customerReview.length-1) {
                    counter = 0;
                }
                clientImage.src = `images/${customerReview[counter].picture}.jpg`;
                clientText.innerHTML = customerReview[counter].review;
                clientName.innerHTML = customerReview[counter].name
            }

            if (button.classList.contains('prevBtn')) {
                counter--;
                if (counter < 0) {
                    counter = customerReview.length-1;
                }
                clientImage.src = `images/${customerReview[counter].picture}.jpg`;
                clientText.innerHTML = customerReview[counter].review;
                clientName.innerHTML = customerReview[counter].name
            }
        })
    });

})()