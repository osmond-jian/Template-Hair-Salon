function checkBookingTimes () {
    alert("Thank you for checking in with us! Unfortunately, we are fully booked for the rest of this month.");
}

function sendEmail(){
    alert("Thank you for your email. We will respond as soon as possible! We appreciate your patience.");
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