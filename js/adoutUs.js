
function $(id) {
    return document.getElementById(id);
}
// 选项卡标题
var companyProfile = $('companyProfile');
var mission = $('mission');
var Value = $('Value');
var culture = $('culture');
var surroundings = $('surroundings');
// 选项卡内容
var companyProfileContent = $('companyProfileContent');
var missionContent = $('missionContent');
var ValueContent = $('ValueContent');
var cultureContent = $('cultureContent');
var surroundingsContent = $('surroundingsContent');
// 选项卡标题被选中的时候
var tabTitleImagefocus =$('tabTitleImagefocus');
var missionImgfocus =$('missionImgfocus');
var ValueImgfocus =$('ValueImgfocus');
var cultureImgfocus =$('cultureImgfocus');
var surroundingsImgfocus =$('surroundingsImgfocus');
// 选项卡标题未选中时
var missionImage =$('missionImage');
var ValueImg =$('ValueImg');
var cultureImg =$('cultureImg');
var surroundingsImg =$('surroundingsImg');
var tabTitleImage =$('tabTitleImage');
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
var flag = 0;
companyProfile.addEventListener("click",function(){
    companyProfileContent.style.display="block";
    missionContent.style.display="none";
    ValueContent.style.display="none";
    cultureContent.style.display="none";
    surroundingsContent.style.display="none";

    tabTitleImagefocus.style.opacity=1;
    tabTitleImage.style.opacity=0;
    console.log("你改变了透明度")
    missionImgfocus.style.opacity=0;
    missionImage.style.opacity=1;
    ValueImgfocus.style.opacity=0;
    ValueImg.style.opacity=1;
    cultureImgfocus.style.opacity=0;
    cultureImg.style.opacity=1;
    surroundingsImgfocus.style.opacity=0;
    surroundingsImg.style.opacity=1;
    flag = 1;
})
companyProfile.addEventListener("mouseover",function(){
    tabTitleImagefocus.style.opacity=1;
    tabTitleImage.style.opacity=0;
})
companyProfile.addEventListener("mouseout",function(){
    if(flag == 0){
        tabTitleImagefocus.style.opacity=0;
        tabTitleImage.style.opacity=1;
    }else if (flag == 1){
        tabTitleImagefocus.style.opacity=1;
        tabTitleImage.style.opacity=0;
    }
    console.log(flag)
    setTimeout(function(){
        flag = 0;
    },100)
})
var flag = 0;
mission.addEventListener("click",function(){
    companyProfileContent.style.display="none";
    missionContent.style.display="block";
    ValueContent.style.display="none";
    cultureContent.style.display="none";
    surroundingsContent.style.display="none";
    tabTitleImagefocus.style.opacity=0;
    tabTitleImage.style.opacity=1;
    console.log("透明度")
    missionImgfocus.style.display=1;
    missionImage.style.opacity=0;
    ValueImgfocus.style.opacity=0;
    ValueImg.style.opacity=1;
    cultureImgfocus.style.opacity=0;
    cultureImg.style.opacity=1;
    surroundingsImgfocus.style.opacity=0;
    surroundingsImg.style.opacity=1;
    flag = 1;
})
mission.addEventListener("mouseover",function(){
    missionImgfocus.style.opacity=1;
    missionImage.style.opacity=0;
})
mission.addEventListener("mouseout",function(){
    if(flag == 0){
        missionImgfocus.style.opacity=0;
        missionImage.style.opacity=1;
    }else if(flag == 1){
        missionImgfocus.style.opacity=1;
        missionImage.style.opacity=0;
    }
    console.log(flag)
    setTimeout(function(){
        flag = 0;
    },100)
})
var flag = 0;
Value.addEventListener("click",function(){

    companyProfileContent.style.display="none";
    missionContent.style.display="none";
    ValueContent.style.display="block";
    cultureContent.style.display="none";
    surroundingsContent.style.display="none";
    tabTitleImagefocus.style.opacity=0;
    tabTitleImage.style.opacity=1;
    missionImgfocus.style.opacity=0;
    missionImage.style.opacity=1;
    ValueImgfocus.style.opacity=1;
    ValueImg.style.opacity=0;
    cultureImgfocus.style.opacity=0;
    cultureImg.style.opacity=1;
    surroundingsImgfocus.style.opacity=0;
    surroundingsImg.style.opacity=1;
    flag = 1;
}) 
Value.addEventListener("mouseover",function(){
    ValueImgfocus.style.opacity=1;
    ValueImg.style.opacity=0;
})
Value.addEventListener("mouseout",function(){
    if (flag == 0) {
        ValueImgfocus.style.opacity=0;
        ValueImg.style.opacity=1;
    } else if (flag == 1) {
        ValueImgfocus.style.opacity=1;
        ValueImg.style.opacity=0;
    }
    console.log(flag)
    setTimeout(function(){
        flag = 0;
    },100)
})

var flag = 0;
culture.addEventListener("click",function(){
    companyProfileContent.style.display="none";
    missionContent.style.display="none";
    ValueContent.style.display="none";
    cultureContent.style.display="block";
    surroundingsContent.style.display="none";
    tabTitleImagefocus.style.opacity=0;
    tabTitleImage.style.opacity=1;
    missionImgfocus.style.opacity=0;
    missionImage.style.opacity=1;
    ValueImgfocus.style.opacity=0;
    ValueImg.style.opacity=1;
    surroundingsImgfocus.style.opacity=0;
    surroundingsImg.style.opacity=1;
    cultureImgfocus.style.opacity=1;
    cultureImg.style.opacity=0;
    flag = 1
    console.log(flag)
})
culture.addEventListener("mouseover",function(){
        cultureImgfocus.style.opacity=1;
        cultureImg.style.opacity=0;
        console.log("模块可以点击")
})
culture.addEventListener("mouseout",function(){
    if (flag == 0) {
        cultureImgfocus.style.opacity=0;
        cultureImg.style.opacity=1;
    } else if (flag == 1) {
        cultureImgfocus.style.opacity=1;
        cultureImg.style.opacity=0;
    }
    console.log(flag)
    setTimeout(function(){
        flag = 0;
    },100)
})
var flag = 0;
surroundings.addEventListener("click",function(){
    companyProfileContent.style.display="none";
    missionContent.style.display="none";
    ValueContent.style.display="none";
    cultureContent.style.display="none";
    surroundingsContent.style.display="block";
    tabTitleImagefocus.style.opacity=0;
    tabTitleImage.style.opacity=1;
    missionImgfocus.style.opacity=0;
    missionImage.style.opacity=1;
    ValueImgfocus.style.opacity=0;
    ValueImg.style.opacity=1;
    cultureImgfocus.style.opacity=0;
    cultureImg.style.opacity=1;
    surroundingsImgfocus.style.opacity=1;
    surroundingsImg.style.opacity=0;
    flag = 1;
})
surroundings.addEventListener("mouseover",function(){
    surroundingsImgfocus.style.opacity=1;
    surroundingsImg.style.opacity=0;
})
surroundings.addEventListener("mouseout",function(){
    if(flag == 0){
        surroundingsImgfocus.style.opacity=0;
        surroundingsImg.style.opacity=1;
    }else if(flag == 1){
        surroundingsImgfocus.style.opacity=1;
        surroundingsImg.style.opacity=0;
    }
    console.log(flag)
    setTimeout(function(){
        flag = 0;
    },100)
})