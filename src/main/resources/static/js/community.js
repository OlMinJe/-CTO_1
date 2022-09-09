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

/* 데이터 중복 출력 현상 임의로 막아둠 */
function dataRedundancy() {
    while (table_tbody.hasChildNodes()) {
        table_tbody.removeChild(table_tbody.firstChild);
    }
}

/* community 탭을 클릭한 경우 */
function li_active_01() {
    // 초기에 출력되는 content 영역
    editor_content.style.display = "none";
    table.style.display = "table";
    // menu 영역
    for(let i = 0; i < normal_li.length; i++) {
        normal_li[i].addEventListener("click", function () {
            // 선택한 메뉴에 active 클래스 추가 및 이전 메뉴 active 클래스 삭제
            for(let j = 0; j < normal_li.length; j++) {
                if(normal_li[j].classList.contains('active') == true) {
                    normal_li[j].classList.remove('active');
                }
            }
            normal_li[i].classList.add('active');
            dataRedundancy();
            // 바뀐 메뉴에 해당하는 게시글 출력
            content_table_01();
        }, true)
    }
    // 초기에 출력되는 부분 -> 전체 게시글이 보여야함
    content_table_01();
}

/* editor 탭을 클릭한 경우 */
function li_active_02() {
    editor_content.removeChild(editor_content.firstChild);
    table_head.removeChild(table_head.firstChild);

    editor_content.style.display = "block";
    table.style.display = "none";
    dataRedundancy();
    editor_content.style.display = "block";
}

/* 테이블에 값 넣기 */
function content_table_01() {
    table_head.innerHTML =
        '<tr>'+
        '<th style="width: 10%;">No.</th>'+
        '<th style="width: 10%;">작성자</th>'+
        '<th style="width: auto;">제목</th>'+
        '<th style="width: 10%;">댓글수</th>'+
        '</tr>';
    // 분기문으로 seq 값 만큼 html 넣어주기 - 10으로 임의 설정
    // 글 번호, 작성자, 글제목, 댓글수 순서로 배치함
    for(let i = 0; i < 10; i++) {
        table_tbody.innerHTML +=
            '<tr class="adivce-table">'+
            '<td class="diplay_no"><span>' + (i+1) + '</span></td>'+
            '<td class="wirter"><span>' + '글쓴이' + '</span></td>'+
            '<td class="title"><span><a href="/community/community_view.html">' + i + '</a></span></td>'+
            '<td class="comment_count"><span>' + '100' + '</span></td>'+
            '</tr>';
    }
}

/* 커뮤니티 탭을 클릭했을 때의 이벤트*/
function normal_event() {
    dataRedundancy();
    // 상위 메뉴 active 클래스 추가 -> 해당 클래스를 사용하여 css 효과 부여
    active_normal.classList.add('active');
    active_editor.classList.remove('active');
    // 반응형 하위 메뉴 - 화면 크기가 767px 이하일 경우
    if (matchMedia("screen and (max-width: 767px)").matches) {
        if (normal.style.display == "none") {
            normal.style.display = "block";
        } else {
            normal.style.display = "none";
        }
    } else {
        normal.style.display = "block";
    }
    li_active_01();
}

active_editor.addEventListener("click", function () {
    /* 상위 메뉴 */
    active_normal.classList.remove('active');
    active_editor.classList.add('active');
    /* 하위 메뉴*/
    normal.style.display = "none";
    dataRedundancy();
    li_active_02();
})



