$(document).ready(function () {
    //css animations
    new WOW().init();

    //owl carousel

    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots:true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // menu item click scroll to div

    $('a[href^="#"]').click(function () {

        var target = $(this).attr('href');

        $('html, body').animate({scrollTop: $(target).offset().top }, 800);
        return false;

    });
});



