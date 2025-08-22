$(document).ready(function ($) {
    "use strict";

    $(".menu-toggle").click(function () {
        $(".main-navigation").toggleClass("toggled");
    });

    $(".header-menu ul li a").click(function () {
        $(".main-navigation").removeClass("toggled");
    });

    // Close mobile menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.main-navigation, .menu-toggle').length) {
            $(".main-navigation").removeClass("toggled");
        }
    });

    gsap.registerPlugin(ScrollTrigger);

    const elementFirst = document.querySelector('.site-header');

    ScrollTrigger.create({
        trigger: "body",
        start: "30px top",
        end: "bottom bottom",
        onEnter: () => elementFirst.classList.add('sticky_head'),
        onLeaveBack: () => elementFirst.classList.remove('sticky_head')
    });

    function myFunction(){
        elementFirst.classList.toggle('sticky_head');
    }
});
