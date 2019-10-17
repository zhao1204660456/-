# MySQL

* 进入数据库
> mysql -h hostname -u username -p password;
* 查看数据库中所有数据库
> show databases
* 创建数据库
> create database 数据库名
***在数据库中存储的数据的方式是通过表存储的，所以我们要创建表或者查看所有的数据库表***
* 查看数据库中的所有表
> 进入到数据库中：use 数据库名
> 查看数据库中所有的表： show tables;

* 创建新的表
> create table 表名(
> 字段1 数据类型,
> 字段2 数据类型 是否有默认值（需要设置）   
> ...
> ) engine=innodb charset=utf8;
**engine=innodb表示表引擎，常见的有myisam和innodb**

* 例子
 create table car(
     id int auto_increment,
     age tinyint unsigned not null default 0,
     name varchar(20) not null default '',
     index id(id)
     ) engine=innodb charset=utf8;

* 查询数据库表中的所有数据
> select * from 表名;
* 查询数据库表中某一条数据中某一个字段
> select 字段名 from 表名 where 条件;
* 在数据库表中插入一段数据
> insert into 表名（字段1，字段2...)values（值1，值2，...)
    insert into 表名（字段1，字段2...)values（值1，值2，...);超如表中某个字段
    insert into 表名 values （值1，值2，...);插入多条数据
    insert into 表名 values （值1，值2，...),（值1，值2，...);插入所有字段
* 删除表中某一条数据
> delete from 表名 where 条件
* 更新表中某一条数据某一个字段
> update 表名 set vol1=col1(修改的值),... where 条件
## select查询中的投特殊用法
* select 列 from 表 where 条件
> 条件1：where后条件为真全部查询，为假都不查询
> 条件2：关系运算符 > < <= >=
> 条件3：between ... and 两者之间
> 条件4：like 包含某一部分
> 条件5：in 查询范围