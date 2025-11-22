$(document).ready(function(){
    var windowWidth = $(window).width();
    if(windowWidth < 1200){
        $('.article_read_also_wrapper').slick({
            dots: false,
            arrows:false,
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay:true,
            autoplaySpeed: 3000,
        });
    } else {
        $('.article_read_also_wrapper').slick('unslick');
    }
})