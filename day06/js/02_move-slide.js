

$(function() {
    let slide = $('slide')
    let list = $('.slide-list')
    let item = $('.slide-item')
    let prevBtn = $('.prev')
    let nextBtn = $('.next')

    let curretNo = 1            // 활성화된 슬라이드 번호
    let currentIndex = 0        // 활성화된 슬라이드 index
    let currentPosition =  0 // 현재 위치(left)

    // <li> 태그들의 가로/세로/개수
    let slideHeight = item.height()
    let slideWidth = item.width()
    let slideCount = item.length

    // <ul> 태그 가로 사이즈
    let totalSlideWidth = slideWidth * slideCount + 50
    list.css({
        width : totalSlideWidth,
        
    })

    // 이전 이미지 세팅
    // parseInt() : 숫자 타입의 값에서 정수값만 취한다.
    let initNum = parseInt( slideCount / 2 )  // 2

    for( let i = 0 ; i < initNum ; i ++  )
        $('.slide-item:last-child').prependTo(list)
    
    list.css({ left: currentPosition -= (slideWidth*initNum) })


    // 페이지 네비게이션
    for( let i = 0 ; i < slideCount ; i++) {
        let dot = "<a href='#' class='dot'></a>"
        $(".dots-box").append(dot)
    }
    $(".dot:first-child").addClass('active')


    // 투명도 세팅

    $('.slide-item').css({ opacity: 0.3 })
    $('.slide-item:nth-child(' + (initNum+1) + ')').css({ opacity : 1})
        
    


    
    // alert('세로/가로/개수 : ' + slideHeight + ',' + slideWidth + ',' + slideCount)

    // 이전 버튼 클릭 이벤트
    $('.prev').on('click', () => {
        // prependTo(부모요소) : 부모요소의 가장 앞의 자식요소로 추가
        $('.slide-item:last-child').prependTo(list)
        list.css({ left: currentPosition  -= slideWidth})


        // list.animate( 스타일, 실행시간, 실행 후 작업)
        // 0px + 400px  → left : +400px
        list.animate({ left: currentPosition += slideWidth }, 1000, function(){
        
        })

        $('.slide-item').stop().css({ opacity: 0.2 }, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({ opacity : 1}, 1000)
        
    
        // 1 - 1 : 5
        // 2 - 1 : 1, 3 - 1 : 2, 4 - 1 : 3
        
        if( curretNo == 1 )
            curretNo = slideCount
        else
            curretNo--      // currentNo = currentNo - 1

        // 현재 선택한 점만 활성화 되도록 active
        $(".dot").removeClass('active')
        $(".dot:nth-child(" + curretNo + ")").addClass('active')




    })
    
    
    // 다음 버튼 클릭 이벤트
    $('.next').on('click', () => {
        // appendTo: first-child를 맨 뒤로 옮김
        list.css({ left: currentPosition += slideWidth })
        $('.slide-item:first-child').appendTo(list)
            
        list.animate({ left: currentPosition -= slideWidth }, 1000, function(){
            //애니메이션 종료 후 작업
        })


        $('.slide-item').stop().css({ opacity: 0.2 }, 1000)
        $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({ opacity : 1}, 1000)
        

        if( curretNo == slideCount )
            curretNo =1
        else
            curretNo++      // currentNo = currentNo + 1

        // 현재 선택한 점만 활성화 되도록 active
        $(".dot").removeClass('active')
        $(".dot:nth-child(" + curretNo + ")").addClass('active')


    })
    
    
    // 페이지 네비게이션 클릭 이벤트
    $(document).on('click', '.dot', function() {
        // $(this) : 여러 요소 선택자로 지정된 요소 중, 이벤트가 발생한 현재 요소
        let index = $(this).index() // 순서번호를 반환 : 0 ~ (N-1)
        //    ex    2 - 0 
        let gap = index - currentIndex  // 선택한 index - 현재 활성화된 index
        let absGap = Math.abs(gap)      // gap의 절댓값

        // 활성화된 위치보다 앞의 이미지를 선택한 경우 (prev방향)
        if( gap < 0 ) {

            list.animate({ left: currentPosition += slideWidth*absGap }, 500, function(){
                //애니메이션 종료 후 작업
                for( let i = 0 ; i < absGap ; i++ ) {
                    $('.slide-item:last-child').prependTo(list)
                    list.css( { left: currentPosition -= (slideWidth) })
                } 

                $('.slide-item').stop().css({ opacity: 0.2 }, 1000)
                $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({ opacity : 1 }, 1000)
                
            })
            
        }

        // 활성화된 위치보다 뒤의 이미지를 선택한 경우 (next방향)
        if( gap > 0 ) {
            list.animate({ left: currentPosition -= slideWidth*absGap }, 500, function(){
                //애니메이션 종료 후 작업
                for( let i = 0 ; i < absGap ; i++ ) {
                    list.css( { left: currentPosition += (slideWidth) })
                    $('.slide-item:first-child').appendTo(list)
                } 

                $('.slide-item').stop().css({ opacity: 0.2 }, 1000)
                $('.slide-item:nth-child(' + (initNum+1) + ')').stop().animate({ opacity : 1 }, 1000)
                
            })

        }

        

        currentIndex = index
        curretNo = currentIndex + 1

        // 현재 선택한 점만 활성화 되도록 active
        $(".dot").removeClass('active')
        $(".dot:nth-child(" + curretNo + ")").addClass('active')



    })



})