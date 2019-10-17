/*
    请求天气相关数据
    1.声明变量URl保存请求的地址
    2.声明变量city保存请求的城市
    3.声明变量data保存请求回来的数据
    4.使用ajax发起请求
    5，在ajax的success回调函数中去执行获取数据之后的渲染操作

*/

let url = "https://www.tianqiapi.com/api/";
let city = "太原";
let apid = "27974589";
let apsecret = "De4mgxdq";
let data = null;
//获取显示国家的元素
let country = document.querySelector('.tittle-tittle p');
let address = document.querySelector('.address>p')
    //获取显示城市的元素
    // let cityEle = document.querySelector('');
    //获取显示当天温度的元素
let todyEle = document.querySelector('.temperature');
let da = document.querySelector('.data');
let weather = document.querySelector('.weather-ul');
let weekq = document.querySelector('.week');
let grade = document.querySelector('.quality-img');
let tips = document.querySelector('.tipsq');
ajax({
        url: url,
        data: {
            city: city,
            appid: apid,
            appsecret: apsecret
        },
        type: "get",
        dataType: "json",
        success: (res) => {
            data = res;
            nawWit(data);
            nawTime(data);
            nawWeek(data);
            nawDay(data);
            nawGrade(data);
            nawTips(data);
            // let today = data.data[0];
            country.innerHTML = data.country;
            address.innerHTML = data.city;
        }
    })
    //获取今天日期
function nawDay(data) {
    let today = data.data[0];
    let str1 = "";
    str1 = `
        <div class="data-font">
                <div class="data-left">
                ${today.week}
                </div>
                <div class="data-right">${today.day.slice(3,9)}</div>
            </div>
        `;
    da.innerHTML = str1;
}

//封装实时天气的函数
function nawWit(data) {
    var str = "";
    let today = data.data[0];
    str = `
    <div class="temperature-right">
        <div class="temperature-top">${today.tem.slice(0,-1)}°</div>
        <div class="temperature-bottom">
            <p>${today.tem1.slice(0,-1)}°~${today.tem2.slice(0,-1)}° ${today.wea}</p>
            <p class="temperature-img">
                <img src="img/${today.wea}.png" alt="">
            </p>
        </div>
    </div>
    `;
    todyEle.innerHTML = str;
}
//获取一天的天气
function nawTime(data) {
    let hour = data.data[0].hours;
    let str3 = "";
    hour.forEach(v => {
        // if (v.wea.legth <= 1) {
        str3 += `
            <li>
                <p class="weather-font">${v.day.slice(3,6)}</p>
                <div class="weather-img">
                    <img src="img/${v.wea}.png" alt="">
                </div>
                <p class="weather-num">${v.tem.slice(0,-1)}°</p>
            </li>
            `
            // } else {
            //     str3 += `
            //     <li>
            //         <p class="weather-font">${v.day.slice(3,6)}</p>
            //         <div class="weather-img">
            //             <img src="img/${v.wea.slice(0,1)}.png" alt="">
            //             ~
            //             <img src="img/${v.wea.slice(0,-1)}.png" alt="">
            //         </div>
            //         <p class="weather-num">${v.tem.slice(0,-1)}°</p>
            //     </li>
            //     `;
            // }
    });
    weather.innerHTML = str3;
}
//获取一周的天气
function nawWeek(data) {
    let dataDa = data.data;
    let str2 = "";
    dataDa.forEach(v => {
        str2 += `
        <div class="week-line">
            <div class="week-left">
                ${v.week}
            </div>
            <div class="week-img">
                <img src="img/${v.wea_img}.png" alt="">
            </div>
            <div class="week-max">
                ${v.tem1.slice(0,-1)}
            </div>
            <div class="week-min">
                ${v.tem2.slice(0,-1)}
            </div>
        </div>
    `;
    })
    weekq.innerHTML = str2;
}
//空气质量等级
function nawGrade(data) {
    let gra = data.data[0].air_level;
    switch (gra) {
        case "优":
            grade.style.left = "calc(7%)";
            break;
        case "良":
            grade.style.left = "calc(17%)";
            break;
        case "轻度":
            grade.style.left = "calc(27%)";
            break;
        case "中度":
            grade.style.left = "calc(37%)";
            break;
        case "重度":
            grade.style.left = "calc(57%)";
            break;
        case "严重":
            grade.style.left = "calc(77%)";
            break;
        default:
            break;
    }

}

function nawTips(data) {
    let tip = data.data[0].index;
    let str = "";
    tip.forEach(v => {
        str += `
        <div class="swiper-slide">
            <div class="tips-center">
                <div class="tips-img">
                    <img src="img/${v.title.slice(0,2)}.png" alt="">
                </div>
                <div class="tips-ti">
                    <div class="tips-tittle">
                        ${v.title}
                    </div>
                    <div class="tips-cent">
                    ${v.desc}
                    </div>
                </div>
            </div>
        </div>
        `
    })
    tips.innerHTML = str;
    var mySwiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        centeredSlides: true,
        loop: true,
        coverflowEffect: {
            rotate: 0,
            stretch: 16,
            depth: 100,
            modifier: 2,
            slideShadows: false
        },
    })
}