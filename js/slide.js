window.addEventListener("scroll",function(e){
    var t =document.documentElement.scrollTop||document.body.scrollTop;
    var slide = document.getElementById("slide");
    if(t >= 441){
        $(slide).css({"background":"rgba(0, 0, 0, 0.56)"}) 
    }else{
        $(slide).css({"background":"rgba(255, 255, 255, 0.2)"})
    }
    });
