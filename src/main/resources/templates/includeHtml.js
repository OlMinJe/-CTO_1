/*
    TODO: 참고 사이트
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