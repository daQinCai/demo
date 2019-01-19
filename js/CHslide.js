function $(id) {
    return document.getElementById(id);
}
window.addEventListener("scroll",function(e){
    console.log("滚动了");
    //变量t就是滚动条滚动时，到顶部的距离
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    var slide = $("slide");
    // var slide = $document.getElemen
    console.log(t)
    if(t >= 441){
        slide.style.backgroundColor="rgba(0, 0, 0, 0.56)";
        console.log("555");
    }else{
        slide.style.backgroundColor="rgba(255, 255, 255, 0.2)";
    }
    });
    