// Navbar animation
document.addEventListener("DOMContentLoaded", (event) => {

    const navbar = document.querySelector("nav");
    const navlinks = document.querySelectorAll(".nav-item");

    window.addEventListener('scroll', () => {
        const scroll = window.scrollY;

        for (i = 0; i < navlinks.length; i++) {
            if (scroll >= 50) {
                navlinks[i].style.fontSize = "1.1rem";
                logo.style.width = "40px";
            } else {
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
const date = new Date("November 18, 2019 16:34:20");
const year = date.getFullYear();

theYear.innerHTML = year;

// Show more button

$(".piece").css("display", "none");
$(".piece").slice(0, 3).show();

$("#loadMore").on("click", () => {
    $(".piece:hidden").slice(0, 3).slideDown();
    if ($("#featured-work div:hidden").length === 0) {
        $("#loadMore").fadeOut(800);
    }
});