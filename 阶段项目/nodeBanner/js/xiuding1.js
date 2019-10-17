window.onload = function() {
    let box = document.querySelector('.banner');
    let banBox = box.children[0];
    let banUl = banBox.children[0]; //装图片的大盒子
    let banImg = banUl.children; //获取图片
    let banDot = box.children[1]; //获取节点盒子
    let btnLeft = box.children[2]; //获取左箭头
    let btnRight = box.children[3]; //获取右箭头
    banUl.appendChild(banImg[0].cloneNode(true)); //克隆第一张图片斌添加
    //创建轮播点
    for (let i = 0; i < banImg.length - 1; i++) {
        let li = document.createElement('li');
        li.classList.add("dot");
        banDot.appendChild(li);
    }
    //获取每个轮播点
    let banDots = banDot.children;
    //设置第一个轮播点为选中状态
    banDots[0].classList.add('active');
    //获取一张轮播图的宽度
    let width = banImg[0].offsetWidth;
    let index = 0;
    let timer = null;
    let animationTimer = null;
    //实现自动轮播
    timer = setInterval(move, 2000);
    //鼠标悬停图片上时，清除自动轮播定时器
    box.onmouseover = () => {
            clearInterval(timer);
        }
        //鼠标移开机组自动轮播
    box.onmouseout = () => {
            timer = setInterval(move, 2000);
        }
        //点击右箭头播放下一张图片
    btnRight.onclick = () => {
            // clearInterval(timer);
            move();
        }
        //点击左箭头
    btnLeft.onclick = () => {
            moveleft();
            animate(banUl, -index * width, 10);
            select();
        }
        //点击轮播点
        //animate(装图片的大盒子即ul, 当前图片距费用元素的左边距离, 速度越大越快);
    for (let j = 0; j < banDots.length; j++) {
        banDots[j].onclick = () => {
            if (j < index) {
                index = j;
                animate(banUl, -index * width, 50);
                select();

            } else {
                index = j;
                animate(banUl, -index * width, 50);
                select();
            }
            console.log(j);
            console.log(index);
        }
    }
    //判断左移还是右移设置index
    //右移index++
    function moveright() {
        if (index == banImg.length - 1) {
            index = 0;
            banUl.style.left = 0;
        }
        index++;
    }
    //左移index--
    function moveleft() {
        if (index == 0) {
            index = banImg.length - 1;
            banUl.style.left = -width * (index) + "px";
        }
        index--;
    }
    //清除选中轮播点
    function select() {
        //清除轮播点选中状态
        for (let i = 0; i < banDots.length; i++) {
            banDots[i].classList.remove("active");
        }
        //设置轮播点随图一起动
        if (index == banImg.length - 1 || index == banImg.length) {
            banDots[0].classList.add("active");
        } else {
            banDots[index].classList.add("active");
        }
    }
    //创建移动函数
    function move() {
        moveright();
        animate(banUl, -index * width, 10);
        select();
    }
    //图片动画
    function animate(ul, distance, time) {
        clearInterval(animationTimer);
        animationTimer = setInterval(() => {
            let leftDis = ul.offsetLeft; //获取图片左边距离
            let speed = time; //设置每次移动距离
            let difference = Math.abs(leftDis) - Math.abs(distance);
            speed = leftDis > distance ? -Math.abs(speed) : Math.abs(speed);
            if (Math.abs(difference) > 15) {
                ul.style.left = leftDis + speed + "px";
            } else {
                ul.style.left = distance + "px";
                clearInterval(animationTimer);
            }
        }, 10);
    }


}