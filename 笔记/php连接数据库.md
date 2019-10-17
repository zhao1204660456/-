# 连接数据库的步骤
## 使用mysqli类
* 变量=new mysqli(host,username,password,dbname);

## 判断连接是否成功
if(!变量){
    die("数据库连接失败".变量->connect_error);
}
## 成功后使用sql语句从数据库中获取数据
变量->query（sql语句);

## 数据获取成功后，将数据进行处理，通过循环将每个数据拿出来放倒数组中，去访问数组
## 一般我们会将数据处理成json格式的数据
使用PHP中的json_encode(),如果解码json_decode();
$mysqli->query("set names utf8");
$mysqli->query("character set utf8");
$mysqli->query("collat utf8_general_ci");