

$(function() {
    const owl = $('.owl-carousel');
    
    owl.owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        autoplay:true,
        autoplayTimeout:1000,
        autoplayHoverPause:true,
        responsive:{
            0:{items:1},
            600:{items:3},
            1000:{items:4}
        },
        
    })

    //마우스 휠 옵션
    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });



})