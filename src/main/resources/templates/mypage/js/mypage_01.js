function filter_checked(obj){ //체크하기
	obj.parentNode.querySelector('input').checked = true;
}
function filter_unChecked(obj){ //체크해제
	obj.parentNode.querySelector('input').checked = false;
}
const filter01 = document.querySelectorAll('.filter01'); //체크버튼
const filter02 = document.querySelectorAll('.filter02'); //체크버튼
const filterAll_01 = document.querySelector('.filter01.all'); //'all' 체크버튼
const filterAll_02 = document.querySelector('.filter02.all'); //'all' 체크버튼

function resetBtn(){
    $("input:checkbox").prop("checked", false);
}

filter01.forEach(function(el){
	el.addEventListener('click', function(e){
		if(e.target != filterAll_01){
			if(e.target.parentNode.querySelector('input').checked !== true){
				filter_checked(e.target);
				const checked = document.querySelectorAll('.filter_wrap input:checked');
				if(filter01.length -1 == checked.length){ //모두 체크되어있다면 all도 체크
					filter_unChecked(filterAll_01);
				}
			}else{
				filter_unChecked(e.target);
				filter_unChecked(filterAll_01); //한개라도 체크 안되면 all버튼 체크 해제
			}
		}
		else{
			if(e.target.parentNode.querySelector('input').checked !== true){
				filter01.forEach(function(obj){
					filter_checked(obj); //모두체크
				})
			}else{
				filter01.forEach(function(obj){
					filter_unChecked(obj); //모두해제
				})
			}
		}
	})
})

filter02.forEach(function(el){
	el.addEventListener('click', function(e){
        if(e.target != filterAll_02){
            if(e.target.parentNode.querySelector('input').checked !== true){
                filter_checked(e.target);
                const checked = document.querySelectorAll('.filter_wrap input:checked');
                if(filter02.length -1 == checked.length){ //모두 체크되어있다면 all도 체크
                    filter_unChecked(filterAll_02);
                }
            }else{
                filter_unChecked(e.target);
                filter_unChecked(filterAll_02); //한개라도 체크 안되면 all버튼 체크 해제
            }
        }
        else{
            if(e.target.parentNode.querySelector('input').checked !== true){
                filter02.forEach(function(obj){
                    filter_checked(obj); //모두체크
                })
            }else{
                filter02.forEach(function(obj){
                    filter_unChecked(obj); //모두해제
                })
            }
        }
    })
})

function mypage_01(){
    var e = document.getElementById('event_attend_table');

    for(var i = 0; i < 1; i++){ /* 저장된 seq의 값만큼 돌아가도록 변경하기*/
        e.innerHTML = '<tr>'+
                         '<td id="diplay_no"></td>'+
                         '<td id="event_category"></td>'+
                         '<td id="event_title"></td>'+
                         '<td id="isuse"></td>'+
                         '<td id="point"></td>'+
                     '</tr>';
        document.getElementById('diplay_no').innerHTML = '<span>' + i + '</span>';
        document.getElementById('event_category').innerHTML = '<span>' + i + '</span>';
        document.getElementById('event_title').innerHTML = '<span>' + i + '</span>';
        document.getElementById('isuse').innerHTML = '<span>' + i + '</span>';
        document.getElementById('point').innerHTML = '<span>' + i + '</span>';
    }
}