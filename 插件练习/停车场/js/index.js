//实时事件显示
let nowtime = document.querySelector('.head-right>.time');
let nowday = document.querySelector('.head-right>.year');

setInterval(nowTimer, 1000);

function nowTimer() {
    let date = new Date();
    let shi = ""; //时
    let fen = ""; //分钟
    let miao = ""; //秒
    let yue = ""; //月
    let ri = ""; //日
    //判断分
    if (date.getMinutes() < 10) {
        fen = "0" + date.getMinutes();
    } else {
        fen = date.getMinutes();
    }
    //判断秒
    if (date.getSeconds() < 10) {
        miao = "0" + date.getSeconds();
    } else {
        miao = date.getSeconds();
    }
    //判断小时
    if (date.getHours() < 10) {
        shi = "0" + date.getHours();
    } else {
        shi = date.getHours();
    }
    //判断天
    if ((date.getDate() + 1) < 10) {
        ri = "0" + (date.getDate() + 1);
    } else {
        ri = (date.getDate() + 1);
    }
    //判断月
    if ((date.getMonth() + 1) < 10) {
        yue = "0" + (date.getMonth() + 1);
    } else {
        yue = (date.getMonth() + 1);
    }
    let nowhour = shi + ":" + fen + ":" + miao;
    let nowDay = date.getFullYear() + "年" + yue + "月" + ri + "日";
    nowtime.innerHTML = nowhour;
    nowday.innerHTML = nowDay;
}



//左下角轮播
let device = document.querySelector('.device-list');
let ul = device.children[0];
var n = 10;
let str = "";
var timer = null;
for (let i = 0; i < n; i++) {
    str += `
    <li class="device-list-item">
        <div class="top">
            <div class="person">
                <span>未处理</span>
                <span>巡逻人员：李白</span>
            </div>
            <div class="time">
                17:00
            </div>
        </div>
        <div class="info">
            <div class="pos">绿地世纪城</div>
            <div class="error">入口门坏了</div>
        </div>
    </li>
    `;
}
ul.innerHTML = str;
move();
device.onmouseover = () => {
    clearInterval(timer);
}
device.onmouseout = () => {
    move();
}

device.addEventListener("mouseover", tim, false)
device.removeEventListener("mouseover", tim, false)

function tim() {
    clearInterval(timer);
}

function move() {
    timer = setInterval(() => {
        let tp = ul.offsetTop;
        let speed = -1;
        ul.style.top = speed + tp + "px";
        if (tp <= -300) {
            ul.style.top = 0;
        }
    }, 50)
}

//右下角轮播
let device2 = document.querySelector('.info-list');
let ul2 = device2.children[0];
var n = 8;
let str4 = "";
var timer2 = null;
for (let i = 0; i < n; i++) {
    str4 += `
    <li>
                            <h3>郑州市-千玺广场</h3>
                            <div>
                                <span class="left">
                                    "进出车辆"
                                    <i>3452</i>
                                </span>
                                <span class="right">
                                    "总收入"
                                    <i>￥3432345.00</i>
                                </span>
                            </div>
                        </li>
    `;
}
ul2.innerHTML = str4;
move2();
device2.onmouseover = () => {
    clearInterval(timer2);
}
device2.onmouseout = () => {
    move2();
}

device2.addEventListener("mouseover", timq, false)
device2.removeEventListener("mouseover", timq, false)

function timq() {
    clearInterval(timer2);
}


function move2() {
    timer2 = setInterval(() => {
        let tp = ul2.offsetTop;
        let speed = -1;
        ul2.style.top = speed + tp + "px";
        if (tp <= -250) {
            ul2.style.top = 0;
        }
    }, 50)
}




//停车轮播
let device1 = document.querySelector('.stop-box');
let boxCar = document.querySelector('.stop-photo');
let str1 = "";
var timer1 = null;
for (let i = 0; i < n; i++) {
    str1 += `
    <li>
                        <div class="in-outtime">
                            2018-5-4 18:00
                        </div>
                        <div class="img" style="background-image:url(img/car1.jpg)">

                        </div>
                        <div class="stop-name">
                            郑州市-停车场
                        </div>
                        <div class="stop-number">
                            车牌 京A22222
                        </div>
                    </li>
    `;
}
device1.innerHTML = str1;
move1();


function move1() {
    timer1 = setInterval(() => {
        let tp = device1.offsetLeft;
        let speed = -1;
        device1.style.left = speed + tp + "px";
        if (tp <= -600) {
            device1.style.left = 0;
        }
    }, 50)
}
boxCar.addEventListener("mouseover", timn, false)
    // boxCar.removeEventListener("mouseover", timn, false)

function timn() {
    clearInterval(timer1)
}
boxCar.onmouseout = () => {
    move1();
}

//左侧饼图
leftCenter();

function leftCenter() {
    //初始化echarts
    let mychart = echarts.init(document.getElementById('left-center'));
    //初始化以后需要给图标设置配置项，包括图例，提示框，显示数据等内容
    let optiond = {
            tooltip: {
                formatter: '时长:{b}<br>总计:{c}<br>占比:{d}%'
            },
            series: [{
                color: ['#fbff86', '#ff6f6f', '#ab6eff', '#1dd7ff', '#7dff89'],
                type: "pie",
                radius: ["55%", "80%"],
                data: [{ name: "30分钟以下", value: 30 },
                    { name: "30~60分钟", value: 30 },
                    { name: "1~2小时", value: 60 },
                    { name: "2~4小时", value: 70 },
                    { name: "4小时以上", value: 60 },
                ]
            }]
        }
        //配置项完成后，
    mychart.setOption(optiond);
}
rightCenter();

