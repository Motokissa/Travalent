$(document).ready(function () {
    $('.sliders').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: true,
        
        prevArrow:"<button type='button' class='btn-slick-prev btn btn-slider'><img src='img/left.slider.svg' alt='prev'></button>",
        nextArrow:"<button type='button' class='btn-slick-next btn btn-slider'><img src='img/right.slider.svg' alt='next'></button>",

    });
});