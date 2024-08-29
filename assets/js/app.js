$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,      // Shows one slide at a time
        slidesToScroll: 1,    // Scrolls one slide at a time
        autoplay: true,       // Enables autoplay
        autoplaySpeed: 1500,  // Sets autoplay speed to 1500 milliseconds
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1  // Adjusted to show 1 slide per scroll
                }
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1  // Adjusted to show 1 slide per scroll
                }
            }
        ]
    });
});
