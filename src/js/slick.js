import $ from "jquery";
import 'slick-carousel';
import '../slick/slick.css';
import '../slick/slick-theme.css'

console.log($('h2'))
console.log('ok')


$(document).ready(function(){
    $('.slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '80px',
        slidesToShow: 6,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000,
        initialSlide: 3,
        appendArrows:$('.bureau__arrows'),
        responsive: [
            {
            breakpoint: 1800,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
            },
            {
                breakpoint: 1500,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 4
                }
                },
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

    $(document).ready(function(){
    $('.slider-services__slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '80px',
        slidesToShow: 6,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000,
        initialSlide: 3,
        appendArrows:$('.slider-services__slider-arrows'),
        responsive: [
            {
            breakpoint: 1700,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
            },
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

    $(document).ready(function(){
    $('.slider-industries__slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '80px',
        slidesToShow: 6,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000,
        initialSlide: 3,
        appendArrows:$('.slider-industries__arrows'),
        responsive: [
            {
            breakpoint: 1700,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
            },
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

    $(document).ready(function(){
    $('.slider-bureau__slider').slick({
        centerMode: true,
        arrows: true,
        centerPadding: '80px',
        slidesToShow: 6,
        autoplay:true,
        speed:1000,
        autoplaySpeed:2000,
        initialSlide: 3,
        appendArrows:$('.slider-bureau__arrows'),
        responsive: [
            {
            breakpoint: 1700,
            settings: {
                arrows: true,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 5
            }
            },
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