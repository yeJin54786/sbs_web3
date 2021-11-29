let slideIndex = 1;


$(function() {

    
    showSlides( slideIndex )


})


// 슬라이드 함수

function showSlides(n) {
    let i;
    let slides = $('.mySlides')
    let dots = $('.demo')
    let captionText = $('#caption')

    if( n > slides.length ) { slideIndex = 1 }
    if( n < 1 ) { slideIndex = slides.length }

    for( let i = 0 ; i < dots.length ; i++ ) {
        slides[i].css({ display : 'none' })
    }

    for( let i = 0 ; i < dots.length ; i++ ) {
        dots[i].removeClass('active')
    }


    slides[slideIndex-1].css( { display:'block' } )
    dost[slideIndex-1].addClass('active')
    captionText.html( dots[slideIndex-1].alt )


}