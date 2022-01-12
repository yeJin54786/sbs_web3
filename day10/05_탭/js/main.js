
$(function(){

    $('#work').each(function(){

        //
        let $tabList = $(this).find('.tabs-nav')        //탭의 목록
        let $tabA = $tabList.find('a')                  //탭 a 태그
        let $tabPanels = $(this).find('.tabs-panel')    //패널
    
        //탭 클릭 시, 내부의 a 태그 클릭 이벤트
        $tabList.on('click', 'a', function(event){

            // a 태그는 페이지 이동 기본동작이 있는데,
            // 이 기본 동작을 취소시킨다.
            event.preventDefault()

            // 현재 선택한 탭
            let $this = $(this)

            // active 클래스가 있으면, (이미 탭이 클릭 된 상태)
            if( $this.hasClass('active') )
                return // 메서드 종료
            
            // 모든 탭의 active 클래스를 제거
            // 현재 선택한 탭만 active 클래스 추가
            $tabA.removeClass('active')
            $this.addClass('active')

            // 모든 패널을 숨기고 
            // 현재 선택한 탭과 연결된 패널만 보여주기
            $tabPanels.hide()
            // attr() : 요소의 특정 속성을 가져오거나 변경하는 메서드
            // $this.attr('href') : '#work01'
            $( $this.attr('href') ).show()
        })

        // trigger(): 특정 이벤트를 강제 발생시키는 메서드
        $tabA.eq(0).trigger('click')

    
    })
    
    
    
})