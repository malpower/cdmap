class Point
{
    constructor(x,y,width,height,img)
    {
        if (!(x && y && img && width && height))
        {
            throw new Error("Constructor must be filled with 3 parameters.");
        }
        this.element=$("<div>").addClass("point").css({"left": `${x}px`,
            "width": `${width}px`,
            "height": `${height}px`,
            "top": `${y}px`}).append(`<img src="${img}" />`);
        this.element.bind("click",(e)=>
        {
            location.href=`/baidu.html?x=${this.latitude}&y=${this.longitude}&title=${this.title}`;
        });
        this.longitude=0;
        this.latitude=0;
        this.title="";
    }
    attach()
    {
        $(".container").append(this.element);
    }
}


$(document).ready(()=>
{
    $(".container").scrollTop(($(".map").height()-$(window).height())/2);
    $(".container").scrollLeft(($(".map").width()-$(window).width())/2);
    let x=new Point(1500,1550,200,100,"images/bajin.png");
    x.attach();
});