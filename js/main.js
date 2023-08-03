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

//set up a counter to keep track of what slide we are on
let currentSlide = 0;

//this variable is just to grab all the elements that need the color gradient change
const slideshowMatch = document.body.querySelectorAll('.slideshowMatch');

//manage possible currentSlide counter overflow (less than 0 or more than array length)
function manageOverflow () {
    if (currentSlide === slideshowSalonBackground.length){
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = (slideshowSalonBackground.length - 1);
    } else {
        return;
    }
}

//This function fires when the left/right arrow keys are used to navigate the slideshow
function plusSlides (num) {
    //increase currentSlide counter    
    currentSlide = currentSlide + num;
    manageOverflow();
    currentSlideStorage(currentSlide);

    //change background image of home section element
    document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlide)].backgroundImage;

    //change background color for elements with the class .slideshowMatch for color matching
    slideshowMatch.forEach((element) => {
        element.style.background= slideshowSalonBackground[(currentSlide)].backgroundColor;
    });
    addCurrentclassClassList((currentSlide+1));
}

//This function fires when the catalogue dots are used to navigate the slideshow
function setCurrentSlide (num) {
    currentSlide = num -1;
    currentSlideStorage(currentSlide);
    document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlide)].backgroundImage;
    slideshowMatch.forEach((element) => {
        element.style.background= slideshowSalonBackground[(currentSlide)].backgroundColor;
    });
    addCurrentclassClassList(num);
}

//This function adds and removes the "currentSlide" class onto the correct elements for the slideshow
function addCurrentclassClassList (num) {
    console.log(num);
    document.body.querySelector('.currentSlide').classList.remove("currentSlide");
    document.body.querySelector(`.slide${num}`).classList.add("currentSlide");

}

//This function updates the local.storage of the browser to remember the slideshow positon
function currentSlideStorage (num) {
    if (!localStorage.getItem("currentSlide")) {
        localStorage.setItem("currentSlide", 0);
    } else if (!num) {
        const previousSessionCurrentSlide = localStorage.getItem("currentSlide");
        currentSlide = Number(previousSessionCurrentSlide);
        //probably a way to refactor to combine this and setCurrentSlide
        document.body.querySelector('#home_section').style.backgroundImage = slideshowSalonBackground[(currentSlide)].backgroundImage;
        slideshowMatch.forEach((element) => {
            element.style.background= slideshowSalonBackground[(currentSlide)].backgroundColor;
        });
        addCurrentclassClassList((currentSlide + 1));
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











//onload functions
currentSlideStorage();