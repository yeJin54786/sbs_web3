let slideIndex = 1;

$(function() {

    showSlides( slideIndex )
    
})


function plusSlides(n) {
    showSlides(slideIndex += n)
}


function currentSlide(n)  {
    showSlides(slideIndex = n)
}


// 슬라이드 함수
function showSlides(n) {
    let slides = $('.mySlides')
    let dots = $('.demo')
    let captionText = $('#caption')

    if( n > slides.length ) { slideIndex = 1 }
    if( n < 1 ) { slideIndex = slides.length }

    for( let i = 0 ; i < slides.length ; i++ ) {
        $(slides[i]).css( { display : 'none' } )
    }

    for( let i = 0 ; i < dots.length ; i++ ) {
        $(dots[i]).removeClass('active')
    }

    $(slides[slideIndex-1]).css( { display : 'block' })
    $(dots[slideIndex-1]).addClass('active')
    captionText.text( $(dots[slideIndex-1]).attr('alt') )

}
