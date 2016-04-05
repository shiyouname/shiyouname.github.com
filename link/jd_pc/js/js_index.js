// JavaScript Document
window.onload=function(){
	//搜索框
	var oInpt=document.getElementById('inpt');
	oInpt.onfocus=function(){
		if(oInpt.value=='穷狗穷狗'){
			oInpt.value='';
		}
	};
	oInpt.onblur=function(){
		if(oInpt.value==''){
			oInpt.value='穷狗穷狗';
		}
	};
	
	//轮播图
	var oBanner_pic=document.getElementById('banner_pic');
	var oNext=document.getElementById('next');
	var oPre=document.getElementById('pre');
	var aImg=oBanner_pic.getElementsByTagName('img');
	var aBtn=oBanner_pic.getElementsByTagName('span');
	var iNow=0;
	for(var i=0;i<aImg.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			iNow=this.index;
			tab();
		}
	}
	function tab(){
		for(var i=0;i<aImg.length;i++){
			aImg[i].className='';
			aBtn[i].className='';
		}
		aImg[iNow].className='toshow';
		aBtn[iNow].className='toactive';
	}
	oNext.onclick=next;
	
	function next(){
		iNow++;
		if(iNow==aImg.length){
			iNow=0;
		}
		tab();
	}
	oPre.onclick=function(){
		iNow--;
		if(iNow<0){
			iNow=aImg.length-1;
		}
		tab();
	}
	var timer=setInterval(next,3000);
	oBanner_pic.onmouseout=function(){
		clearInterval(timer);
		timer=setInterval(next,3000);
	}
	oBanner_pic.onmouseover=function(){
		clearInterval(timer);
	}
	//侧边栏
	var oCont_nav=document.getElementById('cont_nav');
	var aLi=oCont_nav.getElementsByTagName('li');
	var iNum=29;
	for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				if(this.index==0){
					aLi[this.index].style.borderTop='2px solid #fff';
				}else{
					aLi[this.index].style.borderTop='2px solid #e4393c';
				}
				if(this.index==aLi.length-1){
					aLi[this.index].style.borderBottom='4px solid #fff';
				}else{
					aLi[this.index].style.borderBottom='2px solid #e4393c';
				}
				var iM=-([this.index]*iNum+2);
				//alert(iM+'px');
				var oDiv=aLi[this.index].getElementsByTagName('div')[0];
				oDiv.style.display='block';
				//this.style.background='#F0F0F0';
				aLi[this.index].style.width=192+'px';
				oDiv.style.top=iM+'px';
				
				
			}
			aLi[i].onmouseout=function(){
				var oDiv=this.getElementsByTagName('div')[0];
				oDiv.style.display='none';
				this.style.background='';
				this.style.width=188+'px';
				this.style.borderTop='2px solid #fff';
				this.style.borderBottom='2px solid #fff';
			}
		
	}
}






