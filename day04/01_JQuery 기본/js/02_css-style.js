// 문서가 준비 되었을 때, 실행되는 함수

$(function() {
    $('#item1').css('color', 'hotpink');
    
    $('#item2 ,inner').css('transform', 'rotate(20deg)');

    $('#item3, inner').css('opacity, 0.2')

    $('#item3 .inner').css({
        'color': 'hotpink',
        'font-size': '50px',
        'border': '1px solid blue',
        'width': '400px',
        'height': '400px',
        'line-height': '400px'
    });


    $('#item4 .inner').css({
        color: 'hotpink',
        fontSize: '50px',
        border: '1px solid blue',
        width: '400px',
        height: '400px',
        lineHeight: '400px'
    });
    
});