var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    height: window.innerHeight,
    loop: true,
    autoplay: true, //可选选项，自动滑动
    speed: 0,
    on: {
        init: function() {
            swiperAnimateCache(this); //隐藏动画元素 
            swiperAnimate(this); //初始化完成开始动画
        },
        slideChangeTransitionEnd: function() {
            swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            //this.slides.eq(this.activeIndex).find('.ani').removeClass('ani'); 动画只展现一次，去除ani类名
        }
    }
})