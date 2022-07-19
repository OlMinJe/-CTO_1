$(document).ready(function(){
    li_active_01();
    content_table_01();
});
/* TODO: 나중에 삭제 */
let title_01 = ["일반고민", "대인관계 / 가족", "정신건강", "직장", "성소수자"];

let active_normal = document.querySelector("#community_normal");
let active_editor = document.querySelector("#community_editor");

let normal = document.getElementById('sub-menu');
let normal_li = document.querySelectorAll('.community-menu-box-01 li');

let title_index = document.getElementById('community-table');

function li_active_01(){
    for(let i = 0; i < normal_li.length; i++) {
        normal_li[i].addEventListener("click", function () {
            while (title_index.hasChildNodes()) {
                title_index.removeChild(title_index.firstChild);
            }
            for(let j = 0; j < normal_li.length; j++){
                if(normal_li[j].classList.contains('active') == true){
                    normal_li[j].classList.remove('active');
                }
            }
            normal_li[i].classList.add('active');
            content_table_01();
            /* 선택된 카테고리 값 보내기 -> content_table_01() 함수에서 받은 값으로 해당 카테고리 게시글 출력하기*/
        })
    }
}

function content_table_01(){
    for(let i = 0; i < 10; i++) { //해당 카테고리 seq 값 만큼 돌리는걸로 바꾸기
        title_index.innerHTML +=
            '<tr class="adivce-table">'+
            '<td class="diplay_no">' + '<span>' + (i+1) + '</span>' + '</td>'+
            '<td class="wirter">' + '<span>' + '글쓴이' + '</span>' +'</td>'+
            '<td class="title">' + '<span>' + title_01[i] + '</span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}

active_normal.addEventListener("click", function (){
    /* 상위 메뉴 */
    active_normal.classList.add('active');
    active_editor.classList.remove('active');
    /* 하위 메뉴*/
    normal.style.display = "flex";
    li_active_01();
})

active_editor.addEventListener("click", function (){
    /* 상위 메뉴 */
    active_normal.classList.remove('active');
    active_editor.classList.add('active');
    /* 하위 메뉴*/
    normal.style.display = "none";
    li_active_01();
})

function imgClick(){
    var active = $('.community-menu-con').css('display');
    if(active == 'block' ){
        $('.community-menu-con').css('display','none');
    } else{
        $('.community-menu-con').css('display','block');
    }
}