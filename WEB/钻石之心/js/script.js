/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2016-01-27 22:13:43
 * @version $Id$
 */
//页面加载完毕后触发
window.onload =function(){
 a();b();

// 焦点轮播图
var container = document.getElementById('container');
            var list = document.getElementById('list');
            var buttons = document.getElementById('buttons').getElementsByTagName('span');
            var prev = document.getElementById('prev');
            var next = document.getElementById('next');
            var index = 1;
            var len = 4;
            var animated = false;
            var interval = 5372;
            var timer;

            function animate (offset) {
                if (offset == 0) {
                    return;
                }
                animated = true;
                var time = 300;
                var inteval = 10;
                var speed = offset/(time/inteval);
                var left = parseInt(list.style.left) + offset;

                var go = function (){
                    if ( (speed > 0 && parseInt(list.style.left) < left) || (speed < 0 && parseInt(list.style.left) > left)) {
                        list.style.left = parseInt(list.style.left) + speed + 'px';
                        setTimeout(go, inteval);
                    }
                    else {
                        list.style.left = left + 'px';
                        if(left>-200){
                            list.style.left = -1343 * len + 'px';
                        }
                        if(left<(-1343 * len)) {
                            list.style.left = '-1343px';
                        }
                        animated = false;
                    }
                }
                go();
            }

            function showButton() {
                for (var i = 0; i < buttons.length ; i++) {
                    if( buttons[i].className == 'on'){
                        buttons[i].className = '';
                        break;
                    }
                }
                buttons[index - 1].className = 'on';
            }

            function play() {
                timer = setTimeout(function () {
                    next.onclick();
                    play();
                }, interval);
            }
            function stop() {
                clearTimeout(timer);
            }

            next.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 4) {
                    index = 1;
                }
                else {
                    index += 1;
                }
                animate(-1343);
                showButton();
            }
            prev.onclick = function () {
                if (animated) {
                    return;
                }
                if (index == 1) {
                    index = 4;
                }
                else {
                    index -= 1;
                }
                animate(1343);
                showButton();
            }

            for (var i = 0; i < buttons.length; i++) {
                buttons[i].onclick = function () {
                    if (animated) {
                        return;
                    }
                    if(this.className == 'on') {
                        return;
                    }
                    var myIndex = parseInt(this.getAttribute('index'));
                    var offset = -1343 * (myIndex - index);

                    animate(offset);
                    index = myIndex;
                    showButton();
                }
            }

            container.onmouseover = stop;
            container.onmouseout = play;

            play();
} 
//-------------------------------------------------------------------------------
//回到顶部和显示topbody代码
function a(){
	var obth = document.getElementById('gotop');
  var otop = document.getElementById('top');
  var owelcome = document.getElementById('welcome');
  var oshoucang = document.getElementById('shoucang');
  var okefu = document.getElementById('kefu');
  var obtnlogin = document.getElementById('btnlogin');
  var osousuo1 = document.getElementById('sousuo1');
  var obcolor1 = document.getElementById('bcolor1');
  var obcolor2 = document.getElementById('bcolor2');
  var obcolor3 = document.getElementById('bcolor3');
  var obcolor4 = document.getElementById('bcolor4');
  var obcolor5 = document.getElementById('bcolor5');
  var obcolor6 = document.getElementById('bcolor6');
    var timer = null;
    var isTop = true;
    //获取页面可视区的高度
    var clientHeight = document.documentElement.clientHeight;

    //滚动条滚动时触发
    window.onscroll = function (){
      //显示gotop按钮和topbody
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop >= clientHeight){
      	  obth.style.display= 'block';
          otop.style.background = '#fff';
          oshoucang.style.color= '#000';
          okefu.style.color= '#000';
          obtnlogin.style.color= '#000';
          obcolor1.style.color = '#000';
          obcolor2.style.color = '#000';
          obcolor3.style.color = '#000';
          obcolor4.style.color = '#000';
          obcolor5.style.color = '#000';
          obcolor6.style.color = '#000';

      }else{
          obth.style.display = 'none';
          otop.style.background = '#000';
          okefu.style.color= '#fff';
          oshoucang.style.color= '#fff';
          obtnlogin.style.color= '#fff';
          obcolor1.style.color= '#fff';
          obcolor2.style.color= '#fff';
          obcolor3.style.color= '#fff';
          obcolor4.style.color= '#fff';
          obcolor5.style.color= '#fff';
          obcolor6.style.color= '#fff';
      //按回到首页按钮gotop后，滚动滚动条时页面停止滚动。 
      if (!isTop){
      	  clearInterval(timer);
      }
      isTop = false;
    }

	obth.onclick = function(){
		//设置定时器
        timer = setInterval(function(){
        //获取滚动条距离顶部的高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        //设置滚动条的速度
        var ispeed =  Math.floor(-osTop / 10);
        document.documentElement.scrollTop = document.body.scrollTop = osTop + ispeed;
        isTop = true;
        if (osTop == 0){
        clearInterval(timer);
        }

        },30);
	
	}
}
}

//----------------------------------------------------------------------------------


//弹出层效果代码
function openNew(){
  //获取页面的高度和宽度
  var sHeight=document.documentElement.scrollHeight;

  var sWidth=document.documentElement.scrollWidth;

    //可视区域的高度
    var wHeight=document.documentElement.clientHeight;
    //677

  var oMask=document.createElement('div');
  oMask.id="mask";
    oMask.style.height=sHeight+"px";
    oMask.style.width=sWidth+"px";
    document.body.appendChild(oMask);

    var oLogin=document.createElement('div');
  oLogin.id="login";
  oLogin.innerHTML="<div class='loginCon'><div id='close'></div></div>"
  document.body.appendChild(oLogin);
  //获取login的宽度和高度
  var dHeight=oLogin.offsetHeight;
  var dWidth=oLogin.offsetWidth;
  //给login的left和top赋值
  oLogin.style.left=(sWidth-dWidth)/2+"px";
  oLogin.style.top=(wHeight-dHeight)/2+"px";  
     

    var oClose=document.getElementById('close');
      oMask.onclick=oClose.onclick=function(){
              document.body.removeChild(oMask);
                document.body.removeChild(oLogin);
            } 
}

function b(){
  var oBtn=document.getElementById('btnlogin');
      oBtn.onclick=function(){
         openNew()
            
       } 


  }

//---------------------------------------------------------------------------------
//
 



        
