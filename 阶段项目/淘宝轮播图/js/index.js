window.onload = function() {
    //获取最大的盒子
    var banner = document.querySelector('.banner');
    //获取装图片的UL
    var baUl = banner.children[0];
    var baImg = baUl.children;
    var index = 0;
    var timer = null;
    var Length = baImg[0].offsetWidth;

    var tots = banner.children[1]; //轮播点盒子
    var btnLift = banner.children[2];
    var btnRight = banner.children[3];
    //克隆第一张图片并添加到最后
    baUl.appendChild(baImg[0].cloneNode(true));

    for (let i = 0; i < baImg.length - 1; i++) {
        var li = document.createElement('li');
        tots.appendChild(li);
    }

    //第一个轮播点默认选中
    tots.children[0].className = "select";




    //设置自动轮播
    timer = setInterval(move, 3000);

    //轮播移动方向向左
    function move() {
        if (index == baImg.length - 1) {
            baUl.style.left = 0;
            index = 0;
        }
        index++;
        animate(baUl, -index * Length);
    }
    //轮播移动方向向右
    function moveleft() {
        if (index == 0) {
            baUl.style.left = -(baImg.length - 1) * Length + "px";
            index = baImg.length;
        }
        index--;
        animate(baUl, -index * Length);
    }

    //轮播动画
    function animate(ul, len) {
        clearInterval(ul.timer);
        ul.timer = setInterval(function() {
                var lef = ul.offsetLeft;
                var speed = 10;
                speed = lef > len ? -10 : 10;
                var cha = lef - len;
                console.log(len);
                if (Math.abs(cha) > Math.abs(speed)) {
                    ul.style.left = lef + speed + "px";
                } else {
                    ul.style.left = len + "px";
                }
            }, 10)
            // console.log(lef);
    }
    banner.onmouseover = function() {
        clearInterval(timer);
    }
    banner.onmouseout = function() {
        timer = setInterval(move, 3000);
    }

    btnRight.onclick = function() {
        move();
    }
    btnLift.onclick = function() {
            moveleft();
        }
        // console.log(Length);
}