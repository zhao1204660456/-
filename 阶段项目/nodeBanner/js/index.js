window.onload = function() {
    //获取页面元素，包含图片的大盒子
    var bBox = document.querySelector('banner-box');
    var bUl = document.querySelector('.banner-ul');
    //使用节点属性获取所有图片
    var bImg = bUl.children;
    var timer = null;
    var index = 0;
    var distance = 0;
    setInterval(function() {
        distance--;
        bBox.style.left = distance + "px";
    }, 10)



    //声明index表示当前图片正在显示的下标

    //克隆第一张图片放在盒子最后，使用cloneNode(),appendChild();

    //使用setInterval实现自动轮播

    //创建move函数用来改变index的数值，实现轮播

    //index自增

    //让banner-box动画，调用animate函数

    //创建animate函数，将banner-box数字那个值进行动态改变（banner-box，位置）

    // 使用setinterval

    // 获取banner-box的当前位置用offsetLeft

    // 运动速度speed=-10；

    // 使用三元表达式确定speed确定正负


    // 将当前的位置进行移动

    // 将banner-box的left属性值移动

}





//1.获取图片元素，获取包含图片的大盒子
//2.声明变量index表示房钱显示图片的下标
//3.setInterval实现自动轮播
//4.创建move，实现图片下标改变
//5.创建animate函数实现图片的动画效果