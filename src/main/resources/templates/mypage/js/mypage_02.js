$(document).ready(function(){
    mypage_02();
});

function mypage_02(){
    var e = document.getElementById('community_table');

    for(var i = 0; i < 1; i++){ /* 저장된 seq의 값만큼 돌아가도록 변경하기*/
        e.innerHTML = '<tr>'+
                         '<td class="diplay_no"></td>'+
                         '<td class="category"></td>'+
                         '<td class="table_title"></td>'+
                         '<td class="table_test"></td>'+
                     '</tr>';
        document.querySelector('.community_table .diplay_no').innerHTML = '<span>' + i + '</span>';
        document.querySelector('.community_table .category').innerHTML = '<span>' + i + '</span>';
        document.querySelector('.community_table .table_title').innerHTML = '<span>' + i + '</span>';
        document.querySelector('.community_table .test').innerHTML = '<span>' + i + '</span>';
    }
}