

$(function() {
    let slide = $('slide')
    let list = $('.slide-list')
    let item = $('.slide-item')
    let prevBtn = $('.prev')
    let nextBtn = $('.next')


    // <li> 태그들의 가로/세로/개수
    let slideHeight = item.height()
    let slideWidth = item.width()
    let slideCount = item.length

    // <ul> 태그 가로 사이즈
    let totalSlideWidth = slideWidth * slideCount + 50
    list.css({
        width : totalSlideWidth,
        marginLeft : -slideWidth
    })
    
    // alert('세로/가로/개수 : ' + slideHeight + ',' + slideWidth + ',' + slideCount)

    // 이전 버튼 클릭 이벤트
    $('.prev').on('click', () => {
        // list.animate( 스타일, 실행시간, 실행 후 작업)
        list.animate({ left: -slideWidth}, 500, function(){
            $('.slide-item:last-child').prependTo(list)
            list.css({left:''})
        })
    })
    
    
    // 다음 버튼 클릭 이벤트
    $('.next').on('click', () => {
        list.animate({ left: -slideWidth}, 500, function(){
            $('.slide-item:last-child').prependTo(list)
            list.css({left:''})
        })



    })
    
    
})