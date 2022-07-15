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



/* TOdO: (참고 사이트) https://velog.io/@minkyeong-ko/HTMLCSSJS-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EC%97%85%EB%A1%9C%EB%93%9C-%ED%8C%8C%EC%9D%BC%EC%9D%B4%EB%A6%84-%EB%82%98%ED%83%80%EB%82%B4%EA%B8%B0-%ED%99%94%EB%A9%B4%EC%97%90-%EC%9D%B4%EB%AF%B8%EC%A7%80-%EB%B3%B4%EC%97%AC%EC%A3%BC%EA%B8%B0 */
/*var submit = document.getElementById('submitButton');
submit.onclick = showImage;     //Submit 버튼 클릭시 이미지 보여주기

function showImage() {
    var newImage = document.getElementById('image-show').lastElementChild;
    newImage.style.visibility = "visible";

    document.getElementById('image-upload').style.visibility = 'hidden';

    document.getElementById('fileName').textContent = null;     //기존 파일 이름 지우기
}

function loadFile(input) {
    var file = input.files[0];

    var name = document.getElementById('fileName');
    name.textContent = file.name;

    var newImage = document.createElement("img");
    newImage.setAttribute("class", 'img');

    newImage.src = URL.createObjectURL(file);

    newImage.style.width = "70%";
    newImage.style.height = "70%";
    newImage.style.visibility = "hidden";   //버튼을 누르기 전까지는 이미지 숨기기
    newImage.style.objectFit = "contain";

    var container = document.getElementById('image-show');
    container.appendChild(newImage);
}*/