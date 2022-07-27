$(document).ready(function(){
    main_table_active();
});

let mainvisual_swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});

const sub_swiper = new Swiper('.sub_swiper_wrap .swiper-container', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    slideToClickedSlide: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 30,
        slideShadows: false,
    },
});

function main_table_active(){
    mainCommunity_table();
    mainEditor_table();
    mainCommunity_li_active();
}
let title_01 = ["일상", "취미", "유머", "정보", "취업/진로", "기타"]; //추후 삭제
let mainCommunity_li = document.querySelectorAll('.main_community_menu li');
let mainCommunity_content = document.getElementById('main_community_table');
let mainEditor_content = document.getElementById('main_editor_table');


function mainCommunity_li_active(){
    for(let i = 0; i < mainCommunity_li.length; i++) {
        mainCommunity_li[i].addEventListener("click", function () {
            while (mainCommunity_content.hasChildNodes()) {
                mainCommunity_content.removeChild(mainCommunity_content.firstChild);
            }
            for(let j = 0; j < mainCommunity_li.length; j++){
                if(mainCommunity_li[j].classList.contains('active') == true){
                    mainCommunity_li[j].classList.remove('active');
                }
            }
            mainCommunity_li[i].classList.add('active');
            mainCommunity_table();
            /* 선택된 카테고리 값 보내기 -> content_table_01() 함수에서 받은 값으로 해당 카테고리 게시글 출력하기*/
        })
    }
}

function mainCommunity_table(){
    for(let i = 0; i < 10; i++) { //해당 카테고리 seq 값 만큼 돌리는걸로 바꾸기
        mainCommunity_content.innerHTML +=
            '<tr class="community-table">'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/community/community_view.html">' + title_01[i] + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}

function mainEditor_table(){
    for(let i = 0; i < 10; i++) { //해당 카테고리 seq 값 만큼 돌리는걸로 바꾸기
        mainEditor_content.innerHTML +=
            '<tr class="community-table">'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/community/community_view.html">' + title_01[i] + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}