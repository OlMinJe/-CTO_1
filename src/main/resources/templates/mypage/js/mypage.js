/* TODO: (참고 사이트) https://seongeun-it.tistory.com/113 */
/* var Content = document.getElementsByClassName("content_box");
   Content[0].style.display = "block";
*/
$(document).ready(function(){ console.log("test"); });

function showMenu(element){
    var content = document.getElementsByClassName("content_box");
    for(var i=0; i<content.length; i++){
        if(element.id+"_content" == content[i].id){
            content[i].style.display = "block";
        } else{
            content[i].style.display = "none";
        }
    }
}
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

/* TODO: (참고 사이트) https://www.youtube.com/watch?v=jFmcH5GVRs4
 달력 */

const date = new Date();

const renderCalender = () => {
    document.querySelector('.year_month').innerHTML =  date.getFullYear() +'년 ' + (date.getMonth()+1) + '월';

    // 지난 달 마지막 Date, 이번달 마지막 DAte
    const prevLast = new Date(date.getFullYear(), date.getMonth(), 0);
    const thisLast = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    //Dates 기본 배열
    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];
    //prevDates 계산
    if(PLDay !== 6) {
        for(let i = 0; i < PLDay+1 ; i++) {
            prevDates.unshift(PLDate - i);
        }
    }
    //nextDates 계산
    for(let i = 1; i < 7 - TLDate; i++) { nextDates.push(i); }

    //Dates 합치기
    const dates = prevDates.concat(thisDates, nextDates);
    const firstDateIndex = dates.indexOf(1);
    const lastDateIndex = dates.indexOf(TLDate);

    //Dates 정리
    dates.forEach((date, i) => {
        const condition = i >= firstDateIndex && i <= lastDateIndex + 1
                          ? 'this'
                          : 'other';
        dates[i] = '<div class="date"><span class="' + condition + '">' + date + '</span></div>';
    })

    document.querySelector('.dates').innerHTML = dates.join('');

    //오늘 날짜 표시
    const today = new Date();
      if (date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
        for (let date of document.querySelectorAll('.this')) {
          if (+date.innerText === today.getDate()) {
            date.classList.add('today');
            break;
          }
        }
      }
};

renderCalender();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalender();
}

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalender();
}