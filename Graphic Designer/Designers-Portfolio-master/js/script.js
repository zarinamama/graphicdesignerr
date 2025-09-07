
let viewMoreBtn = document.getElementById('loadMore');

// Slick slider initializer

$(document).ready(function () {
    $('.container .customer-logos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});

// Slider initialiser for testimonials
$(document).ready(function () {
    $(' .testimonials').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});

// Simple light-box
var lightbox = new SimpleLightbox('.portfolio a', { /* options */ });


// View more button functionality
//viewMoreBtn.addEventListener('click', view());

function view() {
    let content = document.getElementsByClassName('moreBox')[1];
    if (content.style.display === "none") {
        content.style.display = "grid";
        viewMoreBtn.innerText = "View Less";

    } else {
        content.style.display = "none";
        viewMoreBtn.innerHTML = "View More";
    }
}

// Functionality for visited links
const navLinks = document.getElementsByClassName('nav-item');

for (let i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        let currentLink = document.querySelector('.active');
        currentLink.classList.toggle('active');
        let clickedLink = e.target.parentNode;
        clickedLink.classList.toggle('active');
    })
}


// Scroll reveal animation
$(document).ready(function () {
    window.sr = new ScrollReveal();
    sr.reveal('.service:nth-of-type(1), .about img', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.service:nth-of-type(2)', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.service:nth-of-type(3), .hero img', {
        duration: 1000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.about #about, .contactform', {
        duration: 1000,
        origin: 'right',
        distance: '200px',
        opacity: 0,
        scale: 0.8,
    });
    sr.reveal('.skillbox .item:nth-of-type(1)', {
        duration: 1000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skillbox .item:nth-of-type(2)', {
        duration: 1500,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skillbox .item:nth-of-type(3)', {
        duration: 2000,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.skillbox .item:nth-of-type(4)', {
        duration: 2500,
        origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.rating', {
        duration: 1000,
        //origin: 'bottom',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.cred:nth-of-type(1), .cred:nth-of-type(3)', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.cred:nth-of-type(2), .cred:nth-of-type(4)', {
        duration: 1000,
        origin: 'right',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });

    sr.reveal('#projects, #clients, #testimonials, #contact, #skills', {
        duration: 1000,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.blogBox, .container', {
        duration: 1000,
        //origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.2
    });
    sr.reveal('.sectitle', {
        duration: 2500,
        origin: 'left',
        distance: '300px',
        opacity: 0,
        scale: 0.8
    });
    sr.reveal('.viewmore, .navbar-btn', {
        duration: 3000,
        //distance: '300px',
        opacity: 0,
        scale: 0.8
    });
});
