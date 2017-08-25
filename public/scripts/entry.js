$(document).ready(()=>
{
    $(".container").scrollTop(($(".map").height()-$(window).height())/2);
    $(".container").scrollLeft(($(".map").width()-$(window).width())/2);


    let x=$("<div>").css({"height": "50px",
        "width": "50px",
        "left": "50px",
        "top": "50px"}).addClass("point");
    x.appendTo(".container");

});