$(document).ready(function () {
    // slider slick
    $('#slider-m-partners').slick({
        variableWidth: true,
        slidesToScroll: 1,
        infinite: false,
        slidesToShow: 3.5,
        prevArrow: $('#btn_partners_prev'),
        nextArrow: $('#btn_partners_next'),
        rows: 0,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 2.2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1800,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1,
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                }
            },
        ]
    });// ./ slider slick

    function setProgress(index) {
        const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

        $progressBar
            .css('background-size', `${calc}% 100%`)
            .attr('aria-valuenow', calc);
    }

    const $slider = $('#m-proud_slider');
    const $progressBar = $('#proud-progress');

    $slider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        setProgress(nextSlide);
    });

    // slider slick proud
    $('#m-proud_slider').slick({
        // variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: $('#btn_proud_prev'),
        nextArrow: $('#btn_proud_next'),
        // rows: 0,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1.2,
                    slidesToScroll: 1,
                    fade: false,
                }
            },
        ]
    });// ./ slider slick proud

    setProgress(0);
});