function bookOnline(){
    window.location.href="booking.html";
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