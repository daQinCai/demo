$(window).scroll(function(){
	var a 
	a=$(window).scrollTop();
	// console.log(a)
	if($('#demandPostTitle').offset().top-a<=400){
		$('#demandPostTitle').animate({'top':'0.5rem'},300);
		$('#demandPostTitle').animate({'opacity':'1'},300)
	}if($('#developmentTitle').offset().top-a<=300){
		$('#developmentTitle').animate({'top':'0.5rem'},300);
		$('#developmentTitle').animate({'opacity':'1'},300)
	}if($('#arrangementTitle').offset().top-a<=400){
		$('#arrangementTitle').animate({'top':'0.5rem'},300);
		$('#arrangementTitle').animate({'opacity':'1'},300)
    }if($('#welfareTitle').offset().top-a<=300){
		$('#welfareTitle').animate({'top':'0.5rem'},300);
		$('#welfareTitle').animate({'opacity':'1'},300)
	}
})
window.addEventListener("scroll",function(e){

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
var sliderbox = document.getElementById('sliderbox');
var Learningbox = document.getElementById('Learningbox');
var jobsbox = document.getElementById('jobsbox');
var Salarybox = document.getElementById('Salarybox');
var jobDemandFous = document.getElementById('jobDemandFous');
var LearningFous = document.getElementById('LearningFous');
var jobsFous = document.getElementById('jobsFous');
var SalaryFous = document.getElementById('SalaryFous');
var jobDemand = document.getElementById('jobDemand');
var Learning = document.getElementById('Learning');
var jobs = document.getElementById('jobs');
var Salary = document.getElementById('Salary');

sliderbox.onclick = function(e){
    jobDemandFous.style.display="block";
    LearningFous.style.display="none";
    jobsFous.style.display="none";
    SalaryFous.style.display="none";

    jobDemand.style.fontSize="0.2rem";
    Learning.style.fontSize="0.18rem";
    jobs.style.fontSize="0.18rem";
    Salary.style.fontSize="0.18rem";
}
Learningbox.onclick = function(e){
    jobDemandFous.style.display="none";
    LearningFous.style.display="block";
    jobsFous.style.display="none";
    SalaryFous.style.display="none";
    jobDemand.style.fontSize="0.18rem";
    Learning.style.fontSize="0.2rem";
    jobs.style.fontSize="0.18rem";
    Salary.style.fontSize="0.18rem";
}
jobsbox.onclick = function(e){
    jobDemandFous.style.display="none";
    LearningFous.style.display="none";
    jobsFous.style.display="block";
    SalaryFous.style.display="none";
    jobDemand.style.fontSize="0.18rem";
    Learning.style.fontSize="0.18rem";
    jobs.style.fontSize="0.2rem";
    Salary.style.fontSize="0.18rem";
}
Salarybox.onclick = function(e){
    jobDemandFous.style.display="none";
    LearningFous.style.display="none";
    jobsFous.style.display="none";
    SalaryFous.style.display="block";
    jobDemand.style.fontSize="0.18rem";
    Learning.style.fontSize="0.18rem";
    jobs.style.fontSize="0.18rem";
    Salary.style.fontSize="0.2rem";
}
var fontcolor = document.getElementById('fontcolor');
var demandPost = document.getElementById('demandPost');
var arrRightPic = document.getElementById('arrRightPic');
var demandPostBtn = document.getElementById('demandPostBtn');
demandPost.onmouseover = function(e){
    demandPostBtn.style.backgroundColor="#1c9f9f";
    demandPostBtn.style.border="none";
    fontcolor.style.color="#ffffff";
}
demandPost.onmouseout = function(e){
    demandPostBtn.style.backgroundColor="#f6f6f6";
    demandPostBtn.style.border="solid 1px #666666";
    fontcolor.style.color="#666666";
}
var excolor = document.getElementById('excolor');
var Experienced = document.getElementById('Experienced');
var ExperiencedBtn = document.getElementById('ExperiencedBtn');
Experienced.onmouseover = function(e){
    ExperiencedBtn.style.backgroundColor="#1c9f9f";
    ExperiencedBtn.style.border="none";
    excolor.style.color="#ffffff";

}
Experienced.onmouseout = function(e){
    ExperiencedBtn.style.backgroundColor="#f6f6f6";
    ExperiencedBtn.style.border="solid 1px #666666";
    excolor.style.color="#666666";
}
var copycolor = document.getElementById('copycolor');
var Exper = document.getElementById('Exper');
var copyrightBtn = document.getElementById('copyrightBtn');
Exper.onmouseover = function(e){
    copyrightBtn.style.backgroundColor="#1c9f9f";
    copyrightBtn.style.border="none";
    copycolor.style.color="#ffffff";
}
Exper.onmouseout = function(e){
    copyrightBtn.style.backgroundColor="#f6f6f6";
    copyrightBtn.style.border="solid 1px #666666";
    copycolor.style.color="#666666";
}

var offlinecolor = document.getElementById('offlinecolor');
var offline = document.getElementById('offline');
var offlineBtn = document.getElementById('offlineBtn');
offline.onmouseover = function(e){
    offlineBtn.style.backgroundColor="#1c9f9f";
    offlineBtn.style.border="none";
    offlinecolor.style.color="#ffffff";

}
offline.onmouseout = function(e){
    offlineBtn.style.backgroundColor="#f6f6f6";
    offlineBtn.style.border="solid 1px #666666";
    offlinecolor.style.color="#666666";
}
