/*
// 로그인 성공 시 나타남
$(function(){
    $("#session").click(function(){
        //session 상태확인
        var session = '<%=session.getAttribute("member")%>';
        if(session.val()!=''){
            alert("로그인하세요.");
        } else {
            var member = '<%=MemberVO vo=(MemberVO)session.getAttribute("member")%>';
            alert(member+"님 반갑습니다.");
        }
    })
})

//session 상태확인
    var member = '<%=session.getAttribute("member")%>';
    if(member =="null"){
    console.log("로그인하세요.");
} else {
    //MemberVO vo=(MemberVO)session.getAttribute("member");
    console.log(member+"님 반갑습니다.");
}*/

/* session 상태확인
var session = '<%=session.getAttribute("member")%>';
if(session.val()!=''){
    alert("로그인하세요.");
} else {
    var member = '<%=MemberVO vo=(MemberVO)session.getAttribute("member")%>';
    alert(member+"님 반갑습니다.");
}
*/

if (test="${stateCode == '1'}") {

}

if (test="${stateCode == '0'}") {

}
/*
    <button type="button" onClick="location.href='mypage?stateCode=${stateCode}'">마이페이지</button>
    <button type="button" onClick="location.href='memberModify?stateCode=${stateCode}'">회원정보 수정</button>
    <button type="button" onClick="location.href='logout'">로그아웃</button>

if test="${stateCode == '0'}"
    <button type="button" onClick="location.href='securityAdmin?stateCode=${stateCode}'">관리자용 페이지</button>
    <button type="button" onClick="location.href='memberModify?stateCode=${stateCode}'">회원정보 수정</button>
    <button type="button" onClick="location.href='logout'">로그아웃</button>
    */