function rightCenter() {
    let mysetLeft = echarts.init(document.querySelector('.stop-top-left'));
    let optiond = {
        tooltip: {
            formatter: '缴费类型<br>{b}:{c}({d}%)'
        },
        series: [{
            color: ['#fffbbe', '#ffbd3d'],
            type: "pie",
            radius: ["50%", "70%"],
            center: ["45%", "40%"],
            data: [{ name: "电子缴费", value: 300, selected: true },
                { name: "现金缴费", value: 3000 },
            ],
            label: {
                normal: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    show: true
                }
            },
        }],
        legend: {
            data: ["现金缴费", "电子缴费"],
            bottom: 10,
            itemWidth: 5,
            textStyle: {
                color: "#839bb0",
                fontSize: 7
            }
        },
    }
    mysetLeft.setOption(optiond);
}

rightCenter1();

function rightCenter1() {

    let mysetRight = echarts.init(document.querySelector('.stop-top-right'));
    let option = {
        tooltip: {
            formatter: '交费情况<br>{b}:{c}({d}%)'
        },
        series: [{
            color: ['#fbff86', '#1dd7ff'],
            type: 'pie',
            radius: ["50%", "70%"],
            center: ["45%", "40%"],
            data: [
                { name: "提前交费", value: 300, selected: true },
                { name: "出口交费", value: 1200 },
            ],
            label: {
                normal: {
                    show: false,
                    position: "center",
                },
                emphasis: {
                    show: true
                }
            },
        }],
        legend: {
            data: ["提前交费", "出口交费"],
            bottom: 10,
            itemWidth: 5,
            textStyle: {
                color: "#839bb0",
                fontSize: 7
            }
        },
    }
    mysetRight.setOption(option);
}
let posArr = {
    "北京": [116.46, 39.92],
    "天津": [117.2, 39.13],
    "上海": [121.48, 31.22],
    "重庆": [106.54, 29.59],
    "太原": [112.53, 37.87],
    "黑龙江": [126.63, 45.75],
    "沈阳": [123.38, 41.8],
    "长春": [125.35, 43.88],
    "石家庄": [114.48, 38.03],
    "呼和浩特": [111.65, 40.82],
    "济南": [117, 36.65],
    "郑州": [113.65, 34.76],
    "西安": [108.95, 34.27],
    "兰州": [103.73, 36.03],
    "乌鲁木齐": [87.68, 43.77],
    "拉萨": [91.11, 29.97],
    "西宁": [101.74, 36.56],
    "银川": [106.27, 38.47],
    "成都": [104.06, 30.67],
    "贵阳": [106.71, 26.57],
    "长沙": [113, 28.21],
    "武汉": [114.31, 30.52],
    "合肥": [117.27, 31.86],
    "南京": [118.78, 32.04],
    '南昌': [115.89, 28.68],
    '杭州': [120.19, 30.26],
    '南宁': [108.33, 22.84],
    '海口': [110.35, 20.02],
    '昆明': [102.73, 25.04]
};
let saleNum = {
        "北京": 2000,
        "天津": 1800,
        "上海": 3000,
        "重庆": 1000,
        "太原": 2500,
        "黑龙江": 1700,
        "沈阳": 1300,
        "长春": 1700,
        "石家庄": 2200,
        "呼和浩特": 2300,
        "济南": 1600,
        "郑州": 2000,
        "西安": 2100,
        "兰州": 1700,
        "乌鲁木齐": 1100,
        "拉萨": 900,
        "西宁": 1000,
        "银川": 1000,
        "成都": 2600,
        "贵阳": 2200,
        "长沙": 1700,
        "武汉": 1100,
        "合肥": 400,
        "南京": 5000,
        '南昌': 3000,
        '杭州': 7000,
        '南宁': 1700,
        '海口': 3400,
        '昆明': 2000
    }
    //中间地图开始
centerMap();

function centerMap() {
    let maEch = echarts.init(document.querySelector('.map'));
    let options = {
        tooltip: {
            alwaysShowContent: true,
            formatter: `
            <div class="map-name">
                <h2>千玺广场千玺广场</h2>
                <p>今日收入</p>
                <div class="map-money">1200254.23</div>
                <div class="map-car">
                    <div class="map-car-left">
                        <div>总车位</div>
                        <div>2541</div>
                    </div>
                    <div class="map-car-right">
                        <div>空余</div>
                        <div>2541</div>
                    </div>
                </div>
                <div class="map-car-bottom"><span>本日进场</span><span>123456</span><span>本日出场</span><span>32145</span>
                </div>
            </div>
            `
        },
        geo: {
            map: "china",
            zoom: 5,
            layoutSize: 100,
            layoutCenter: ["50%", "50%"],
            itemStyle: {
                normal: {
                    areaColor: "#194e7c",
                    borderColor: "#111",
                },
                emphasis: {
                    areaColor: "#52a8eb",
                }
            }
        },
        series: [{
                type: "scatter",
                coordinateSystem: "geo",
                data: dd(posArr, saleNum),
                symbolSize: 10,
            },
            {
                type: "effectScatter",
                data: dd(posArr, saleNum).slice(0, 6),
                coordinateSystem: "geo",
                itemStyle: {
                    color: "#ffff63",
                    symbloSize: 10,
                },
                rippleEffect: {
                    period: 3,
                    scale: 4,
                },
            },
            {
                type: "scatter",
                data: dd(posArr, saleNum).slice(0, 6),
                coordinateSystem: "geo",
                itemStyle: {
                    color: "#ffff63",
                    symbloSize: 10,
                },
            },
        ],

    }
    maEch.setOption(options);
}

function dd(posArr, saleNum) {
    let arr = [];
    //对象遍历
    for (let v in posArr) {
        let obj = {};
        obj.name = v;
        obj.value = [...posArr[v], saleNum[v]];
        arr.push(obj);
    };
    return arr;
}