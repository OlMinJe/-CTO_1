$(document).ready(function(){
});

/* 모바일 메뉴 */
function mobile_menu() {
    var menu = $('.menu_list').css('display');
    if( menu == 'none') {
        $('.menu_list').css('display','block');
    } else {
        $('.menu_list').css('display','none');
    }
}

/* 새고할 때 고정 (작업 필요) https://snupi.tistory.com/195 */
/*window.addEventListener('beforeunload', (event) => {
    // 표준에 따라 기본 동작 방지
    event.preventDefault();
    // Chrome에서는 returnValue 설정이 필요함
    event.returnValue = '';
});
*/