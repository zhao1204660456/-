/*
    6.所谓ajax封装其实就是将原生ajax请求的整个过程封装成一个函数，哪里需要哪里调用
    1.为了能够灵活的使用ajax请求，我们通过传递参数的方式来实现，参数是一个对象，对象中包含了请求地址（URL），请求类型（type），请求参数（data），相应类型（dataType），响应成功（success）
    let obj = {
    url: "",
    type: "",
    data: "",
    async:boolean,
    dataType: "",
    duccess: function() {}
}
    2.我们需要在函数内部判断这个参数内的一些属性是否传递，以便于给这些参数设置默认值（主要使用js中的短路原则和三元表达式）
    3.讲这些参数都整理好以后，实例化XMLHttpRequest对象
    4.判断请求的类型，如果是get类型，将参数拼接在URL的后面，用？链接：如果是post请求，将参数拼接为一个字符串，放在send方法的括号内；同时post请求需要设置请求头
    5.添加事件，监听请求状态的改变。需要判断响应数据的类型，一般为text，xml,json这三个类型，根据这三种类型的不同需要去传递不同的惨参数（无果响应成功，请求状态成功，执行success回调函数）
 */
let str = "";

function ajax(options) {
    //判断参数中是否有请求地址，如果没有直接终止函数的运行
    if (!options.url) {
        return;
    }
    //判断参数中有没有请求的类型，方便设置默认值
    let type = options.type || "get";
    //判断本次请求是否支持异步，默认支持
    let async = options.async === "undefined" ? true : options.async;
    //需要判断本次请求是否有请求参数，如果有将请求参数进行拼接，使用&进行连接
    if (options.data) {
        if (typeof options.data === "string") {
            str = options.data;
        } else {
            for (let i in options.data) {
                str += i + "=" + options.data[i] + "&";
            }
            //使用字符串截取将最后的&截掉
            str = str.slice(0, -1);
        }
    }

    console.log(async, type, str);
}
//判断效应类型text，xml,json

//实例化XMLHttpRequest对象

//打开通道，判断请求类型来决定参数的传递方式
if (type.toUpperCase() == "GET") {
    //判断是否存在参数
    if (str) {
        myAjax.open("get", options.url);
    }


}
//post必须设置头信息，告诉服务器我们需要什么信息

//添加事件，监听请求状态的改变

ajax({
    url: "indexed.html",
    type: "",
    async: "true",
    data: {
        name: "张三",
        age: 12,
        class: "asd"
    }
});










// let myAjax = new XMLHttpRequest();
// let str = "";
// let li = document.querySelector('.recommend-li');
// myAjax.open("get", "https://www.easy-mock.com/mock/5cb813c897b3057000200322/td/goods", true);
// myAjax.send(null);
// myAjax.onreadystatechange = () => {
//     if (myAjax.readyState === 4 && myAjax.status === 200) {
//         let data = JSON.parse(myAjax.response).data.data;
//         data.forEach(v => {
//             str += `<div class="recommend-img">
//                     <img src="${v.thumb}" alt="">
//                 </div>
//                 <div class="recommend-right">
//                     <p class="recommend-right-tittle hidden1">${v.name}</p>
//                     <p class="recommend-right-prive">${v.price}</p>
//                 </div>
//         `
//         })
//         li.innerHTML = str;

//     }
// }