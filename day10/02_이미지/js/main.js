
$(function(){

    let duration = 500

    // 이미지들
    const $images = $('#images p')

    // 첫 번째 이미지
    $images.filter(':nth-child(1)')
        .on('mouseover', function(){
            $(this).find('strong, span').stop().animate({ opacity:1}, duration);
        })
    
        .on('mouseout', function(){
            $(this).find('strong, span').stop().animate({ opacity:0}, duration);
        })

    // 두 번째 이미지
        $images.filter(':nth-child(2)')
        .on('mouseover', function(){
            $(this).find('strong, span').stop().animate({ opacity:1, left: '0%'}, duration, 'linear');
        })
    
        .on('mouseout', function(){
            $(this).find('strong, span').stop().animate({ opacity:0, left: '-200%'}, duration, 'linear');
        })

    // 세 번째 이미지
        $images.filter(':nth-child(3)')
        .on('mouseover', function(){
            $(this).find('strong').stop().animate({bottom: '0px'}, duration);
            $(this).find('span').stop().animate({opacity: 1}, duration);
            // $(this).find('img').stop().animate({top:'-20px'}, duration);
            $(this).find('img').stop().animate({zoom:1.5}, duration);
        })
    
        .on('mouseout', function(){
            $(this).find('strong').stop().animate({bottom: '-80px'}, duration);
            $(this).find('span').stop().animate({opacity: 0}, duration);
            // $(this).find('img').stop().animate({top:'0'}, duration);
            $(this).find('img').stop().animate({zoom:1.0}, duration);
        })
    
    
    
})