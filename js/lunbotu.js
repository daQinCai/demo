window.App={};
(function(App){
	// 帮助函数，将obj2的属性复制给obj1（前提这个属性obj1没有）
   function extend(obj1,obj2){
   	  for(var i in obj2){
   	  	if(typeof obj1[i]==='undefined'){
           obj1[i]=obj2[i];
   	  	}
   	  }
   	  return obj1;
   }

   function Slider(options){
      extend(this,options);//将options的属性方法给new Slider出来的对象
      this.init();//绑定事件
      this.nav(0);//跳转函数,默认为0
      this.autoplay();//自动播放
   }
   
   Slider.prototype.init = function(){
   	  for(var i=0;i<this.imgLength;i++){
         this.cursor[i].addEventListener('click',function(index){
         	this.nav(index);
         	this.stop();
         	this.autoplay();
         }.bind(this,i))
   	  }
   	  var new_index;
   	  this.btn[0].addEventListener('click',function(){
   	  	 new_index=this.index-1>=0?this.index-1:this.imgLength-1;//因为数组从0开始，所以this.imgLength要减1
   	  	 this.nav(new_index);
   	  	 this.stop();
          this.autoplay();
   	  }.bind(this));
      this.btn[1].addEventListener('click',function(){
      	 new_index=this.index+1<=(this.imgLength-1)?this.index+1:0;
      	 this.nav(new_index);
      	 this.stop();
      	 this.autoplay();
      }.bind(this));

      //图片暂停绑定
      this.sliders.addEventListener('mouseenter',function(){
        this.stop();
      }.bind(this));

      this.sliders.addEventListener('mouseleave',function(){
        this.autoplay();
      }.bind(this));     
   }

   //下一页
   Slider.prototype.next=function(){
     var index=(this.index+1)%this.imgLength;
     this.nav(index);
   }

   //跳转到指定页面
   Slider.prototype.nav=function(index){
   	 if(this.index==index) return;
   	 this.last_index=this.index||0;
   	 this.index=index||0;
   	 this.fade();
   	 this.setCurrent();
   }

   //设置按钮选中状态
   Slider.prototype.setCurrent=function(){
   	 this.cursor[this.last_index].setAttribute('class','');
     this.cursor[this.index].setAttribute('class','z-active02');
   }

   //图片切换效果
   Slider.prototype.fade=function(){
   	 this.slider[this.last_index].style.opacity=0;
   	 this.slider[this.index].style.opacity=1;
   }

   //自动播放
   Slider.prototype.autoplay=function(){
     this.time=setInterval(function(){
     	this.next();
     }.bind(this),2000);//3秒跳转一次
   }

   //暂停播放
   Slider.prototype.stop=function(){
   	  clearInterval(this.time);
   }

   App.Slider=Slider;//暴露接口给全局对象App
})(window.App)

var slider1 = new App.Slider({
  sliders:document.getElementsByClassName('m-slider')[0],//获取最大的图片盒子
	slider:document.getElementsByClassName('slider_img'),//获取图片li节点数组
  imgLength:document.getElementsByClassName('slider_img').length, //获取图片数组的长度
	cursor:document.getElementsByClassName('m-cursor')[0].getElementsByTagName('li'),//获取按钮节点
	btn:document.getElementsByClassName('banner-btn')[0].getElementsByTagName('div'),//获取左右按钮节点

});
