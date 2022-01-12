$(function (){


    // 버튼의 애니메이션 지속시간
    let duration = 500

    $('#buttons1 button.animate1')
    .on('mouseover', function(){
        // 마우스를 요소에 올렸을 때
        $(this).animate({
            backgroundColor: 'blue',
            color: 'white'
        }, duration)
    })
    .on('mouseout', function(){
        // 마우스 커서가 요소를 벗어날 때
        $(this).animate({
            backgroundColor: 'white',
            color: 'black'
        }, duration)
    })



    $('#buttons1 button.animate2')
    .on('mouseover', function(){
        // 마우스를 요소에 올렸을 때
        $(this).animate({
            'border-bottom-width': '10px',
            'border-bottom-color': 'blue',
            top:'-10px',
            color: 'white'  
        }, duration)
    })
    .on('mouseout', function(){
        // 마우스 커서가 요소를 벗어날 때
        $(this).animate({
            'border-bottom-width': '0',
            top:'0px',
            color: 'black'
        }, duration)
    })



    $('#buttons1 button.animate3')
    .on('mouseover', function(){
        // 마우스를 요소에 올렸을 때
        $(this).find('> span').stop().animate({ width: '100%'}, duration, 'linear')
        
    })
    .on('mouseout', function(){
        // 마우스 커서가 요소를 벗어날 때
        $(this).find('> span').stop().animate({ width: '0%' }, duration, 'linear')
    })

})