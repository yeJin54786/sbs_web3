$(function() {

    $('.back-to-top').each(function() {

        //html, body 스크롤 가능한 요소를 가 ㅁ지
        let $el = $(scrollableElement('html','body'))


        // 투탑 버튼 클릭 이벤트
        $(this).on('click', function(event){
            //기본 동작 취소
            event.preventDefault()

            $el.animate({ scrollTop : 0}, 1000)
        })


    })
})


//scrollTop을 사용할 수 있는 요소를 감지하는 함수
function scrollableElement (elements) {
    var i, len, el, $el, scrollable;

     // 전달된 매개변수(elements)를 Array(배열)의 형태로 구성된 객체
    for (i = 0, len = arguments.length; i < len; i++) {
        el = arguments[i],
        $el = $(el);
        if ($el.scrollTop() > 0) {
            return el;
        } else {
             // scrollTop을 1로 지정했을때,
            // 적용되면 그 요소는 scrollTop이 가능한 요소로 판단
            $el.scrollTop(1);
            scrollable = $el.scrollTop() > 0;
             // 스크롤 가능한 요소
            $el.scrollTop(0);
            if (scrollable) {
                return el;
            }
        }
    }
    return [];
}
