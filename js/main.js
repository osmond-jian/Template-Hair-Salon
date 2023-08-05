//Button event listeners
document.body.querySelector('#services').addEventListener('click', () => servicesButton('services_section'));
document.body.querySelector('#readMore').addEventListener('click', () => servicesButton('../blog.html'));

const bookOnline = document.querySelectorAll(".bookOnline");
const eventListenerOnBookOnlineButton = function () {
    Array.from(bookOnline).forEach((element) => {
        element.addEventListener('click', () => servicesButton('../booking.html'));
    })
}
eventListenerOnBookOnlineButton();

//Handle button logic for all buttons
function servicesButton (button) {
    if (button === 'services_section'){
        document.getElementById(button).scrollIntoView({behavior:'smooth'});
    } else {
        window.location.href=button;
    }
    console.log ('servicesButton function has fired');
}


//Slideshow javascript


//set up a counter to keep track of what slide we are on
let currentSlideArrayIndex = 0;

//Array containing location of slideshow pictures and the css for a matching color gradient
const slideshowSalonBackground = [
    {
        backgroundImage: "url(\"img/slideshow/salon.jpg\")",
        backgroundColor: "linear-gradient(to right, #cf738c, #E7d8dd)"
    },

    {
        backgroundImage: "url(\"img/slideshow/salon2.jpg\")",
        backgroundColor: "linear-gradient(to right, #E79623, #E5A87B)"
    },

    {
        backgroundImage: "url(\"img/slideshow/salon3.jpg\")",
        backgroundColor: "linear-gradient(to right, #B3B7A7, #DFB292)"
    }
    ];


//this variable is just to grab all the elements that need the color gradient change
const slideshowMatch = document.body.querySelectorAll('.slideshowMatch');

//manage possible currentSlide counter overflow (less than 0 or more than array length)
function manageOverflow () {
    if (currentSlideArrayIndex === slideshowSalonBackground.length){
        currentSlideArrayIndex = 0;
    } else if (currentSlideArrayIndex < 0) {
        currentSlideArrayIndex = (slideshowSalonBackground.length - 1);
    } else {
        return;
    }
}

//This function fires when the left/right arrow keys are used to navigate the slideshow
function plusSlides (num) {
    //increase currentSlideArrayIndex counter    
    currentSlideArrayIndex = currentSlideArrayIndex + num;
    manageOverflow();
    currentSlideStorage(currentSlideArrayIndex);

    //change background image of home section element
    document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlideArrayIndex)].backgroundImage;

    //change background color for elements with the class .slideshowMatch for color matching
    slideshowMatch.forEach((element) => {
        element.style.background= slideshowSalonBackground[(currentSlideArrayIndex)].backgroundColor;
    });
    addCurrentclassClassList((currentSlideArrayIndex));
}

//This function fires when the catalogue dots are used to navigate the slideshow
function setCurrentSlide (num) {
    currentSlideArrayIndex = num;
    currentSlideStorage(currentSlideArrayIndex);
    document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlideArrayIndex)].backgroundImage;
    slideshowMatch.forEach((element) => {
        element.style.background= slideshowSalonBackground[(currentSlideArrayIndex)].backgroundColor;
    });
    addCurrentclassClassList(num);
}

//This function adds and removes the "currentSlide" class onto the correct elements for the slideshow
function addCurrentclassClassList (currentSlideArrayIndex) {
    document.body.querySelector('.currentSlide').classList.remove("currentSlide");
    document.body.querySelector(`.slide${Number(currentSlideArrayIndex) + 1}`).classList.add("currentSlide");

}

//This function updates the local.storage of the browser to remember the slideshow positon
function currentSlideStorage (num) {
    if (!localStorage.getItem("currentSlide")) {
        localStorage.setItem("currentSlide", 0);
    } else if (num === "onLoad") {
        const previousSessionCurrentSlide = localStorage.getItem("currentSlide");
        currentSlideArrayIndex = Number(previousSessionCurrentSlide);
        //probably a way to refactor to combine this and setCurrentSlide
        document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlideArrayIndex)].backgroundImage;
        slideshowMatch.forEach((element) => {
            element.style.background= slideshowSalonBackground[(currentSlideArrayIndex)].backgroundColor;
        });
        addCurrentclassClassList((currentSlideArrayIndex));
    } else {
        localStorage.setItem("currentSlide", num);
    }
}



//Lookbook Logic
function toggleEnlargeImage (img) {
    const image = document.getElementById(img);
    const imageLink = `${image.src}`;
    const photoViewerImage = document.body.querySelector("#photoViewerImage");
    const photoViewer = document.body.querySelector("#photoViewer");

    if (photoViewer.style.display === "none"){
        photoViewerImage.src = imageLink;
        photoViewer.setAttribute("style", "display:flex;");
    } else {
        photoViewer.setAttribute("style", "display:none;");
    }
}

//javascript for hamburger menu
function hamburgerMenuButton () {
    const menuItems = document.getElementById('hamburgerMenuItems');
    if (menuItems.style.display === "none") {
        menuItems.style.display = "block";
    } else if (menuItems.style.display === "block") {
        menuItems.style.display = "none";
    } else {
        menuItems.style.display = "block";
        console.log (menuItems, menuItems.style.display);
    }
}

//onload functions
currentSlideStorage("onLoad");