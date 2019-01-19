$(window).scroll(function(){
	var a 
    a=$(window).scrollTop();
    if($(".mainteam").offset().top-a<=500){
        $('.mainBusinessTitle').animate({'padding-top':'0.33rem'},500)
        $('.mainBusinessDetail').animate({'padding-top':'0.13rem'},500)
		$('.mainteam').animate({'opacity':'1'},100)
    }if($(".aboutus").offset().top-a<=500){
        $('.aboutus').animate({'opacity':'1'},100)
        $('.aboutanimation').animate({'margin-left':'0rem'},500)
    }if($(".Cooperation").offset().top-a<=500){
        $('.CooperationTitle').animate({'padding-top':'0.33rem'},500)
        $('.CooperationDetail').animate({'padding-top':'0.13rem'},500)
        $('.brand').animate({'margin-top':'0.23rem'},500)
		$('.Cooperation').animate({'opacity':'1'},100)
    }if($(".contactus").offset().top-a<=500){
        $('.contactusTitle').animate({'padding-top':'0.33rem'},500)
        $('.contactusDetail').animate({'padding-top':'0.13rem'},500)
        $('.contactusContent').animate({'margin':'0.38rem auto'},500)
		$('.contactus').animate({'opacity':'1'},100)
    }
})