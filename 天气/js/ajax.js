/*
    ajax的封装有助于减少请求所需代码的书写，一次声明多次调用
一个完整的ajax请求不仅仅只有请求地址，请求方式，是否异步，还有请求的参数，请求成功所要做的事情等。还有设置请求头信息，这个表示页面请求的内容
*/

// 所谓的ajax封装其实就是将原生ajax请求的整个过程封装成一个函数，哪里需要哪里调用

// 1. 为了能够灵活的使用ajax请求，我们通过传递参数的方式来实现，参数是一个对象，对象中包含了请求地址(url)，请求类型(type)，请求参数(data)，相应类型(dataType)，响应成功(success)
// 2. 我们需要在函数内部判断这个参数内的一些属性是否传递，以便于给这些参数设置默认值(主要使用JS中的短路原则和三元表达式)
// 3. 将这些参数都整理好以后，实例化XMLHttpRequest对象
// 4. 判断请求的类型是什么，如果是get类型，我们需要将参数拼接在url的后面，用?连接；如果是post请求，将参数拼接为一个字符串，放在send方法的括号内；同时post请求需要设置请求头
// 5. 添加事件，监听请求状态的改变。需要判断响应数据的类型，一般为text,xml,json这三个类型，根据这三种类型的不同需要去传递不同的参数(如果响应成功，请求状态成功，执行success回调函数)

// let obj = {
//     url: "",
//     type: "",
//     data: "",
//     async: boolean,
//     dataType: "",
//     success: function() {

//     }
// };

// 定义函数进行封装
function ajax(options) {
    // 判断参数中是否有请求地址，如果没有直接终止函数的运行
    if (!options.url) {
        return;
    }

    // 判断参数中有没有请求的类型，方便设置默认值
    let type = options.type || "get";
    // 判断本次请求是否支持异步，默认是支持的
    let async = "ajax";
    // 需要判断本次请求是否有请求参数，如果有将请求参数进行拼接，使用&符进行连接
    let dataStr = "";
    if (options.data) {
        if (typeof options.data === "string") {
            dataStr = options.data;
        } else {
            for (let i in options.data) {
                dataStr += i + "=" + options.data[i] + "&";
            }
            // 使用字符串的截取将最后的&符截掉
            dataStr = dataStr.slice(0, -1);
        }
    }
    // 判断响应类型，text,xml,json 
    let dataType = options.dataType || "text";
    // 实例化XMLHttpRequest对象
    let myAjax = new XMLHttpRequest();
    // 打开通道
    // 需要判断请求的类型来决定参数的传递方式
    if (type.toUpperCase() == "GET") {
        // 判断是否存在请求参数
        if (dataStr) {
            myAjax.open(type, options.url + "?" + dataStr, async);
        } else {
            myAjax.open(type, options.url, async);
        }
        myAjax.send(null);
    }
    // 如果是post方式
    if (type.toUpperCase() === "POST") {
        myAjax.open(type, options.url, async);
        // post必须设置头信息，告诉服务器我们需要什么样的内容
        myAjax.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        myAjax.send(dataStr);
    }

    // 添加事件，监听请求状态的改变
    myAjax.onreadystatechange = function() {
        if (myAjax.readyState === 4 && myAjax.status === 200) {
            if (dataType == "text") {
                options.success(myAjax.response);
            } else if (dataType === "xml") {
                options.success(myAjax.responseXML);
            } else if (dataType === "json") {
                options.success(JSON.parse(myAjax.response));
            }
        }
    }
}