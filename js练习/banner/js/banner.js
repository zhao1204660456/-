window.onload = function() {
    var banUl = document.querySelector('.banner-ul');
    var bannerLi = banUl.children;
    banUl.appendChild(bannerLi[0].cloneNode(true));

    var index = 0;
    var variable = 0;
    var timer = null;
    var k = bannerLi[0].offsetLeft;
    console.log(k);


    function animate(faher, distance) {
        clearInterval(faher.timer);
        faher.timer = setInterval(function() {
            var speed = faher.offsetLeft > distance ? -20 : 20;
            var result = distance - faher.offsetLeft;
            if (Math.abs(result) > Math.abs(speed)) {
                faher.style.left = faher.offsetLeft + speed + "px";
            } else {
                faher.style.left = distance + "px";
                clearInterval(faher.timer);
            }
        }, 10)
    }

    timer = setInterval(autopaly, 5000);
    console.log(banUl.offsetLeft);

    function autopaly() {
        index++;
        if (index == bannerLi.length - 1) {
            banUl.style.left = 0;
            index = 1;
        }
        animate(banUl, -index * 1200);

    }


}