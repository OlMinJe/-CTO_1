/* TODO: (참고 사이트) https://seongeun-it.tistory.com/113 */
function showMenu(element){
    document.getElementsByClassName("content_box_main")[0].style.display = "none";
        console.log("test");


   var content = document.getElementsByClassName("content_box");
    for(var i=0; i<content.length; i++){
        if(element.id+"_content" == content[i].id){
            content[i].style.display = "block";
        } else{
            content[i].style.display = "none";
        }
    }
}