const touchables=`42 671 215 68 images/1.png
345 663 195 109 images/2.png
263 844 173 101 images/3.png
353 1038 97 80 images/4.png
106 1475 197 130 images/5.png
91 1646 212 146 images/6.png
1342 1684 148 80 images/7.png
1524 1583 195 113 images/8.png
1613 1366 194 99 images/9.png
1210 185 241 100 images/10.png
713 320 169 75 images/11.png
1279 712 95 95 images/12.png
1448 784 173 80 images/13.png
1336 1340 154 109 images/14.png
1071 1392 119 80 images/15.png
890 1427 80 100 images/16.png
970 1792 185 90 images/17.png
842 621 154 89 images/18.png
727 677 107 70 images/19.png
1027 703 148 79 images/20.png
719 747 60 80 images/21.png
840 739 142 80 images/22.png
575 762 137 76 images/23.png
796 773 70 104 images/24.png
984 791 128 80 images/25.png
404 804 200 51 images/26.png
524 859 150 100 images/27.png
779 887 148 80 images/28.png
928 865 131 116 images/29.png
1041 888 99 64 images/30.png
1143 888 154 101 images/31.png
503 927 88 78 images/32.png
674 927 61 43 images/33.png
592 972 139 43 images/34.png
743 957 99 62 images/35.png
510 1031 160 66 images/36.png
947 1014 154 56 images/37.png
1079 979 131 66 images/38.png
654 1089 132 77 images/39.png
825 1132 114 79 images/40.png
950 1092 90 66 images/41.png
1040 1125 87 104 images/42.png
1126 1055 175 81 images/43.png
657 1192 99 67 images/44.png
954 1239 119 75 images/45.png
1114 1224 124 108 images/46.png
445 1241 145 60 images/48.png
652 836 118 67 images/47.png
862 934 59 112 images/49.png
719 1026 134 57 images/50.png
810 1298 73 61 images/51.png`;





class Point
{
    constructor(x,y,width,height,img)
    {
        if (!(x && y && img && width && height))
        {
            throw new Error("Constructor must be filled with 5 parameters.");
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
    let list=touchables.split("\n");
    for (let item of list)
    {
        let ps=item.split(" ");
        (new Point(Number.parseInt(ps[0]),Number.parseInt(ps[1]),Number.parseInt(ps[2]),Number.parseInt(ps[3]),ps[4])).attach();
    }
});