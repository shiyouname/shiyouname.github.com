// JavaScript Document
window.onload=function(){
	(function(){
		var oSearch_input=document.getElementById('search_input');
		var oSearch_in_pos=document.getElementById('search_in_pos');	
		oSearch_input.onfocus=function(){
			if(oSearch_input.value){
				oSearch_input.value='';
				
			}
		};
	
		oSearch_input.onclick=function(){
			if(oSearch_in_pos.style.display=='block'){
					oSearch_in_pos.style.display='none';
			}else{
					oSearch_in_pos.style.display='block';
			}	
		};
		var aLi=oSearch_in_pos.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			aLi[i].onclick=function(){
				var oSpan=this.getElementsByTagName('span')[0];
				oSearch_in_pos.style.display='none';
				oSearch_input.value=oSpan.innerHTML;	
			};	
		}
	})();//搜索条
	(function(){
		var oTop_ban_x=document.getElementById('top_ban_x');
		var oTop_ban=document.getElementById('top_ban');
		oTop_ban_x.onclick=function(){
			oTop_ban.style.display='none';
		};	
	})();//顶部消失
	(function(){
		var oSearch_r_c=document.getElementById('search_r_c');
		var oSearch_pos=document.getElementById('search_r_c_pos');
		oSearch_r_c.onmouseover=function(){
				oSearch_pos.style.display='block';
		};
		oSearch_r_c.onmouseout=function(){
				oSearch_pos.style.display='none';
		};	
	})();//观看记录
	(function(){
		var oNav_l=document.getElementById('nav_l');
		var aLi=oNav_l.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			aLi[i].onmouseover=function(){
				var oDiv=this.getElementsByTagName('div')[0];
				if(oDiv){
					oDiv.style.display='block';	
				}	
			};	
			aLi[i].onmouseout=function(){
				var oDiv=this.getElementsByTagName('div')[0];
				if(oDiv){
					oDiv.style.display='none';	
				}	
			};
		}	
	})();//电影电视剧下拉
	(function(){
		var oMain_w=document.getElementById('main_w');	
		var aDiv=oMain_w.getElementsByTagName('div');
		for(var i=0;i<aDiv.length;i++){
			aDiv[i].onmouseover=function(){
				var oA=this.getElementsByTagName('a')[0];	
				oA.style.display='block';
			};
			aDiv[i].onmouseout=function(){
				var oA=this.getElementsByTagName('a')[0];	
				oA.style.display='none';
			};	
		}
	})();//透明层
	(function(){
		var oHot_r=document.getElementById('hot_r');
		var oHotFilm_r=document.getElementById('hotFilm_r');
		tab(oHot_r);
		tab(oHotFilm_r);
		var aLi=oHotFilm_r.getElementsByTagName('li'); 
		for(var i=0;i<aLi.length;i++){
			if(i%2==0){
				aLi[i].style.background='#eeeeee';
			}
		}
		function tab(obj){
			var aA=obj.getElementsByTagName('a');
			var aUl=obj.getElementsByTagName('ul');
			for(var i=0;i<aUl.length;i++){
				aA[i].index=i;
				aA[i].onmouseover=function(){
					for(var i=0;i<aUl.length;i++){
						aUl[i].className='hot_r_li';	
					}
					aUl[this.index].className='hot_r_li show';	
					
				};	
			}
		}
		var oNew_r=document.getElementById('new_r');
		tab(oNew_r);
		var aLi=oNew_r.getElementsByTagName('li'); 
		for(var i=0;i<aLi.length;i++){
			if(i%2==0){
				aLi[i].style.background='#eeeeee';
			}
		}
		var aLi=oHot_r.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			if(i%2==0){
				aLi[i].style.background='#eeeeee';
			}
		}
		
		
	})();//影视排行榜选项卡
	(function(){
		var oNew_c=document.getElementById('new_content');
		newPos(oNew_c);
		function newPos(obj){
			var aLi=obj.getElementsByTagName('li');
			for(var i=0;i<aLi.length;i++){
				aLi[i].onmouseover=function(){
					var oA=this.getElementsByTagName('a')[0];
					var oA1=this.getElementsByTagName('a')[1];
					oA.style.display='block';
					oA1.style.display='block';	
				};
				aLi[i].onmouseout=function(){
					var oA=this.getElementsByTagName('a')[0];
					var oA1=this.getElementsByTagName('a')[1];
					oA.style.display='none';
					oA1.style.display='none';	
				};	
			}
			
		}
		
		var oHot_film=document.getElementById('hot_film');	
		newPos(oHot_film);
	})();//最新电视剧&&老炮儿
	(function(){
		var oTank_r_tab=document.getElementById('tank_r_tab');
		var aA=oTank_r_tab.getElementsByTagName('a');
		var oR_tab_pos=document.getElementById('r_tab_pos');
		var aDiv=oR_tab_pos.getElementsByTagName('div');
		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i].onmouseover=function(){
					for(var i=0;i<aA.length;i++){
						aA[i].className='';	
						aDiv[i].className='';
					}
					this.className='togr';	
					aDiv[this.index].className='show';
			};
		}
			
	})();//卫视直播
	(function(){
		var oTank_l=document.getElementById('tank_l');
		var oFilm_l=document.getElementById('film_l');
		var oFun_l=document.getElementById('fun_l');
		var oEvery_bottom=document.getElementById('every_bottom');
		var oSmall=document.getElementById('small');
		var oClown=document.getElementById('clown');
		var oGirl=document.getElementById('girl');
		var oSport=document.getElementById('sport');
		var oMv=document.getElementById('mv');
		var oB_girl=document.getElementById('b_girl');
		var oGame=document.getElementById('game');
			tank(oClown);
			tank(oGirl);
			tank(oSport);
			tank(oMv);
			tank(oB_girl);
			tank(oGame);
			tank(oSmall);
			tank(oEvery_bottom);
			tank(oFun_l);
			tank(oTank_l);
			tank(oFilm_l);
		function tank(obj){
			var aLi=obj.getElementsByTagName('li');
			for(var i=0;i<aLi.length;i++){
				aLi[i].onmouseover=function(){
					var oA=this.getElementsByTagName('a')[0];
					oA.style.display='block';
				};	
				aLi[i].onmouseout=function(){
					var oA=this.getElementsByTagName('a')[0];
					oA.style.display='none';
				};
			}
		}
	})();//电视剧神吐槽
	(function(){
		var oHot=document.getElementById('hot');
		var oAmazing=document.getElementById('amazing');
		var oComic_l=document.getElementById('comic_l');
			hot(oComic_l);
			hot(oHot);
			hot(oAmazing);
			function hot(obj){
				var aLi=obj.getElementsByTagName('li');
				var aEle=getClassName(obj,'box1');
				for(var i=0;i<aLi.length;i++){
					aLi[i].index=i;
					aLi[i].onmouseover=function(){
						aEle[this.index].style.display='block';
					};	
					aLi[i].onmouseout=function(){
						aEle[this.index].style.display='none';
					};
				}
			}
		
	})();//热点聚焦
	(function(){
		var oComic_r_tab=document.getElementById('comic_r_tab');
		var aA=oComic_r_tab.getElementsByTagName('a');
		var aOcomic_r_ul=getClassName(oComic_r_tab,'ocomic_r_ul');
		var aLi=oComic_r_tab.getElementsByTagName('li');
		for(var i=0;i<aLi.length;i++){
			if(i%2==0){
				aLi[i].style.background='#ddd';
			}	
		}
		for(var i=0;i<aA.length;i++){
			aA[i].index=i;
			aA[i].onmouseover=function(){
				for(var i=0;i<aA.length;i++){
					aA[i].className='';
					aOcomic_r_ul[i].className='ocomic_r_ul clearfix';
				}
				aA[this.index].className='comic_r_tab_active';
				aOcomic_r_ul[this.index].className='ocomic_r_ul clearfix show';
			};	
		}
	})();
	
	(function(){
		var oEvery_tab=document.getElementById('every_tab');
		var aLi=oEvery_tab.getElementsByTagName('li');	
		var oEvery_bottom=document.getElementById('every_bottom');
		var aUl=oEvery_bottom.getElementsByTagName('ul');
		for(var i=0;i<aLi.length;i++){
			aLi[i].index=i;
			aLi[i].onmouseover=function(){
				for(var i=0;i<aLi.length;i++){
					aLi[i].className='';
					aUl[i].className='every_bottom tank_l_ul';
				}
				aLi[this.index].className='active';
				aUl[this.index].className='every_bottom show tank_l_ul';
			};
		}
	})();
};









