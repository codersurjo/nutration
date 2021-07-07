jQuery(document).ready(function() {
    jQuery('.menu__btn').click(function() {
        jQuery('.menu_area_design').slideToggle();
    });
    jQuery(window).scroll(function() {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 10) {
            //clearHeader, not clearheader - caps H
            $(".header_area_design").addClass("header_area_design1");
        }
    })

    jQuery(".banner_area_design").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 0,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        responsiveClass: true,
        autoplayTimeout: 2000,
        smartSpeed: 800,
        nav: false,
        dots: false,
        items: 1,
    });

    // progressbar js 
    // progress bar js 
    const progress = document.querySelector('.progress-done');
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;





});