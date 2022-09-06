/*
    1. https://kyung-a.tistory.com/18
    2. https://www.w3schools.com/howto/howto_html_include.asp
    또는 해당 파일에 스크립트 태그 넣고 코드를 넣는 방법도 있지만, 적용해야할 파일이 너무 많아서 js 파일 따로 분리해놓음
    해당 파일명: includeHtml.js
*/

window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});


// footer popup script
function onClickEvent01() {
    document.querySelector('#modal01').style.display = 'block';
}
function onClickEvent02() {
    document.querySelector('#modal02').style.display = 'block';
}
function offClickEvent(){
    document.querySelector('#modal01').style.display = 'none';
    document.querySelector('#modal02').style.display = 'none';
}

// header script
function headerAction() {
    $(".nav_title").mouseover(function(){

        $(this).children(".nav_sub").stop().slideDown();

        $(this).children("a").css({'background-color' : "#fff"});
    });
    $(".nav_title").mouseleave(function(){
        $(this).children(".nav_sub").stop().slideUp();
        $(this).children("a").css({'background-color' : "#9ab3f5"});
    });
    $(".nav_title").mouseover(function(){
        $(this).children(".nav_sub").stop().slideDown();

        $(this).children("a").css({'background-color' : "#fff"});
    });
    $(".nav_title").mouseleave(function(){
        $(this).children(".nav_sub").stop().slideUp();
        $(this).children("a").css({'background-color' : "#9ab3f5"});
    });


    let m_title ='';
    $(".m_nav_title").click(function(){

        if(m_title != $(this).prop("id")){
            $(".m_nav_sub").stop().slideUp();
            $(this).children(".m_nav_sub").stop().slideDown(250);
            m_title = $(this).prop("id");
        }
        else{
            $(this).children(".m_nav_sub").stop().slideUp();
            m_title = '';
        }
    });

    let bool_menu = true;
    $("#burgerbtn").click(function(){
        if( bool_menu == true){
            $("#slide_menu").animate({'right' : '1px'},160);
            $("#slide_bg").animate({'left' : '0'},160);
            bool_menu = false;
        }
        else{
            $("#wrap").animate({'left' : '0'},200);
            bool_menu = true;
        }
    });

    $("#close_btn").click(function(){
        $("#slide_menu").animate({'right' : '-50%'},200);
        $("#slide_bg").animate({'left' : '-50%'},100);

        bool_menu = true;
    });

    $("#slide_bg").click(function(){
        $("#slide_menu").animate({'right' : '-50%'},200);
        $("#slide_bg").animate({'left' : '-50%'},100);

        bool_menu = true;
    });
}