//声明变量board保存游戏数据
let board = new Array();
let scoreNum = 0;
//定义newGame函数，用于开始游戏
//页面加载完成后这行newGame函数
let n = 4;
$(function() {
        newGame();
    })
    //定义newGame
function newGame() {
    //页面的初始化
    init();
    //游戏开始添加手指触摸事件，调用touchFun()函数
    touchFun();
    //页面生成以后需要插入两个随机位置的数字
}
// restartGamer()
//游戏结束
// function gameOver() {
//     if (moveLeft() || moveRight() || moveTop() || moveBottom()) {
//         return false;
//     } else {
//         alert("游戏结束")
//     }
// }
//重新开始
$('.new-game').on("click", () => {
    scoreNum = 0;
    $('.score').html(scoreNum);
    board = [];
    newGame()
})


//定义init()
function init() {
    //数据的初始化
    for (let i = 0; i < 4; i++) {
        let arr = [];
        for (let j = 0; j < 4; j++) {
            arr[j] = 0;
        }
        board.push(arr);
    }
    getOneNum();
    getOneNum();
    // updateBoard();
}
//页面的初始化
function updateBoard() {
    //在每一渲染之前将页面中的小块都清除
    $(".center-img").remove();
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            $(".center").append(`
            <div class="center-img" id="pos${i}-${j}"></div>
            `)
                //页面中的小块需要设置宽高背景等属性，如果小块为0，宽高为0
                //否则，小块宽沟为1.22rem，小块内数字对应的数据背景图片为对应的图片
            if (board[i][j] === 0) {
                $(`#pos${i}-${j}`).css({
                    left: getLeft(i, j) + "rem",
                    top: getTop(i, j) + "rem",
                    // width: 0,
                    // height: 0,
                    zIndex: 999
                });
            } else {
                $(`#pos${i}-${j}`).css({
                    left: getLeft(i, j) + "rem",
                    top: getTop(i, j) + "rem",
                    width: "1.22rem",
                    height: "1.22rem",
                    backgroundImage: "url(" + getBGimg(board[i][j]) + ")",
                    fontSize: getFontSize(board[i][j]) + "rem",
                    zIndex: 999
                }).html(board[i][j]);
            }
        }
    }
}

//定义函数getLeft和getTop用来定义元素距顶部距离左侧的间距
function getLeft(i, j) {
    return j * 1.5 + 0.56;
}

function getTop(i, j) {
    return i * 1.5 + 0.46;
}

//定义getBGimg根据传入的数值不同返回不同图片路径
function getBGimg(num) {
    switch (num) {
        case 2:
            return "img/绿色_底.png";
            break;
        case 4:
            return "img/浅蓝色_底.png";
            break;
        case 8:
            return "img/红色_底.png";
            break;
        case 16:
            return "img/黄色_底.png";
            break;
        case 32:
            return "img/紫色_底.png";
            break;
        case 64:
            return "img/深蓝色_底.png";
            break;
        case 128:
            return "img/草绿色_底.png";
            break;
        case 256:
            return "img/橙色_底.png";
            break;
        case 512:
            return "img/深紫色_底.png";
            break;
        case 1024:
            return "img/浅黄色_底.png";
            break;
        case 2048:
            return "img/桃红色_底.png";
            break;
        case 4096:
            return "img/深紫色底.png";
            break;
        case 8192:
            return "img/深蓝色_底.png";
            break;
        default:
            return "img/绿色_底.png";
            break;
    }
}
//定义getFontSize根据传入的数值不同返回不同的字体大小
function getFontSize(num) {
    switch (num) {
        case 2:
            return 0.8;
            break;
        case 4:
            return 0.8;
            break;
        case 8:
            return 0.8;
            break;
        case 16:
            return 0.65;
            break;
        case 32:
            return 0.65;
            break;
        case 64:
            return 0.65;
            break;
        case 128:
            return 0.55;
            break;
        case 256:
            return 0.55;
            break;
        case 512:
            return 0.55;
            break;
        case 1024:
            return 0.45;
            break;
        case 2048:
            return 0.45;
            break;
        case 4096:
            return 0.45;
            break;
        case 8192:
            return 0.45;
            break;
        default:
            return 0.35;
            break;
    }
}
//第一getOneNum()函数在页面中的随机位置添加随机数字（2,4）
function getOneNum() {
    //判断页面中是否能够生成随机数字（如果页面中位置上的数据0就可以生成数字）
    if (!canCreate(board)) {
        return;
    }
    //随机位置的生成，通过随机数获取到随机的行和列
    let random1 = parseInt(Math.floor(Math.random() * 4));
    let random2 = parseInt(Math.floor(Math.random() * 4));
    //使用while循环来确定生成的随机位置能否生成数字
    while (board[random1][random2] != 0) {
        random1 = parseInt(Math.floor(Math.random() * 4));
        random2 = parseInt(Math.floor(Math.random() * 4));
    }
    //在位置随机生成以后需要生成随机的数据，并且对数据进行更新
    let newNum = Math.random() < 0.5 ? 2 : 4;
    //对board进行更新
    board[random1][random2] = newNum;
    //对页面进行更新
    setTimeout(updateBoard, 200)
}

