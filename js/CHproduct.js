window.onload = function(){
    C1=window.location.href.split("?")[1]; //得到id=楼主
if(C1=="a#"){
    console.log("传过来的是a");
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="block";
    hearingHealthContent.style.display="block";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
}if(C1=="c#"){
    console.log("传过来的是c");
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="block";
    bloodSugarContent.style.display="block";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
}
if(C1=="d#"){
    console.log("传过来的是d");
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="block";
    onlinePharmacyContent.style.display="block";
   
}if(C1=="e#"){
    console.log("传过来的是e");
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="block";
    fetalHeartContent.style.display="block";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
   
}
    
}
$(window).scroll(function(){
	var a 
	a=$(window).scrollTop();
	console.log(a)
	if($('#sleepProductContent').offset().top-a<=400){
		$('#sleepProductContent').animate({'top':'0.5rem'},300);
		$('#sleepProductContent').animate({'opacity':'1'},300)
	}if($('#BreatheTitle').offset().top-a<=300){
		$('#BreatheTitle').animate({'top':'0.5rem'},300);
		$('#BreatheTitle').animate({'opacity':'1'},300)
	}if($('#sleepProductContentTwo').offset().top-a<=400){
		$('#sleepProductContentTwo').animate({'top':'0.5rem'},300);
		$('#sleepProductContentTwo').animate({'opacity':'1'},300)
    }
})
window.addEventListener("scroll",function(e){
    console.log("滚动了");
    var t =document.documentElement.scrollTop||document.body.scrollTop;
	var topnav = document.getElementById("topnav");
	var logoword = document.getElementById('logoword');
	var logoEnword = document.getElementById('logoEnword');
	var leftTop = document.getElementById('leftTop');
	var nav = document.getElementById('nav');
	var home = document.getElementById('home');
	var abouts = document.getElementById('abouts');
	var product = document.getElementById('product')
	var recursiona = this.document.getElementById('recursiona');
    console.log(t)
    if(t >= 10){
		$(topnav).css({"background":"rgba(0, 0, 0, 0.55)"})
		$(logoword).css({"color":"#ffffff"})
		$(logoEnword).css({"color":"#ffffff"})
		$(leftTop).css({"color":"#ffffff"})
		$(nav).css({"color":"#ffffff"})
		$(home).css({"color":"#ffffff"})
		$(abouts).css({"color":"#ffffff"})
		$(product).css({"color":"#ffffff"})
		$(recursiona).css({"color":"#ffffff"})
    }else{
		$(topnav).css({"background":"rgb(255, 255, 255)"})
		$(logoword).css({"color":"#9f7f59"})
		$(logoEnword).css({"color":"#9f7f59"})
		$(leftTop).css({"color":"#7d7d7d"})
		$(nav).css({"color":"#7d7d7d"})
		$(home).css({"color":"#7d7d7d"})
		$(abouts).css({"color":"#7d7d7d"})
		$(product).css({"color":"#7d7d7d"})
		$(recursiona).css({"color":"#7d7d7d"})
    }
    });
    var sleepHealth=document.getElementById('sleepHealth');
    var sleepHealthfocus=document.getElementById('sleepHealthfocus');
    var sleepHealthbox=document.getElementById('sleepHealthbox');
    var hearingHealth=document.getElementById('hearingHealth');
    var hearingHealthfocus=document.getElementById('hearingHealthfocus');
    var hearingHealthContent=document.getElementById('hearingHealthContent');
    var bloodSugarHealth=document.getElementById('bloodSugarHealth');
    var bloodSugarHealthfocus=document.getElementById('bloodSugarHealthfocus');
    var bloodSugarContent=document.getElementById('bloodSugarContent');
    var fetalHeart=document.getElementById('fetalHeart');
    var fetalHeartfocus=document.getElementById('fetalHeartfocus');
    var fetalHeartContent=document.getElementById('fetalHeartContent');
    var onlinePharmacy=document.getElementById('onlinePharmacy');
    var onlinePharmacyfocus=document.getElementById('onlinePharmacyfocus');
    var onlinePharmacyContent=document.getElementById('onlinePharmacyContent');

