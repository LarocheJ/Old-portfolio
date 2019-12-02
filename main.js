// Navbar animation
document.addEventListener("DOMContentLoaded", (event) => {

    var navbar = document.querySelector("nav");
    var navlinks = document.querySelectorAll(".nav-item");

    window.addEventListener('scroll', () => {
        var scroll = window.scrollY;

        for (i = 0; i < navlinks.length; i++) {
            if (scroll >= 50) {
                navlinks[i].style.fontSize = "1.1rem";
                navbar.style.boxShadow = "0px 1px 8px 0px rgba(0,0,0,0.1)";
                logo.style.width = "40px";
            } else {
                navbar.style.boxShadow = "none";
                logo.style.width = "50px";
                navlinks[i].style.fontSize = "1.2rem";
            }
        }
    })
})

//Responsive menu animation
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        //Burger Animation
        burger.classList.toggle('toggle')
    });

}

navSlide();

// Get the current year and print it in theYear located in the footer
var date = new Date("November 18, 2019 16:34:20");
var year = date.getFullYear();

theYear.innerHTML = year;