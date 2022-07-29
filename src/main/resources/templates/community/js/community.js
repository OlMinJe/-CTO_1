$(document).ready(function(){
    li_active_01();
});

/* 상위 메뉴 */
let active_normal = document.querySelector("#community_normal");
let active_editor = document.querySelector("#community_editor");

/* 하위 메뉴 - 커뮤니티 */
let normal = document.getElementById('sub-menu');
let normal_li = document.querySelectorAll('.menu-box-01 li');

/* content */
let table = document.getElementById('community-table');
let table_head = document.getElementById('community-table-head');
let table_tbody = document.getElementById('community-table-body');
let editor_content = document.getElementById('editor_content');


function li_active_01(){
    editor_content.style.display = "none";
    table.style.display = "table";
    for(let i = 0; i < normal_li.length; i++) {
        normal_li[i].addEventListener("click", function () {
            for(let j = 0; j < normal_li.length; j++){
                if(normal_li[j].classList.contains('active') == true){
                    normal_li[j].classList.remove('active');
                }
            }
            normal_li[i].classList.add('active');
            while (table_tbody.hasChildNodes()) {
                table_tbody.removeChild(table_tbody.firstChild);
            }
            content_table_01();
            /* 선택된 카테고리 값 보내기 -> content_table_01() 함수에서 받은 값으로 해당 카테고리 게시글 출력하기*/
        }, true)
    }
    content_table_01();
}

function li_active_02(){
    editor_content.removeChild(editor_content.firstChild);
    table_head.removeChild(table_head.firstChild);

    editor_content.style.display = "block";
    table.style.display = "none";
    while (table_tbody.hasChildNodes()) {
        table_tbody.removeChild(table_tbody.firstChild);
    }
    editor_content.style.display = "block";
}

function content_table_01(){
    table_head.innerHTML =
        '<tr>'+
        '<th style="width: 10%;">No.</th>'+
        '<th style="width: 10%;">작성자</th>'+
        '<th style="width: auto;">제목</th>'+
        '<th style="width: 10%;">댓글수</th>'+
        '</tr>';
    for(let i = 0; i < 10; i++) { //해당 카테고리 seq 값 만큼 돌리는걸로 바꾸기
        table_tbody.innerHTML +=
            '<tr class="adivce-table">'+
            '<td class="diplay_no">' + '<span>' + (i+1) + '</span>' + '</td>'+
            '<td class="wirter">' + '<span>' + '글쓴이' + '</span>' +'</td>'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/community/community_view.html">' + i + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}

active_normal.addEventListener("click", function (){
    while (table_tbody.hasChildNodes()) {
        table_tbody.removeChild(table_tbody.firstChild);
    }
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
    while (table_tbody.hasChildNodes()) {
        table_tbody.removeChild(table_tbody.firstChild);
    }
    li_active_02();
})

function imgClick(){
    var active = $('.menu-con').css('display');
    if(active == 'block' ){
        $('.menu-con').css('display','none');
    } else{
        $('.menu-con').css('display','block');
    }
}