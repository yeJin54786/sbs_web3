
$(function(){

    let duration = 500

    // 사이드바
    let $aside = $('.page-main > aside')
    // 사이드바 open / close 버튼
    let $asideButton = $aside.find('button')

    // 사이드바 open / close 버튼 이벤트
    $asideButton.on('click', function(){
        // 해당 이름의 클래스를 있으면 제거, 없으면 추가(toggle)
        $aside.toggleClass('open')

        // 해당 이름의 클래스를 가지고 있는지 확인(true/false)
        if( $aside.hasClass('open') ){
            // 사이드바 close
            // attr 메서드: 속성을 확인/변경하는 메서드
            $aside.stop().animate({ left:'-70px'},duration,'linear')
            $asideButton.find('img').attr('src','img/btn_close.png')
        } else {
            // 사이드바 open
            $aside.stop().animate({ left:'-350px'},duration,'linear')
            $asideButton.find('img').attr('src','img/btn_open.png')
        }
    })
})