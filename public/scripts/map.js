const touchables=`42 671 215 68 images/1.png 5.png 0 http://j.map.baidu.com/XsgoC
345 663 195 109 images/2.png 4.png 1 http://j.map.baidu.com/yE3D9
263 844 173 101 images/3.png 3.png 12 http://j.map.baidu.com/3NO0I
353 1038 97 80 images/4.png 3.png 13 http://j.map.baidu.com/lZOAe
106 1475 197 130 images/5.png 5.png 1 http://j.map.baidu.com/VU3D9
91 1646 212 146 images/6.png 5.png 2 http://j.map.baidu.com/mcldB
1342 1684 148 80 images/7.png 5.png 7 http://j.map.baidu.com/VM8AI
1524 1583 195 113 images/8.png 5.png 4 http://j.map.baidu.com/8CgqNs
1613 1366 194 99 images/9.png 5.png 5 http://j.map.baidu.com/6NMI9
1210 185 241 100 images/10.png 5.png 6 http://j.map.baidu.com/-FgqN
713 320 169 75 images/11.png 4.png 0 http://j.map.baidu.com/qHgqN
1279 712 95 95 images/12.png 2.png 7 http://j.map.baidu.com/Engxk
1448 784 173 80 images/13.png 2.png 8 http://j.map.baidu.com/BFEPF
1336 1340 154 109 images/14.png 1.png 1 http://j.map.baidu.com/BrgqN
1071 1392 119 80 images/15.png 1.png 0 http://j.map.baidu.com/MAgqN
890 1427 80 100 images/16.png 1.png 2 http://j.map.baidu.com/qvgqN
970 1792 185 90 images/17.png 5.png 3 http://j.map.baidu.com/TNgqN
842 621 154 89 images/18.png 4.png 2 http://j.map.baidu.com/8OgqN
727 677 107 70 images/19.png 4.png 4 http://j.map.baidu.com/aohXB
1027 703 148 79 images/20.png 2.png 0 http://j.map.baidu.com/vDBsn
719 747 60 80 images/21.png 4.png 5 http://j.map.baidu.com/xRi1v
840 739 142 80 images/22.png 4.png 3 http://j.map.baidu.com/b8U1F
575 762 137 76 images/23.png 4.png 7 http://j.map.baidu.com/pzZ79
796 773 70 104 images/24.png 4.png 6 http://j.map.baidu.com/YlyoM
984 791 128 80 images/25.png 2.png 1 http://j.map.baidu.com/Y6cdC
404 804 200 51 images/26.png 3.png 0 http://j.map.baidu.com/jMaRC
524 859 150 100 images/27.png 3.png 1 http://j.map.baidu.com/vfhqN
779 887 148 80 images/28.png 4.png 9 http://j.map.baidu.com/5Jbxr
928 865 131 116 images/29.png 2.png 3 http://j.map.baidu.com/FdCyB
1041 888 99 64 images/30.png 2.png 2 http://j.map.baidu.com/3hhqN
1143 888 154 101 images/31.png 2.png 4 http://j.map.baidu.com/SOBgC
503 927 88 78 images/32.png 3.png 4 http://j.map.baidu.com/Tktll
674 927 61 43 images/33.png 3.png 2 http://j.map.baidu.com/-AdAe
592 972 139 43 images/34.png 3.png 5 http://j.map.baidu.com/57Gw9
743 957 99 62 images/35.png 3.png 3 http://j.map.baidu.com/a7a1H
510 1031 160 66 images/36.png 3.png 7 http://j.map.baidu.com/DiX8k
947 1014 154 56 images/37.png 1.png 7 http://j.map.baidu.com/MjVrs
1079 979 131 66 images/38.png 2.png 5 http://j.map.baidu.com/Tkrty
654 1089 132 77 images/39.png 3.png 8 http://j.map.baidu.com/PdKqb
825 1132 114 79 images/40.png 3.png 10 http://j.map.baidu.com/2khqN
950 1092 90 66 images/41.png 1.png 6 http://j.map.baidu.com/1v1wB
1040 1125 87 104 images/42.png 1.png 5 http://j.map.baidu.com/czgqN
1126 1055 175 81 images/43.png 2.png 6 http://j.map.baidu.com/DVzBH
657 1192 99 67 images/44.png 3.png 9 http://j.map.baidu.com/unhqN
954 1239 119 75 images/45.png 1.png 4 http://j.map.baidu.com/KxgqN
1114 1224 124 108 images/46.png 1.png 3 http://j.map.baidu.com/dsFOk
652 836 118 67 images/47.png 4.png 8 http://j.map.baidu.com/DS-rF
445 1241 145 60 images/48.png 3.png 14 http://j.map.baidu.com/XrhqN
862 934 59 112 images/49.png 1.png 9 http://j.map.baidu.com/NkGx9
719 1026 134 57 images/50.png 3.png 6 http://j.map.baidu.com/1GtMB
810 1298 73 61 images/51.png 3.png 11 http://j.map.baidu.com/DfLX9`;




function showDialog(url=new Stirng,offset=new Number,baiduMap=new String)
{
    const dom=$("<div>").addClass("mask");
    const dlg=$("<div>").addClass("tc");
    const tt=$("<div>").addClass("tt");
    const img=$("<img>").attr({"src": `images/dialogs/${url.split(".")[0]}/${offset}.png`}).addClass("dlg");
    dom.append(tt);
    tt.append(dlg);
    dlg.append(img);
    dom.appendTo("body");
    img.hide();
    dom.fadeIn("fast",()=>
    {
        img.slideDown("slow");
    });
    img.bind("click",(e)=>
    {
        location.href=baiduMap;
    });
    dlg.bind("click",function (e)
    {
        if (e.target===this)
        {
            img.slideUp("slow",()=>
            {
                dom.remove();
            });
        }
    });
}





class Point
{
    constructor(x,y,width,height,img,dialogUrl,dialogOffset,baiduMap)
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
            showDialog(dialogUrl,Number.parseInt(dialogOffset),baiduMap);
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
        (new Point(Number.parseInt(ps[0]),Number.parseInt(ps[1]),Number.parseInt(ps[2]),Number.parseInt(ps[3]),ps[4],ps[5],ps[6],ps[7])).attach();
    }
});