// 로그인 성공 시 나타남
$(function(){
    $("#session").click(function(){
        /* session 상태확인 */
        var session = '<%=session.getAttribute("member")%>';
        if(session.val()!=''){
            alert("로그인하세요.");
        } else {
            var member = '<%=MemberVO vo=(MemberVO)session.getAttribute("member")%>';
            alert(member+"님 반갑습니다.");
        }
    })
})

/* session 상태확인
    var member = '<%=session.getAttribute("member")%>';
    if(member =="null"){
    console.log("로그인하세요.");
} else {
    //MemberVO vo=(MemberVO)session.getAttribute("member");
    console.log(member+"님 반갑습니다.");
}*/