//Button event listeners
document.body.querySelector('#services').addEventListener('click', () => servicesButton('services_section'));
document.body.querySelector('#readMore').addEventListener('click', () => servicesButton('../blog.html'));

const bookOnline = document.querySelectorAll(".bookOnline");
const eventListenerOnBookOnlineButton = function () {
    console.log('test')
    Array.from(bookOnline).forEach((element) => {
        element.addEventListener('click', () => servicesButton('../booking.html'));
        console.log(element+'has event listener added');
    })
}
eventListenerOnBookOnlineButton();


function servicesButton (button) {
//case1: Services Button
    if (button === 'services_section'){
        document.getElementById(button).scrollIntoView({behavior:'smooth'});
    } else {
        window.location.href=button;
    }
    console.log ('servicesButton function has fired');
}


//slideshow

const slideshowSalonBackground = [
    {
        backgroundImage: "url(\"../img/slideshow/salon.jpg\")",
        backgroundColor: "linear-gradient(to right, #cf738c, #E7d8dd)"
    },

    {
        backgroundImage: "url(\"../img/slideshow/salon2.jpg\")",
        backgroundColor: "linear-gradient(to right, #E79623, #E5A87B)"
    },

    {
        backgroundImage: "url(\"../img/slideshow/salon3.jpg\")",
        backgroundColor: "linear-gradient(to right, #B3B7A7, #DFB292)"
    }
    ];

let currentSlide = 0;
const slideshowMatch = document.body.querySelectorAll('.slideshowMatch');

function manageOverflow () {
//manage possible currentSlide counter overflow (less than 0 or more than array length)
    if (currentSlide === slideshowSalonBackground.length){
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = (slideshowSalonBackground.length - 1);
    } else {
        return;
    }
}

function plusSlides (num) {
    //increase currentSlide counter    
    currentSlide = currentSlide + num;
    manageOverflow();

    //change background image of home section element
    document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlide)].backgroundImage;

    //change background color for elements with the class .slideshowMatch for color matching
    slideshowMatch.forEach((element) => {
        element.style.background= slideshowSalonBackground[(currentSlide)].backgroundColor;
    });


    addCurrentclassClassList((currentSlide+1));
}

function setCurrentSlide (num) {
    currentSlide = num -1;
    document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlide)].backgroundImage;
    slideshowMatch.forEach((element) => {
        element.style.background= slideshowSalonBackground[(currentSlide)].backgroundColor;
    });
    addCurrentclassClassList(num);
}

function addCurrentclassClassList (num) {
    document.body.querySelector('.currentSlide').classList.remove("currentSlide");
    document.body.querySelector(`.slide${num}`).classList.add("currentSlide");
}