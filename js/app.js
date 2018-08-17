var desktop_width = 992;

$(document).ready(function () {
    initCarousel();
    initParallax();
    initScrollReveal();
});

function initParallax() {
    // new Rellax('#header', {});

    if ($(window).width() >= desktop_width) {
        var upSpeed = .5;
        var downSpeed = -.5;

        new Rellax('#member .description', {
            center: true,
            speed: downSpeed
        });

        new Rellax('#booking .description', {
            center: true,
            speed: downSpeed
        });

        new Rellax('.portraits', {
            center: true,
            speed: upSpeed
        });

        new Rellax('.video', {
            center: true,
            speed: upSpeed
        });
    }
}

function initScrollReveal() {
    window.sr = ScrollReveal({
        scale: 1.0
    });
    var fastReveal = 1000;
    var slowReveal = 2000;
    sr.reveal('#header .logo-container', {
        duration: fastReveal,
        reset: true
    });
    sr.reveal('#header .caption-container', {
        duration: slowReveal,
        reset: true
    });
    sr.reveal('#events .key-visual', {
        duration: fastReveal
    });
    sr.reveal('#events .description');
}

function initCarousel() {
    $('.camp .slick-carousel').slick({
        dots: true,
        infinite: true,
        speed: 400,
        // slidesToShow: 2,
        // centerMode: true,
        variableWidth: true,
        arrows: false,
        autoplay: true
    });
}