$(document).ready(function(){
    main_table_active();
});

// mainvisual 스와이퍼 이벤트
let mainvisual_swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
    },
});


// sub 스와이퍼 이벤트
const sub_swiper = new Swiper('.sub_swiper_list .swiper-container', {
    loop: true,
    loopAdditionalSlides: 1,
    /*autoplay:{
        delay: 3000,
        disableOnInteraction: false,
    },*/
    centeredSlides: true,
    slidesPerView: 1,
    slideToClickedSlide: true,
    effect: 'coverflow'
});


// sub_swiper 배경 효과
//https://marshallku.com/web/tips/html5-canvas%EB%A1%9C-%EB%B0%A4%ED%95%98%EB%8A%98-%EA%B7%B8%EB%A6%AC%EA%B8%B0
const width = window.innerWidth,
    height = window.innerHeight*(0.8), /*(0.8)*/
    stars = createStars(width, height, 30),
    moon = {
        x: 0,
        y: height / 2,
        r: 45
    },
    canvas = document.getElementById("nigthSky"),
    ctx = canvas.getContext("2d");
let counter = 0,
    time = 0;

function random(max) {
    return Math.floor(Math.random() * max);
}

function createStars(width, height, spacing) {
    const stars = [];

    for (let x = 0; x < width; x += spacing) {
        for (let y = 0; y < height; y += spacing) {
            const star = {
                x: x + random(spacing),
                y: y + random(spacing),
                r: Math.random() * 1.5
            };
            stars.push(star);
        }
    }
    return stars;
}

function fillCircle(ctx, x, y, r, fillStyle) {
    ctx.beginPath(),
        ctx.fillStyle = fillStyle,
        ctx.arc(x, y, r, 0, Math.PI * 2),
        ctx.fill();
}

function getOpacity(factor) {
    const opacityIncrement = 0.6 * Math.abs(Math.sin(factor)),
        opacity = 0.1 + opacityIncrement;
    return opacity;
}

function render() {
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    let newX = time / 10 - 45;
    gradient.addColorStop(0, "#00111e");
    gradient.addColorStop(1, "#0a2342");
    //배경 그래디언트
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
    stars.forEach(function (star, i) {
        const factor = counter * i,
            x = star.x,
            y = star.y,
            opacity = getOpacity(factor),
            randomColor = Math.floor((Math.random()*360)+1);

        fillCircle(ctx, x, y, star.r, `hsla(${randomColor}, 30%, 80%, ${opacity})`); //별 그리기
    });

    newX <= width + 90 // window 너비에 달 지름 추가
        ? (
            moon.x = newX,
                moon.y = newX,
                time += 5
        ) : time = 0,
        // 달에 애니메이션 추가

        fillCircle(ctx, moon.x, 90, moon.r, "#f5f3ce"); // 달 그리기

    counter++;
    requestAnimationFrame(render);
}

function newY(x) {
    return Math.pow(x - width / 2, 2) / 9000 + height / 2 + 1
}

canvas.width = width,
    canvas.height = height,
    render();


// 커뮤니티 이벤트
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
            // 선택된 카테고리 값 보내기 -> content_table_01() 함수에서 받은 값으로 해당 카테고리 게시글 출력하기
        })
    }
}

function mainCommunity_table(){
    for(let i = 0; i < 10; i++) { // 해당 카테고리 seq 값 만큼 돌리는걸로 바꾸기
        mainCommunity_content.innerHTML +=
            '<tr class="community-table">'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/community/community_view.html">' + title_01[i] + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}

function mainEditor_table(){
    for(let i = 0; i < 10; i++) {
        mainEditor_content.innerHTML +=
            '<tr class="community-table">'+
            '<td class="title">' + '<span><a href="/22_ig031/src/main/resources/templates/community/community_view.html">' + title_01[i] + '</a></span>' + '</td>'+
            '<td class="comment_count">' + '<span>' + '100' + '</span>' + '</td>'+
            '</tr>';
    }
}


// fixed 아이콘 hover 이벤트
let fixed = document.getElementById("fixed");
let fixed_comment = document.getElementById("fixed_comment");

fixed.addEventListener("mouseover", function (event) {
    fixed_comment.style.display = "block";
}, false);

fixed.addEventListener("mouseout", function (event) {
    fixed_comment.style.display = "none";
}, false);