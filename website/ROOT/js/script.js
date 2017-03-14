/*$(document).ready(function() {
    $(".menu1").mouseenter(function() {
        $("#mainmenu1").css("src", "image/sk/topmenu_01_on.gif");
        console.log("enter");
    });
    $(".menu1").mouseleave(function() {
        $("#mainmenu1").css("src", "image/sk/topmenu_01.gif");
        console.log("leave");
    });
});*/

$(function() {
    $(".menu1")
        .mouseover(function() {
            //본래 파일명에 _on 을 붙이고
            //var src = $(this).attr("src").match(/[^\.]+/) + "_on.gif";

            var src = $(this).attr("src").replace(".gif", "_on.gif");
            $(this).attr("src", src);
            //console.log(src);
        })
        .mouseout(function() {
            //본래 파일명에서 _on을 제거하기
            var src = $(this).attr("src").replace("_on.gif", ".gif");
            $(this).attr("src", src);
            //console.log(src);
        });
});
