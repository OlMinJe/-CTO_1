$(document).ready(function(){
    liActive01();
});


// 상위 메뉴
let active_normal = document.querySelector("#active_normal");
let active_woman = document.querySelector("#active_woman");

// 하위 메뉴
let normal = document.getElementById('sub-menu-01');
let woman = document.getElementById('sub-menu-02');

let normal_li = document.querySelectorAll('.menu-box-01 li');
let woman_li = document.querySelectorAll('.menu-box-02 li');

let title_index = document.getElementById('advice-table');
function liActive01(){
    contentTable01();
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
            contentTable01();
        })
    }
}

function liActive02(){
    for(let i = 0; i < woman_li.length; i++) {
        woman_li[i].addEventListener("click", function () {
            while (title_index.hasChildNodes()) {
                title_index.removeChild(title_index.firstChild);
            }
            for(let j = 0; j < woman_li.length; j++){
                if(woman_li[j].classList.contains('active') == true){
                    woman_li[j].classList.remove('active');
                }
            }
            woman_li[i].classList.add('active');
            contentTable02();
        })
    }
}

function contentTable01(){
    for(let i = 0; i < 10; i++) { //해당 카테고리 seq 값 만큼 돌리는걸로 바꾸기
        title_index.innerHTML +=
            '<tr class="adivce-table">'+
            '<td class="diplay_no">' + '<span>' + (i+1) + '</span>' + '</td>'+
            '<td class="wirter">' + '<span>' + '글쓴이' + '</span>' +'</td>'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/advice/advice_view.html">' + i + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}

function contentTable02(){
    for(let i = 0; i < 10; i++) {
        title_index.innerHTML +=
            '<tr class="adivce-table">'+
            '<td class="diplay_no">' + '<span>' + (i+1) + '</span>' + '</td>'+
            '<td class="wirter">' + '<span>' + '글쓴이' + '</span>' +'</td>'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/advice/advice_view.html">' + i + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}

active_normal.addEventListener("click", function (){
    /* 상위 메뉴 */
    active_normal.classList.add('active');
    active_woman.classList.remove('active');
    /* 하위 메뉴*/
    normal.style.display = "flex";
    woman.style.display = "none";
    liActive01();
})

active_woman.addEventListener("click", function (){
    active_normal.classList.remove('active');
    active_woman.classList.add('active');
    /* 하위 메뉴*/
    normal.style.display = "none";
    woman.style.display = "flex";
    liActive02();
})

function imgClick(){
    var active = $('.advice-menu-con').css('display');
    if(active == 'block' ){
        $('.advice-menu-con').css('display','none');
    } else{
        $('.advice-menu-con').css('display','block');
    }
}