//左移
function getOneNumLeft(random2) {
    //判断页面中是否能够生成随机数字（如果页面中位置上的数据0就可以生成数字）
    if (!canCreate(board)) {
        return;
    }
    //随机位置的生成，通过随机数获取到随机的行和列
    let random1 = parseInt(Math.floor(Math.random() * 4));
    //使用while循环来确定生成的随机位置能否生成数字
    while (board[random1][random2] != 0) {
        random1 = parseInt(Math.floor(Math.random() * 4));
    }
    //在位置随机生成以后需要生成随机的数据，并且对数据进行更新
    let newNum = Math.random() < 0.5 ? 2 : 4;
    //对board进行更新
    board[random1][random2] = newNum;
    //对页面进行更新
    setTimeout(updateBoard, 200)
}
//上移
function getOneNumTop(random1) {
    if (!canCreate(board)) {
        return;
    }
    let random2 = parseInt(Math.floor(Math.random() * 4));
    while (board[random1][random2] != 0) {
        random2 = parseInt(Math.floor(Math.random() * 4));
    }
    let newNum = Math.random() < 0.5 ? 2 : 4;
    board[random1][random2] = newNum;
    setTimeout(updateBoard, 200)
}
//定义canCreate用于判断页面能否产生随机数
function canCreate(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] == 0) {
                return true;
            }
        }
    }
    return false;
}
//添加人机交互效果
//根据手指的触摸开始和结束为止进行判断，进行移动方向的判断
//在移动过程中，需要判断这个能否移动（掐面一个数据为0，或前面数据与当前数据相同，如果元素想要抵达目标为止，在他们中间不能存在阻碍，如果有阻碍就不能抵达目标位置
function touchFun() {
    let startX, startY;
    $(".center").on("touchstart", function(e) {
        startX = e.touches[0].clientX;
        startY = e.touches[0].clientY;

    })
    $(".center").on("touchend", function(e) {
        let moveX = e.changedTouches[0].clientX - startX;
        let moveY = e.changedTouches[0].clientY - startY;
        //根据差值来确定移动的方向
        if (Math.abs(moveX) > Math.abs(moveY) && moveX > 0) {
            //向右移动
            if (moveRight()) {
                getOneNumLeft(0);
            }


        }
        if (Math.abs(moveX) > Math.abs(moveY) && moveX < 0) {
            //向左移动
            if (moveLeft()) {
                getOneNumLeft(3);
            }

        }
        if (Math.abs(moveX) < Math.abs(moveY) && moveY < 0) {
            //向上移动
            if (moveTop()) {
                getOneNumTop(3);
            }

        }
        if (Math.abs(moveX) < Math.abs(moveY) && moveY > 0) {
            //向下移动
            if (moveBottom()) {
                getOneNumTop(0);
            }
        }
    })
}
//左移
function moveLeft() {
    //判断能否向左移动
    if (!canMoveLeft(board)) {
        return false;
    }
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (board[i][j] != 0) {
                for (let k = 0; k < j; k++) {
                    if (board[i][k] == 0 && !isBlock(i, k, j, board)) {
                        playAnimat(i, j, i, k);
                        //更新数据
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        //当前成功后跳出当前循环，执行下一次循环
                        continue;
                        //给当前数字到目标数字之间添加动画，使用jq的animate函数
                    } else if (board[i][k] == board[i][j] && !isBlock(i, k, j, board)) {
                        playAnimat(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        scoreNum += board[i][k];
                        continue;
                    }
                }
            }
        }
    }
    $('.score').html(scoreNum);
    setTimeout(updateBoard, 200);
    return true;
}

