window.onload = function() {
    var banners = document.querySelectorAll('.banner-li');
    var dots = document.querySelectorAll('.dot-li');
    var btnLeft = document.querySelector('.btn-left');
    var btnRight = document.querySelector('.btn-right');
    var banner = document.querySelector('.banner');

    var index = 0;
    var timer = null;
    banners[0].style.opacity = 1;
    carousel();
    //鼠标移入轮播暂停
    banner.onmouseover = function() {
            clearInterval(timer);
        }
        //鼠标移出轮播继续
    banner.onmouseout = function() {
            carousel();
        }
        //点击轮播点
    for (let j = 0; j < banners.length; j++) {
        dots[j].onclick = function() {
            index = j;
            if (index >= banners.length) {
                index = 0;
            }
            xianshi();
        }
    }
    //点击右箭头切换图片和轮播点
    btnRight.onclick = function() {
            judge();
            xianshi();
        }
        //点击左箭头切换图片和轮播点
    btnLeft.onclick = function() {
            index--;
            if (index < 0) {
                index = banners.length - 1;
            }
            xianshi();
        }
        //实现自动轮播
    function carousel() {
        timer = setInterval(function() {
            judge();
            xianshi();
        }, 1000)
    }
    //判断返回，从最后一张切到第一张，函数
    function judge() {
        index++;
        if (index >= banners.length) {
            index = 0;
        }
    }
    // 显示当前内容，即图片和轮播点，函数
    function xianshi() {
        for (let i = 0; i < banners.length; i++) {
            banners[i].style.opacity = 0;
            dots[i].classList.remove('selected');
            banners[i].style.zIndex = 0;
        }
        banners[index].style.opacity = 1;
        dots[index].classList.add('selected');
        banners[index].style.zIndex = 5;
    }
}