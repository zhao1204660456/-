window.onload = function() {
    var box = document.querySelector('.box:nth-child(1)');
    var starX, starY, moveX, moveY, endX, endY;
    box.onmousedown = function(e) {
        var ev = e || event;
        starX = ev.offsetX;
        starY = ev.offsetY;
        window.addEventListener('mousemove', move, false);
    }

    window.onmouseup = function() {
        window.removeEventListener('mousemove', move, false);
    }

    function move(e) {
        var ev = e || event;
        moveX = ev.clientX;
        moveY = ev.clientY;
        endX = moveX - starX;
        endY = moveY - starY;
        if (endX <= 0) {
            box.style.left = 0;
        } else
        if (endX >= innerWidth - box.offsetWidth) {
            box.style.left = innerWidth - box.offsetWidth + "px";
        } else {
            box.style.left = endX + "px";
        }

        if (endY <= 0) {
            box.style.top = 0;
        } else
        if (endY >= innerHeight - box.offsetHeight) {
            box.style.top = innerHeight - box.offsetHeight + "px";
        } else {
            box.style.top = endY + "px";
        }

    }
}