//向左移动
function canMoveLeft(board) {
    for (let i = 0; i < n; i++) {
        for (let j = 1; j < n; j++) {
            if (board[i][j - 1] == 0 || board[i][j] == board[i][j - 1]) {
                return true;
            }
        }
    }
    return false;
}

//判断在当前位置与目标位置是否有阻碍，如果有返回true，否则返回false
function isBlock(row, col1, col2, board) {
    for (let i = col1 + 1; i < col2; i++) {
        if (board[row][i] != 0) {
            return true;
        }
    }
    return false;
}
//添加移动动画
function playAnimat(fromi, fromj, toi, toj) {
    //获取动画的元素
    $(`#pos${fromi}-${fromj}`).animate({
        left: getLeft(toi, toj) + "rem",
        top: getTop(toi, toj) + "rem",
        zIndex: 99999,
    }, 200)
}
//右移
function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    for (let i = 0; i <= 3; i++) {
        for (let j = 2; j >= 0; j--) {
            if (board[i][j] != 0) {
                for (let k = 3; k > j; k--) {
                    if (board[i][k] == 0 && !isBlock(i, j, k, board)) {
                        playAnimat(i, j, i, k);
                        //更新数据
                        board[i][k] = board[i][j];
                        board[i][j] = 0;
                        //当前成功后跳出当前循环，执行下一次循环
                        continue;
                        //给当前数字到目标数字之间添加动画，使用jq的animate函数
                    } else if (board[i][k] == board[i][j] && !isBlock(i, j, k, board)) {
                        playAnimat(i, j, i, k);
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        scoreNum += board[i][k];
                        continue;
                    }
                }
            }
        }
    }
    $('.score').html(scoreNum);
    setTimeout(updateBoard, 200);
    return true;
}
//向左移动
function canMoveRight(board) {
    for (let i = 0; i < 4; i++) {
        for (let j = 2; j >= 0; j--) {
            if (board[i][j + 1] == 0 || board[i][j] == board[i][j + 1]) {
                return true;
            }
        }
    }
    return false;
}

//上移
function moveTop() {
    if (!canMoveTop(board)) {
        return false;
    }
    for (let i = 1; i <= 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (let k = 0; k < i; k++) {
                    if (board[k][j] == 0 && !isBlockTop(j, k, i, board)) {
                        playAnimat(i, j, k, j);
                        //更新数据
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        //当前成功后跳出当前循环，执行下一次循环
                        continue;
                        //给当前数字到目标数字之间添加动画，使用jq的animate函数
                    } else if (board[k][j] == board[i][j] && !isBlockTop(j, k, i, board)) {
                        playAnimat(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        scoreNum += board[k][j];
                        continue;
                    }
                }
            }
        }
    }
    $('.score').html(scoreNum);
    setTimeout(updateBoard, 200);
    return true;
}
//向上移动
function canMoveTop(board) {
    for (let j = 0; j < 4; j++) {
        for (let i = 1; i < 4; i++) {
            if (board[i - 1][j] == 0 || board[i][j] == board[i - 1][j]) {
                return true;
            }
        }
    }
    return false;
}

//判断在当前位置与目标位置是否有阻碍，如果有返回true，否则返回false
function isBlockTop(list, col1, col2, board) {
    for (let i = col1 + 1; i < col2; i++) {
        if (board[i][list] != 0) {
            return true;
        }
    }
    return false;
}
//下移
function moveBottom() {
    if (!canMoveBottom(board)) {
        return false;
    }
    for (let i = 2; i >= 0; i--) {
        for (let j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (let k = 3; k > i; k--) {
                    if (board[k][j] == 0 && !isBlockTop(j, i, k, board)) {
                        playAnimat(i, j, k, j);
                        //更新数据
                        board[k][j] = board[i][j];
                        board[i][j] = 0;
                        //当前成功后跳出当前循环，执行下一次循环
                        continue;
                        //给当前数字到目标数字之间添加动画，使用jq的animate函数
                    } else if (board[k][j] == board[i][j] && !isBlockTop(j, i, k, board)) {
                        playAnimat(i, j, k, j);
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        scoreNum += board[k][j];
                        continue;
                    }
                }
            }
        }
    }
    $('.score').html(scoreNum);
    setTimeout(updateBoard, 200);
    return true;
}
//向上移动
function canMoveBottom(board) {
    for (let j = 0; j < 4; j++) {
        for (let i = 2; i >= 0; i--) {
            if (board[i + 1][j] == 0 || board[i][j] == board[i + 1][j]) {
                return true;
            }
        }
    }
    return false;
}