var autoSet = document.getElementById('autoSet');
var autoSetWordHover = document.getElementById('autoSetWordHover');
var autoSetWord = document.getElementById('autoSetWord');
autoSet.onmouseover = function(){
    autoSetWordHover.style.display="block";
    autoSetWord.style.display="none";
}
autoSet.onmouseout = function(){
    autoSetWordHover.style.display="none";
    autoSetWord.style.display="block";
}
var auto25 = document.getElementById('auto25');
var auto25Hover = document.getElementById('auto25Hover');
var auto25Word = document.getElementById('auto25Word');
auto25.onmouseover = function(){
    auto25Hover.style.display="block";
    auto25Word.style.display="none";
}
auto25.onmouseout = function(){
    auto25Hover.style.display="none";
    auto25Word.style.display="block";
}
var vpap = document.getElementById('vpap');
var vpapHover = document.getElementById('vpapHover');
var vpapWord = document.getElementById('vpapWord');
vpap.onmouseover = function(){
    vpapHover.style.display="block";
    vpapWord.style.display="none";
}
vpap.onmouseout = function(){
    vpapHover.style.display="none";
    vpapWord.style.display="block";
}
var s9vpap = document.getElementById('s9vpap');
var s9vpapHover = document.getElementById('s9vpapHover');
var s9vpapWord = document.getElementById('s9vpapWord');
var s9vpapWord = document.getElementById('s9vpapWord');
s9vpap.onmouseover = function(){
    s9vpapHover.style.display="block";
    s9vpapWord.style.display="none";
}
s9vpap.onmouseout = function(){
    s9vpapHover.style.display="none";
    s9vpapWord.style.display="block";
}
var cpap = document.getElementById('cpap');
var cpapHover = document.getElementById('cpapHover');
var cpapWord = document.getElementById('cpapWord');
cpap.onmouseover = function(){
    cpapHover.style.display="block";
    cpapWord.style.display="none";
}
cpap.onmouseout = function(){
    cpapHover.style.display="none";
    cpapWord.style.display="block";
}
var apap = document.getElementById('apap');
var apapHover = document.getElementById('apapHover');
var apapWord = document.getElementById('apapWord');
apap.onmouseover = function(){
    apapHover.style.display="block";
    apapWord.style.display="none";
}
apap.onmouseout = function(){
    apapHover.style.display="none";
    apapWord.style.display="block";
}
var st25 = document.getElementById('st25');
var st25Hover = document.getElementById('st25Hover');
var st25Word = document.getElementById('st25Word');
st25.onmouseover = function(){
    st25Hover.style.display="block";
    st25Word.style.display="none";
}
st25.onmouseout = function(){
    st25Hover.style.display="none";
    st25Word.style.display="block";
}
var st30 = document.getElementById('st30');
var st30Hover = document.getElementById('st30Hover');
var st30Word = document.getElementById('st30Word');
st30.onmouseover = function(){
    st30Hover.style.display="block";
    st30Word.style.display="none";
}
st30.onmouseout = function(){
    st30Hover.style.display="none";
    st30Word.style.display="block";
}
sleepHealth.onclick = function(){
    sleepHealthfocus.style.display="block";
    sleepHealthbox.style.display="block";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
}
hearingHealth.onclick = function(){
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="block";
    hearingHealthContent.style.display="block";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
    $(window).scroll(function(){
        var a 
        a=$(window).scrollTop();
        console.log(a)
        if($('#SituationOne').offset().top-a<=400){
            $('#SituationOne').animate({'top':'0.5rem'},300);
            $('#SituationOne').animate({'opacity':'1'},300)
        }if($('#fengliOne').offset().top-a<=300){
            $('#fengliOne').animate({'top':'0.5rem'},300);
            $('#fengliOne').animate({'opacity':'1'},300)
        }if($('#SituationTwo').offset().top-a<=400){
            $('#SituationTwo').animate({'top':'0.5rem'},300);
            $('#SituationTwo').animate({'opacity':'1'},300)
        }
    })

}
bloodSugarHealth.onclick = function(){
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="block";
    bloodSugarContent.style.display="block";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
    $(window).scroll(function(){
        var a 
        a=$(window).scrollTop();
        console.log(a)
        if($('#bloodanimation').offset().top-a<=400){
            $('#bloodanimation').animate({'top':'0.5rem'},300);
            $('#bloodanimation').animate({'opacity':'1'},300)
        }if($('#bloodBaby').offset().top-a<=300){
            $('#bloodBaby').animate({'top':'0.5rem'},300);
            $('#bloodBaby').animate({'opacity':'1'},300)
        }
    })
}
fetalHeart.onclick = function(){
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="block";
    fetalHeartContent.style.display="block";
    onlinePharmacyfocus.style.display="none";
    onlinePharmacyContent.style.display="none";
}
onlinePharmacy.onclick = function(){
    sleepHealthfocus.style.display="none";
    sleepHealthbox.style.display="none";
    hearingHealthfocus.style.display="none";
    hearingHealthContent.style.display="none";
    bloodSugarHealthfocus.style.display="none";
    bloodSugarContent.style.display="none";
    fetalHeartfocus.style.display="none";
    fetalHeartContent.style.display="none";
    onlinePharmacyfocus.style.display="block";
    onlinePharmacyContent.style.display="block";
}

