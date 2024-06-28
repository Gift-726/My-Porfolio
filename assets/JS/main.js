//  tooglebbtn

let menuIcon = document.querySelector('#menu');
let navBar = document.querySelector('.nav-bar');

menuIcon.onclick =  ()  =>
{
    menuIcon.classList.toggle('bx-x');
    navBar.classList.toggle('active');
}

//  scroll section active link?
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top =  window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


if (top >= offset && top < offset + height)  {
    navLinks.forEach(links => {
        links.classList.remove('active');
        
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active')
    });
};

// sticky nav bar 

    });
    let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navBar.classList.remove('active');

};

// Scroll reveal

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});


// Typed JS
const typed = new Typed('.multiple', {
    strings: ['Frontend Developer', 'Web Developer', 'Digital Marketer'],
    backSpeed: 100,
    typeSpeed: 100,
    backDelay: 1000,
    loop: true
});