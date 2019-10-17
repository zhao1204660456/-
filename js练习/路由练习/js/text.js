//1.定义路由的构造函数
function Route() {
    this.route = {}
    this.hashUrl = {}
}
//2.在函数中保存路由对象，以及当前页面的hash值 

//将hashvalue所对应的路由保存在route中
// 获取当前页面的hash值保存在this.hashUrl
//
//3.在构造函数的原型上定义路由执行的方法
//4.在构造函数的原型上定义获取hash值的方法

//在页面加载完成后，执行获取当前页面hash值的操作

//检测当hash值发生改变是的操作
//5.在构造函数的原型上定义初始化路由的方法