$(function () {

    /*
     * Sticky header
     */

    //each() 메서드: 해당 배열/리스트가 가진  요소들을 모두 반복하는 반복문이다.
    $('.page-header').each(function () {

        var $window = $(window), // 창을 jQuery 오브젝트 화
            $header = $(this),   // 헤더를 jQuery 객체 화
            // 헤더의 기본 위치를 검색

            // offset() 메서드: 선택한 요소의 좌표값을 가져오거나 저장하는 메서드
            // $header.offset().top : 헤더 요소의 top 속성값을 확인
            headerOffsetTop = $header.offset().top;

        // 윈도우의 스크롤 이벤트를 모니터링
        // (창이 스크롤 할 때마다 작업을 수행하기)
        $window.on('scroll', function () {
            // 윈도우의 스크롤 량을 확인하고,
            // 헤더의 기본 위치를 지나서 있으면 클래스를 부여,
            // 그렇지 않으면 삭제
            // $window.scrollTop(): 현재 스크롤된 위치에서의 top 속성값
            if ($window.scrollTop() > headerOffsetTop) {
                $header.addClass('sticky');
                $header.addClass('bg');
            } else {
                $header.removeClass('sticky');
                $header.removeClass('bg');
            }
        });

        // 윈도우의 스크롤 이벤트를 발생시키는
        // (헤더의 초기 위치를 조정하기 위해)
        $window.trigger('scroll');

    });
});
