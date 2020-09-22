import $ from "jquery";
import 'slick-carousel';
import '../slick/slick.css';
import '../slick/slick-theme.css'

$(document).ready(function () {
    $('.slider-services__slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '0px',
        slidesToShow: 4,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        initialSlide: 3,
        appendArrows: $('.slider-services__slider-arrows'),
        responsive: [
            
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function () {
    $('.slider-industries__slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '0px',
        slidesToShow: 4,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 2000,
        initialSlide: 3,
        appendArrows: $('.slider-industries__arrows'),
        responsive: [
            
            {
                breakpoint: 1280,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '0px',
                    slidesToShow: 1
                }
            }
        ]
    });
});