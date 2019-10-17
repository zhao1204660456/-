var banners = document.querySelectorAll('.banner-li');
var dots = document.querySelectorAll('.dot');
var btnLeft = document.querySelector(".btn-left");
var btnRight = document.querySelector(".btn-right");
var banner = document.querySelector(".banner");
banners[0].style.opacity = 1;
var index = 0;
var timer = setInterval(function() {
        index++;
        if (index >= banners.length) {
            index = 0;
        }
        show();
    }, 2000)
    // 鼠标移入清除timer
banner.onmouseover = function() {
    clearInterval(timer);
}
banner.onmouseout = function() {
        timer = setInterval(function() {
            index++;
            if (index >= banners.length) {
                index = 0;
            }
            show();
        }, 2000)
    }
    //点击左箭头,显示上一张图片
btnLeft.onclick = function() {
        index--;
        if (index < 0) {
            index = banners.length - 1;
        }
        show();
    }
    //点击有箭头，显示下一张图片
btnRight.onclick = function() {
        index++;
        if (index >= banners.length) {
            index = 0;
        }
        show();
    }
    //定时器函数
for (let j = 0; j < banners.length; j++) {
    dots[j].onclick = function() {
        index = j;
        show();
    }
}

function show() {
    for (let i = 0; i < banners.length; i++) {
        banners[i].style.opacity = 0;
        dots[i].classList.remove("active");
        banners[i].style.zIndex = 1;
    }
    banners[index].style.opacity = 1;
    dots[index].classList.add("active");
    banners[index].style.zIndex = 5;
}

//1.获取所有轮播图(所有轮播图默认都为隐藏状态)
//2.将图片中的第一张显示（下标为0的图片)
//3.证明变量index表示当前显示图片的下标，默认为0
//4.声明变量timer用来存储时间函数，方便清除
//5.通过setInterval每过1000毫秒将index自增1，再讲index对应的图片的opacity设置为1
//6.在时间函数值判断index的值，如果index大于或等于最大下标，把index变为0
//7.在第一轮轮播结束后，后面图片无法继续显示；原因是每一张图片都已显示，按照正常顺序排列，轮播失效；需要将所有图片隐藏；在每一次函数开始时，使用for循环将每一张图片隐藏(将opacity设为0)
//8.opacity只是将元素的透明度改为0，但是元素还是存在，所以无论点击哪一张图片，出发的都是最后一张图片；解决办法：将当前显示的层级提高，其他都降低
//9.根据当前图片，给对应的轮播点添加选中状态，因为轮播点与图片的下标一一对应，所以可以使用index来表示当前钻中轮播点的下标
//10.因为用户在鼠标移入图片按钮，轮播点都需要将自动轮播停止，需要清除时间函数(clearInterval),移入大盒子清除
//11.点击右侧的按钮显示下一张图片，所以图片下标index需要自增，这个过程与西东轮播的过程相同
//12.点击左侧的按钮显示上一张图片，所以图片下标index需要自减
//13.点击轮播点显示对应的图片，每个轮播点下标与图片下标一一对应，多以轮播点的下标可以用于轮播点，将index是指改为轮播点下标