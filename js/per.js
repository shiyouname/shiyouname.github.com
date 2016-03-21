/**
 * Created by Administrator on 2016/2/8.
 */
window.onload=function(){

    /*
     *第二个效果：效果导航
     */
    (function(){
        var oUl=document.getElementById('c_in_ul');
        var aLi=oUl.children;
        var iNow=0;
        for(var i=0;i<aLi.length-1;i++){
            aLi[i].onmouseenter=function(){
                startMove(aLi[aLi.length-1],this.offsetLeft);
            };
            aLi[i].onmouseleave=function(){
                startMove(aLi[aLi.length-1],iNow*aLi[0].offsetWidth);
            };

            (function(i){
                aLi[i].onclick=function(){
                    iNow=i;
                };
            })(i);

        }

        var left=0;
        var iSpeed=0;
        var timer=null;
        function startMove(obj,iTarget){
            clearInterval(timer);
            timer=setInterval(function(){
                iSpeed+=(iTarget-left)/5;
                iSpeed*=0.75;
                left+=iSpeed;

                obj.style.left=left+'px';
                //关闭定时器
                if(Math.round(iSpeed)==0&&Math.round(left)==iTarget){
                    clearInterval(timer);
                }
            },30);
        }
    })();
    /*
     *第三个效果：锚点效果
     */
    (function(){
        function moveToTarget(obj,iTarget){
            var start=obj.offsetTop;//要加上滚动距离
            var dis=iTarget-start;
            var count=Math.floor(700/16);
            var n=0;
            var timer=null;
            timer=setInterval(function(){
                n++;
                var a=1-n/count;
                var cur=start+(1-Math.pow(a,3))*dis;
                document.documentElement.scrollTop=cur;
                document.body.scrollTop=cur;
                if(n==count){
                    clearInterval(timer);
                }
            },16);
        }
        var oC_in_ul_li1=document.getElementById('c_in_ul_li1');
        var oC_in_ul_li2=document.getElementById('c_in_ul_li2');
        var oC_in_ul_li3=document.getElementById('c_in_ul_li3');
        var oC_in_ul_li4=document.getElementById('c_in_ul_li4');
        var oC_in_ul_li5=document.getElementById('c_in_ul_li5');
        oC_in_ul_li1.onclick=function(){
            moveToTarget(this,1400);
        };
        oC_in_ul_li2.onclick=function(){
            moveToTarget(this,2000);
        };
        oC_in_ul_li3.onclick=function(){
            moveToTarget(this,2850);
        };
        oC_in_ul_li4.onclick=function(){
            moveToTarget(this,3500);
        };
        oC_in_ul_li5.onclick=function(){
            moveToTarget(this,3500);
        };
    })();
    /*
     *第四个效果：自定义滚动条效果
    */
    (function(){
        var oCtxt=document.getElementById('c_txt');
        var oCwh=document.getElementById('c_wheel');
        var oCtxtIn=document.getElementById('c_txt_in');
        oCwh.onmousedown=function(ev){
            var oEvent=ev||event;
            var disY=oEvent.clientY-oCwh.offsetTop;
            document.onmousemove=function(ev){
                var oEvent=ev||event;
                var t=(oEvent.clientY-disY);
                if(t<0){
                    t=0;
                }else if(t>oCtxt.offsetHeight-oCwh.offsetHeight-2){
                    t=oCtxt.offsetHeight-oCwh.offsetHeight-2;
                }
                var scail=t/(oCtxt.offsetHeight-oCwh.offsetHeight);
                oCtxtIn.style.top=-scail*(oCtxtIn.offsetHeight-oCtxt.offsetHeight)+'px';
                oCwh.style.top=t+'px';
            };
            document.onmouseup=function(){
                document.onmouseup=document.onmousemove=null;
                oCwh.releaseCapture&&oCwh.releaseCapture();
            };
            oCwh.setCapture&&oCwh.setCapture();
            return false;
        };
        addEvent(oCtxt,function(down){
            var t=oCwh.offsetTop;
            if(down){
                t+=10;
            }else{
                t-=10;
            }
            if(t<0){
                t=0;
            }else if(t>oCtxt.offsetHeight-oCwh.offsetHeight-2){
                t=oCtxt.offsetHeight-oCwh.offsetHeight-2;
            }
            var scail=t/(oCtxt.offsetHeight-oCwh.offsetHeight);
            oCtxtIn.style.top=-scail*(oCtxtIn.offsetHeight-oCtxt.offsetHeight)+'px';
            oCwh.style.top=t+'px';
        });
    })();

    /*暂时用jQuery实现页面锚点平滑滚动效果*/
    $('#goAbout').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('#goWork').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('#goCon').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top-100
        }, 500);
        return false;
    });
    $('#goTop1').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('#goTop').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    $('#learnMore').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });
    /*
     *contact里面字数统计效果
     * label功能(html中已经完成)
     * 字数统计效果问题：
     *      当已经输入满100个字的时候如何做提示
     */
    (function(){
        var oMess=document.getElementById('mess');
        var oMes_num=document.getElementById('mes_num');
        var timer=null;
        var num=0;
        oMess.onfocus=function(){
            //聚焦的时候改变背景色
            oMess.style.background='#90ce36';
            clearInterval(timer);
            timer=setInterval(function(){
                num=oMess.value.length;
                    oMes_num.innerHTML='共输入'+num+'字,您还可以输入'+(50-num)+'字';
            },30);

        };
        oMess.onblur=function(){
            //失去焦点的时候背景色还原
            oMess.style.background='';
            clearInterval(timer);
        };
    })();
    /*
     *work里面选项卡效果js_one的效果
     *
     */
    (function(){
        var oBtn=document.getElementById('js_one_btn1');
        var oBtn2=document.getElementById('js_one_btn2');
        var oJs_one=document.getElementById('js_one');
        var aLi=oJs_one.getElementsByTagName('li');

        //class
        var aClass=[];
        for(var i=0; i<aLi.length; i++){
            aClass[i]=aLi[i].className;
        }

        var bReady=true;

        oBtn2.onclick=function(){

            aClass.push(aClass.shift());

            tab();
        };

        oBtn.onclick=function(){

            if(bReady==false)return;
            bReady=false;

            aClass.unshift(aClass.pop());

            tab();

            var oCur=document.querySelector('#js_one li.js_one_cur');
            oCur.addEventListener('transitionend',function(){
                bReady=true;
            },false);
        };

        function tab(){
            for(var i=0; i<aLi.length; i++){
                aLi[i].className=aClass[i];
            }
        }
    })();
    /*work_two*/
    (function(){
        function rnd(n,m){
            return parseInt(Math.random()*(m+1-n)+n);
        }
            var oBox=document.getElementById('work_two_box2');
            var oDiv=document.getElementById('work_two_div');
            var oNe=oDiv.children[0];
            var R=4;
            var C=7;
            var arr=["demo/iPhone/zns_demo3.html","http://www.google.com/","http://www.hao123.com/"];
            for(var r=0; r<R; r++){
                for(var c=0; c<C; c++){
                    var oSpan=document.createElement('span');
                    oSpan.style.width=oBox.offsetWidth/C+'px';
                    oSpan.style.height=oBox.offsetHeight/R+'px';
                    oBox.appendChild(oSpan);
                    oSpan.style.left=c*oSpan.offsetWidth+'px';
                    oSpan.style.top=r*oSpan.offsetHeight+'px';
                    oSpan.style.backgroundPosition='-'+c*oSpan.offsetWidth+'px -'+r*oSpan.offsetHeight+'px';
                }
            }

            //点击
            var iNow=0;
            var bReady=true;
            oNe.onclick=function(){
                if(bReady==false)return;
                bReady=false;
                iNow++;
                var aSpan=oBox.children;
                oBox.href=arr[iNow%3];
                for(var i=0; i<aSpan.length; i++){
                    aSpan[i].style.transition='1s all cubic-bezier(1,-0.99, 0.43, 1.29)';

                    var x=aSpan[i].offsetLeft+aSpan[i].offsetWidth/2-oBox.offsetWidth/2;
                    var y=aSpan[i].offsetTop+aSpan[i].offsetHeight/2-oBox.offsetHeight/2;

                    aSpan[i].style.transform='translate3d('+x+'px,'+y+'px,100px) rotateX('+rnd(0,180)+'deg) rotateY('+rnd(0,180)+'deg)';
                    aSpan[i].style.opacity=0;
                }
                aSpan[0].addEventListener('transitionend',function(){
                    for(var i=0; i<aSpan.length; i++){
                        aSpan[i].style.transition='none';
                        aSpan[i].style.opacity=1;
                        aSpan[i].style.transform='translate3d(0,0,0) rotateX(0deg) rotateY(0deg)';
                        oBox.style.backgroundImage='url(images/img/'+(iNow+1)%3+'.jpg)';
                        aSpan[i].style.backgroundImage='url(images/img/'+iNow%3+'.jpg)';
                    }
                    bReady=true;
                },false);
            };
    })();
    /*three*/
    (function(){
        var oWork_three_btn=document.getElementById('work_three_btn');
        var oBox = document.querySelector('.work_three_box');
        var oPage1 = document.querySelector('.work_three_box .page1');
        var oF = oPage1.children[0];
        var oB = oPage1.children[1];
        var oPage2 = document.querySelector('.work_three_box .page2');
        var oA=document.getElementById('work_three_a');

        var iNow = 0;
        var arr=["http://www.baidu.com/","http://www.google.com/","http://www.hao123.com/"];
        var bOk = false;
        oWork_three_btn.onclick=function(){
            if(bOk)return;
            bOk = true;
            iNow++;
            oPage1.style.WebkitTransition = '1s all ease';
            oPage1.style.WebkitTransform = 'perspective(800px) rotateY(-180deg)';
            oA.href=arr[iNow%3];
            oPage1.addEventListener('transitionend',function(){
                oPage1.style.WebkitTransition = 'none';
                oPage1.style.WebkitTransform = 'perspective(800px) rotateY(0deg)';
                oBox.style.backgroundImage = 'url(images/'+(iNow%3+1)+'.jpg)';
                oF.style.backgroundImage = 'url(images/'+(iNow%3+1)+'.jpg)';
                oB.style.backgroundImage = 'url(images/'+((iNow+1)%3+1)+'.jpg)';
                oPage2.style.backgroundImage = 'url(images/'+((iNow+1)%3+1)+'.jpg)';
                bOk = false;
            },false);
        };
    })();
    /*four*/
    (function(){

        function getStyle(obj,sName){
            return (obj.currentStyle||getComputedStyle(obj,false))[sName];
        }
        function startMove(obj,json,options){
            options = options||{};
            options.time=options.time||700;
            options.type=options.type||'ease-out';
            var start = {};
            var dis = {};
            for(var name in json){
                start[name] = parseFloat(getStyle(obj,name));
                if(isNaN(start[name])){
                    switch(name){
                        case 'top':
                            start[name]=obj.offsetTop;
                            break;
                        case 'left':
                            start[name]=obj.offsetLeft;
                            break;
                        case 'width':
                            start[name]=obj.offsetWidth;
                            break;
                        case 'height':
                            start[name]=obj.offsetHeight;
                            break;
                        case 'opacity':
                            start[name]=1;
                            break;
                        case 'borderWidth':
                            start[name]=0;
                            break;
                    }
                }
                dis[name]=json[name]-start[name];
            }
            var count = Math.floor(options.time/30);
            var n =0;
            clearInterval(obj.timer);
            obj.timer = setInterval(function(){
                n++;
                for(var name in json){
                    switch(options.type){
                        case 'linear':
                            var cur = start[name]+dis[name]*n/count;
                            break;
                        case 'ease-in':
                            var a = n/count;
                            var cur = start[name]+dis[name]*Math.pow(a,3);
                            break;
                        case 'ease-out':
                            var a = 1-n/count;
                            var cur = start[name]+dis[name]*(1-Math.pow(a,3));
                            break;
                    }
                    if(name=='opacity'){
                        obj.style.opacity=cur;
                        obj.style.filter='alpha(opacity:'+cur*100+')';
                    }else{
                        obj.style[name]=cur+'px';
                    }
                }
                if(n==count){
                    clearInterval(obj.timer);
                    options.end&&options.end();
                }
            },30);
        }
        function a2d(n){
            return n*180/Math.PI;
        }
        function hoverDir(obj,ev){
            var w = obj.offsetWidth;
            var h = obj.offsetHeight;
            var sT=document.documentElement.scrollTop||document.body.scrollTop;
            var sL=document.documentElement.scrollLeft||document.body.scrollLeft;
            var x = obj.offsetLeft+w/2-(ev.clientX+sL);
            var y = obj.offsetTop+h/2-(ev.clientY+sT);

            return Math.round((a2d(Math.atan2(y,x))+180)/90)%4;
        }
        function through(obj)
        {
            var oS = obj.children[0];
            obj.onmouseover=function(ev){
                var oEvent = ev||event;
                var oForm = oEvent.formElement||oEvent.relatedTarget;
                if(this.contains(oForm))return;
                var dir = hoverDir(this,oEvent);
                switch(dir){
                    case 0:
                        //右
                        oS.style.left = '200px';
                        oS.style.top = 0;
                        break;
                    case 1:
                        //下
                        oS.style.left = 0;
                        oS.style.top = '200px';
                        break;
                    case 2:
                        //左
                        oS.style.left = '-200px';
                        oS.style.top = 0;
                        break;
                    case 3:
                        //上
                        oS.style.left = 0;
                        oS.style.top = '-200px';
                        break;
                }
                startMove(oS,{top:0,left:0});
            };
            obj.onmouseout=function(ev){
                var oEvent = ev||event;
                var oTo = oEvent.toElement||oEvent.relatedTarget;
                if(this.contains(oTo))return;
                var dir = hoverDir(this,oEvent);
                switch(dir){
                    case 0:
                        //右
                        startMove(oS,{left:200,top:0});
                        break;
                    case 1:
                        //下
                        startMove(oS,{left:0,top:200});
                        break;
                    case 2:
                        //左
                        startMove(oS,{left:-200,top:0});
                        break;
                    case 3:
                        //上
                        startMove(oS,{left:0,top:-200});
                        break;
                }
            };
        }

            var oUl = document.getElementById('work_four_ul');
            var aLi = oUl.children;
            for(var i=0;i<aLi.length;i++){
                through(aLi[i]);
            }

    })();
};

















