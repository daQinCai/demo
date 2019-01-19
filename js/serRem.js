(function (doc,win){
	var docEl = doc.documentElement;
	resetPage = function (){
		var clientWidth = docEl.clientWidth;
		if( clientWidth>=1200 ){
			docEl.style.fontSize = '100px';
		}else{
			docEl.style.fontSize = (clientWidth / 1200) * 100+ "px"
		}			
	}
	if( !win.addEventListener ){
		return ;
	}
	doc.addEventListener('DOMContentLoaded',resetPage,false);
	win.addEventListener('resize',resetPage,false);
})(document,window)