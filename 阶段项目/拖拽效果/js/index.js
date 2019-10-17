/*  
拖拽效果：
    1.通过鼠标按下之后鼠标移动，来模拟拖拽效果
    2.在鼠标按下之后保存书次奥距离事件源左侧和顶部的距离offsetLeft、offsetRight
    3.在鼠标按下之后添加鼠标移动事件，在鼠标移动过程中记录鼠标距浏览器左侧和顶部的距离
    4.将两个距离进行剪发运算，得到元素的定位属性，进行设置
    5.添加鼠标抬起事件，在鼠标抬起以后清除鼠标移动事件
*/



window.onload = function() {
    //1.获取页面元素.jack:nth-child(1);第一个
    var box = document.querySelector('.box:nth-child(1)');
    //2.声明变量分边表示鼠标按下时、移动时、结束时的位置（starX,startY,moveX,moxeY,endX,endY）
    var starX, starY, moveX, moveY, endX, endY;
    //3.给元素添加鼠标按下事件，并且在鼠标按下的同时保存起始位置，通过事件对象
    //()=>{}  箭头函数  
    box.onmousedown = function(e) {
        //var ev=e||event;事件的兼容写法，防止对象为空，发生错误
        var ev = e || event;
        //将开始位置保存
        starX = ev.offsetX;
        starY = ev.offsetY;
        //4.给window添加鼠标移动事件，必须在鼠标按下事件以后，防止发生直接出发移动事件
        window.addEventListener("mousemove", move, false);
    }


    //5.给元素添加鼠标抬起事件，在数抬起以后江一东事件清除
    window.onmouseup = function() {
            window.removeEventListener('mousemove', move, false);
        }
        //移动时的事件处理函数
    function move(e) {
        var ev = e || event;
        //保存在移动过程中的位置，记录鼠标相对于浏览器的左侧和顶部的距离clientX、clientY
        moveX = ev.clientX;
        moveY = ev.clientY;

        //将两个距离进行减法运算，得出元素的定位属性值，并且赋给endX,endY
        endX = moveX - starX;
        endY = moveY - starY;
        //判断属性的最大值和最小值
        if (endX <= 0) {
            box.style.left = 0;
        } else if (innerWidth - box.offsetWidth <= endX) {
            box.style.left = innerWidth - box.offsetWidth + "px";
        } else {
            box.style.left = endX + "px";
        }

        // console.log(endX, endY);
        //得出定位属性以后，给元素设置行内样式
        if (endY <= 0) {
            box.style.top = 0;
        } else if (innerHeight - box.offsetHeight <= endY) {
            box.style.top = innerHeight - box.offsetHeight + "px";
        } else {
            box.style.top = endY + "px";
        }
    }
}