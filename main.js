// Navbar animation
document.addEventListener("DOMContentLoaded", function (event) {

    window.addEventListener("scroll", function () {
        var scroll = window.scrollY;
        var navbar = document.querySelector("nav");
        var navlinks = document.querySelectorAll(".menu-item");

        if (scroll >= 50) {
            navbar.style.boxShadow = "0px 1px 8px 0px rgba(0,0,0,0.1)";
            logo.style.width = "40px";

            for (i = 0; i < navlinks.length; i++) {
                navlinks[i].style.fontSize = "1.1rem";
            }

        } else {
            navbar.style.boxShadow = "none";
            logo.style.width = "50px";

            for (i = 0; i < navlinks.length; i++) {
                navlinks[i].style.fontSize = "1.2rem";
            }
        }
    })

})
// Get the current year and print it in theYear located in the footer
var date = new Date("November 18, 2019 16:34:20");
var year = date.getFullYear();

theYear.innerHTML = year;