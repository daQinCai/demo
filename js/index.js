$(window).scroll(function(){
	var a 
	a=$(window).scrollTop();
	// console.log(a)
	// console.log($('#cooperationBrand').offset().top)
	if($('#mainBusiness').offset().top-a<=400){
		$('#mainBusiness').animate({'top':'0.5rem'},300);
		$('#mainBusiness').animate({'opacity':'1'},300)
	}if($('#mainTeam').offset().top-a<=300){
		$('#mainTeam').animate({'top':'0.5rem'},300);
		$('#mainTeam').animate({'opacity':'1'},300)
	}if($('#aboutOurs').offset().top-a<=400){
		$('#aboutOurs').animate({'top':'0.5rem'},300);
		$('#aboutOurs').animate({'opacity':'1'},300)
    }if($('#cooperationBrand').offset().top-a<=400){
		$('#cooperationBrand').animate({'top':'0.5rem'},300);
		$('#cooperationBrand').animate({'opacity':'1'},300)
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

var Operation = $('Operation');
var OperationSmall= $('OperationSmall');
var operationBig = $('operationBig');
var Pharmacist = $('Pharmacist');
var PharmacistSmall = $('PharmacistSmall');
var PharmacistBig = $('PharmacistBig');
var design = $('design');
var designSmall = $('designSmall');
var designBig = $('designBig');
var content = $('content');
var contentSmall = $('contentSmall');
var contentBig = $('contentBig');
var Development = $('Development');
var DevelopmentSmall = $('DevelopmentSmall');
var DevelopmentBig = $('DevelopmentBig');

var breathe = $('breathe');
var breatheImg = $('breatheImg');

var hearing = $('hearing');
var hearingImg = $('hearingImg');

var bloodSugar = $('bloodSugar');
var bloodSugarImg = $('bloodSugarImg');

var drug = $('drug');
var drugImg = $('drugImg');

var fetalHeart = $('fetalHeart');
var fetalHeartImg = $('fetalHeartImg');


