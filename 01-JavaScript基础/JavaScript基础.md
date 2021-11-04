# JavaScript基础笔记

### 一、数据类型：

###### 	1.基本数据类型：**number,string, boolean,NaN,undefined;**

######    2.高级数据类型：**Object，Array;**

###### 	3.获取数据类型的方法：**console.log(typeof 变量名);**

### 二、数据类型装换：

###### 	1.其它类型转数字类型：

​		1).`parseInt();`转整数；
​		2).`parseFloat();`转浮点数；
​		3).`Number();`转数字；
​		总结：**想要转整数用户parseInt(),想要转小数用parseFloat(),想要转数字Number(),比前面两种严格；**	

###### 	2.其它类型转字符串：

​		1).`toString()`	语法：num.toString；
​		2).`String()`		语法：String(num)；
​		总结：
​			如果变量有意义调用.toString()使用转换；
​			如果变量没有意义使用String()转换；

###### 3.其它类型转布尔类型：

​	1.`Boolean();`0,空字符串,null,undefined都是false,其余转布尔值是true；

### 三、操作符：

​	算数运算符:+ - * / %	
​	一元运算符:++ ——这个操作符只需要一个符号就可以运算的符号
​	二元运算符:这个操作符只需要两个符号就可以运算的符号
​	三元运算符:
​	复合运算法:+= +- *= /= %=
​	关系运算符:> < >= <= ==(不严格) ===(严格) != !==
​	逻辑运算符:&&(逻辑与--并且) ||(逻辑或--或者) !(逻辑非--取非)
​	赋值运算符:=
​	注意：一元运算符：
​	`如果++在前面，如++num + 10参与运算		先进行运算，后进行自加；`
​	`如果++在后面，如num++ + 10参与运算		先进行自加，后进行运算；`

### 四、分支语句：

###### 1.流程控制：(代码的执行过程，三种方式)

​			1).顺序结构：从上到下，从左到右执行的顺序就叫做顺寻结构；
​			2).分支结构：if语句，if-else语句，if-else if -else语句，switch语句，三元表达式；
​			3).循环结构：for语句，while循环，do-while循环，后期还有 for in 循环；

###### 2.if语句

```javascript
		语法：if(表达式){
				代码段;
				};	
		if(8>6){
            console.log(8);
        };
```



###### 3.if-else语句：

```javascript
语法：if(表达式){
            代码段1;
        }else{
            代码段2;
        };
//例子：判断这个数字是奇数还是偶数？
var num = 9;
if(num%2 == 0){
    console.log('这个数字是偶数');
}else{
    console.log('这个数字是奇数');
};
```

###### 4.if-else if-else语句：

```javascript
语法：if(表达式){
    代码段1;
}else if(表达式2){
    代码段2;
}else{
    代码段3;
}
//例子：考试成绩信息(<60:不及格；60<x<80:良好；80<x<100:优秀)
var result = 80;
if(result < 60){
    console.log('不及格');
}else if(x < 80){
    console.log()('良好');
}else if(x<100){
    console.log('优秀');
}else{
    console.log('请输入成绩！！！')
}
```

###### 5.switch语句：

```javascript
语法：switch(表达式){
    case :;
}
//例子：根据输入的月份判断季节：
var result = 9;
switch(result){
    case 1:
    case 2:
    case 12: 
        console.log("春天");
        break;
    case 3:
    case 4:
    case 5: 
        console.log("夏天");
        break;
    case 6:
    case 7:
    case 8: 
        console.log("秋天");
        break;
    case 9:
    case 10:
    case 11: 
        console.log("冬天");
        break;
    default:
        console.log('输入有误，请重新输入。');
}
//注意问题： 
switch-case 比较使用的是严格模式比较(===);
```

###### 6.三元表达式：

```javascript
//语法：	表达式1？表达式2:表达式3
//表达式1是true，则执行表达式2；
//表达式1是false，则执行表达式3；
//例子：
var age = 18;
var res = age >= 18 ? "成年了":"未成年";
console.log(res);//成年了
```

### 五、循环语句(条件：结束的条件；计数器(记录循环的次数)；)：

###### 1.while循环：

```javascript
语法：var num = 0;
while(循环条件){
    循环体；
}
//例子:从1加到10等于多少？
var num = 0;//存储最终的和
var i = 0;//计数器
while(i <= 10){
    num = num + i;
    i++;
}
console.log(num,i);
```

​	

###### 2.do-while循环：

```javascript
语法：do{
    循环体
}while(条件)		
//例子：哈哈，输出，哈哈，我太帅了。。10次
var i = 0;
do{
    console.log('哈哈，我太帅了。。');
    i++;
}while(i<10);
// 练习1：求6的阶乘；
var i = 1;
var ji = 1;
while(i < 7){
    ji *= i;
    i++;
}
console.log('6的阶乘：' + ji)	// 720



// 练习2：求1-100之间所有偶数的和；
var i = 0;
var sum = 0;
while(i <= 100){
    if(i % 2 == 0){
        sum += i;
    }
    i++;
}
console.log('1-100之间所有偶数的和：' + sum);

// 练习3：求1-100之间搜有奇数的和；
var i = 0;
var sum1 = 0;
while(i <= 100){
    if(i % 2 != 0){
        sum1 += i;
    }
    i++;
}
console.log('1-100之间所有奇数的和：' + sum1);

```

###### 3.for循环：

```javascript
for循环:
语法：for(表达式1;表达式2;表达式3){
		循环体；
	};
// 练习1：打印10次，哈哈。我有变帅了！！！
for(var i = 0; i < 10; i++){
    console.log('哈哈，我又变帅了！！！')
}

// 练习2：求1-100之间所有数字的和；
var sum = 0;
for(var i = 0; i <= 100; i++){
    sum += i;
}
console.log(sum)


// 练习3：在页面中打印出五行⭐，每行五个；

for(var i = 0; i < 5; i++){

    for(var j = 0; j < 5; j++){
        document.write("☆");
    }
    document.write('<br />');
}
// 练习4：打印三角形的五角星；
for(var i = 0; i < 5; i++){

    for(var j = 0; j < i; j++){
        document.write('★');
    }
    document.write('<br />');

}

// 练习5：乘法口诀表：
for(var i = 1; i <= 9; i++ ){	// 控制行数
    for(var j = 1; j <= i; j++){	// 控制列数
        document.write(j + '*' + i + '=' + i * j + ' ');
    }
    document.write('<br />')
}

// 表格版本9*9乘法表
document.write("<table border='1' cellpadding='0' cellspacing='0'>");	
for(var i = 1; i <= 9; i++ ){	// 控制行数
    document.write('<tr>');
    for(var j = 1; j <= i; j++){	// 控制列数
        document.write('<td>' + j + '*' + i + '=' + i * j + '</td>');
    }
    document.write('</tr>');
}
document.write("</table>");

```

### 六、关键词使用：

###### 1.js关键词使用(breack,continue)：

```javascript
//break关键词：如果在循环中使用，遇到了break，则立即跳出当前的循环；
//例子：
for(var i = 100; i <= 200; i++){
    if(i%7==0){
        console.log(i);//105
        break;
    }
}

//continue关键词：在循环中如果遇到continue关键词，直接开始循环下一次循环；


```

### 七、数组：

###### 1.作用：可以一次性存储多个数据；

###### 2.下标(索引)：数组的索引从0开始，则第一个元素的下标为0；

###### 3.定义：

​	1).通过构造函数创建数组；

​	语法：

```javascript
var 数组名 = new Array(长度数字);
var array = new Array(5);

//注意：构造函数创建的数组，如果Array(一个数字)，则表示的是数组的长度；如果Array(多个值)，则表示的是数组的元素，此时数组的长度为数组元素的个数；
```

2).通过字面量的方式创建数组；

语法：

```javascript
var 数组名 = [];
var array = [];
```

```javascript
//声明数组
var arr = new Array(10,20.30,40,50);	

// 获取数组的某个元素(通过下标获取)：
console.log(arr[3]);//40

// 修改数组中的某个元素(通过下标获取)：
arr[3] = 100;
console.log(arr);

// 获取数组的长度：
console.log(arr.length);
```

4.案例：

```javascript
// 案例1：求数组中所有元素的和；
var arr = [10,20,30,40,50];
var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}
console.log('和：'+sum);
```



```javascript
// 案例2：求数组中所有元素的最大值；
var arr2 = [10,20,30,40,50];
var max = arr2[0];
for(var i = 0; i<arr2.length-1; i++){
	if(max < arr2[i]){
		max = arr2[i];
	}
}
console.log('最大值'+max);
```


```javascript
// 案例3：求数组中所有元素的最小值；
var arr3 = [10,20,30,40,50];
var min = arr3[0];
for(var i = 0; i < arr3.length-1; i++){
	if(min > arr3[i]){
		min = arr3[i];
	}
}
console.log('最小值'+min);

// 案例4：倒序遍历数组；
var arr4 = [10,20,30,40,50];
for(var i = arr4.length-1; i>=0; i--){
	console.log(arr4[i]);
}
```


```javascript
// 案例5：把数组中每个元素用|拼接到一起产生一个字符串；
var arr5 = [10,20,30,40,50];
var chuan = '';
for(var i=0; i<arr5.length-1; i++){
	chuan += arr5[i] + '|';
}
console.log(chuan+arr5[arr5.length-1]);
```


```javascript
// 案例6：去掉数组中重复的0；
var arr6 = [10,20,0,30,0,40,0,50];
var newArray = [];
for(var i = 0; i<arr6.length; i++){
	if(arr6[i] != 0){
		newArray[newArray.length] = arr6[i];
	}
}
console.log(newArray);

// 案例7：求数组中的平均值；
var arr7 = [10,20,30,40,50];
var pin = 0; 
var sum = 0;
for(var i = 0; i<arr7.length; i++){
	sum += arr[i];
	pin  = sum/arr.length;
}
console.log('平均值'+pin);
```



```javascript
// 案例8：提示用户输入班级人数，求总成绩，平均成绩，最高分，最低分；
var perCount = parseInt(prompt("请输入班级人数"));
var perScores = [];
for(var i= 0; i<perCount; i++){
	perScores[perScores.length] = parseInt(prompt("请输入第"+ (i+1) +"个人的成绩"))
}
var sum3 = 0; 
for(var i = 0; i<perScores.length; i++){
	sum3 += perScores[i];
}
console.log('总成绩'+sum3);
var pin1 = 0;
var sum4 = 0;
for(var i = 0; i < perScores.length; i++){
	sum4+= perScores[i];
	pin1 = sum4/perScores.length;
}
console.log('平均成绩'+pin1)

var max1 = perScores[i];
for(var i=0; i<perScores.length-1;i++){
	if(max1 < perScores[i]){
		max1 = perScores[i];
	}
	console.log(perScores[i])
}
console.log('最高分'+max1);

var min1 = perScores[i];
for(var i=0; i<perScores.length;i++){
	if(min > perScores[i]){
		min1 = perScores[i];
	}
}
console.log('最低分'+min1)

// 案例9：反转数组；
var arr9 = [10,20,30,40,50];
console.log();
for(var i = 0; i<parseInt(arr9.length/2); i++){
	var flag = arr9[i];
	arr9[i] = arr9[arr9.length-1-i];
	arr9[arr9.length-1-i] = flag;
}
console.log(arr9);
```

###### **4.冒泡排序：**

```javascript
//案例10冒泡排序：
var arr = [10,30,1,4,50,100,230];

// 循环控制比较的轮数：
for(var i = 0; i < arr.length-1; i++){
    // 循环控制比较的次数
    for(var j = 0; j < arr.length-1-i; j++){
        if(arr[j] > arr[j+1]){
            var temp = arr[j];
            arr[j]  = arr[j+1];
            arr[j+1] = temp;
        }
    }
}
console.log(arr);
```

### 八、函数：

###### 1.函数：把一坨重复的代码封装，在需要的时候直接调用即可；

###### 2.作用：代码的重用；

```javascript
//定义：
function cook(参数1,参数2,参数3...) {	//定义函数
    函数体
}
//调用：函数名字();
cook(参数1,参数2,参数3...);	//调用函数
```

###### 3.参数：function中的小括号里面的参数为形参；调用中的参数为实参；

###### 4.函数的返回值：return 返回值名;return 后面的代码不会往下执行了；

###### 5.注意：

​			1.函数命名遵循驼峰命名法；
​			2.函数命名不要重复；

```javascript
//例子：		
//计算某两个数的和：
function cook(x, y) {	//定义函数
    var sum = x + y;
    console.log(sum);
}
cook(10,20);	//调用函数

//优化版：
function cook(x, y) {	//定义函数
    // var sum = x + y;
    // return sum;	//返回值
    return x+y;
}
var num1 = parseInt(prompt('请输入第一个数'));
var num2 = parseInt(prompt('请输入第二个数'));
var res = cook(num1, num2);	//调用函数
console.log(res);
```

### 九：函数练习：

// 练习0：求任意两个数字的和
	function getSum(x,y) {
		return x+y;
	}
	console.log(getSum(10,30));

```javascript
// 练习1：求n-m之间的所有数的和；
function geteverySum(n) {
	var sum = 0;
	for(var i = 0; i<=n; i++){
		sum += i;
	}
	return sum;
}
console.log(geteverySum(100));
```


```javascript
// 练习2：圆的面积；
function getS(r) {
	return Math.PI*r*r;
}
console.log(getS(5));
```


```javascript
// 练习3：求2个数中的最大值；
function getMax(x,y){
    retur x>y ? x : y;
}

console.log(getMax(20,4));

// 练习4：求3个数中的最大值；
function getTMax(x,y,z) {
    return	x > y ? (x > z ? x : z) : (y > z ? y :z);
}
console.log(getTMax(1,3,6));
```

```javascript
// 练习5：判断一个数是否是素数(从2开始，只能被1和它本身整除)；
function isPrimeNumber(x) {
    for(var i = 2; i < x; i++){
        if(x % i == 0){
            return false;
        }
    }
    return true;
}
var result = isPrimeNumber(8);
if(result){
    console.log('这个数字数质数');
}else{
    console.log('这个数字不是质数');
}
```



```javascript
// 练习6：求一组数字中的最小值；
function getArrayMin(arr){
    var min = arr[0];
    for(var i = 0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }
    return min;
}
console.log(getArrayMin([3,45,34,453,56,32,45]));
```

### 十、arguments 对象：

`arguments.length` ---> 获取的是函数调用的时候，传入了几个参数
`arguments` --->获取传入每个参数的和；

### 十一、函数的其它定义方式：

**匿名函数：**函数如果没有名字，就匿名函数；
**命名函数：**函数如果有名字，就是命名函数；

函数的另一种定义方式：
				1.函数声明：
					语法：function 函数名(){函数体};
				

```javascript
//2.函数表达式：把一个函数给一个变量通常叫做函数表达式；
//注意：函数表达式后面要加封号；
//语法：var 变量名 = function(){函数体};

//3.函数的自调用：
//注意：函数自调用，没有名字，声明的同时直接调用，一次性的；
//例子：(function(){函数体};)();

//4.回调函数：函数作为参数使用叫做回调函数：
//例子：								
function f1(fn){
    fn(); 
}
function f2(){
    console.log("哈哈。这都可以？？");
}
f1(f2);
```


```javascript
//函数也是一种数据类型：function
function fun1(){};
console.log(typeOf fun1);
```


```javascript
//函数作为返回值使用：
//例子：
function f1(){
    console.log("f1函数调用了");
    return function f2(){console.log("这是一个函数");}
}
var ff = f1();
ff();
```

### 十二、作用域：

###### 1.全局变量：

​				声明的变量是使用var声明的，那么这个变量就是全局变量，除了在函数内部定义的变量是局部变量，其余都是局部变量；

###### 2.局部变量：

​				在函数内部定义的变量，是局部变量，外面不能使用；

###### 3.全局作用域：

​			全局变量的使用范围；

###### 4.局部作用域：

​			局部变量的使用范围；

###### 5.块级作用域：

​			一对大括号就可以看成是一块，在这对大括号声明的变量，变量只能在这个区域里面使用，但是在js当中，在大括号声明的变量，也可以在大括号外面使用。说明：js当中没有块级作用域，只有函数除外；

###### 6.隐式全局变量：

​			声明的变量没有var，就叫隐式全局变量；
​		**注意：全局变量是不能被删除的，但是隐式全局变量是可以被删除的；**

###### 7.作用域链：

```javascript
var num = 10;
function f1() {
    var num = 20;
    function f2() {
        var num = 30;
        function f3() {
            var num = 40;
            console.log(num);
        }
        f3()
    }
    f2();
};
f1();
```

###### 8.作用域链解析图：

![16_js_作用域链](E:\前端学习\Javascript\01-JavaScript基础\16_js_作用域链.png)

### 十三、预解析：

###### 1.预解析：提前解析代码；

​	把变量的声明提前---提前到他所在的作用域的最上面；
​	函数的声明也会提前---提前得到他所在的作用域的最上面；

###### 2.预解析分段的问题的局部作用域：

​			预解析中，变量的提升，只会在当前的作用域的最上面，不会提升到作用域外面去；
​			预解析会分段(多对的script标签中函数重名，预解析的时候不会冲突)；

```javascript
f1();
console.log(c);
console.log(b);
console.log(a);	
function f1() {
    var a = b = c = 9;
    console.log(a);
    console.log(b);
    console.log(c);
}


// 解析：
function f1() {
    var a;
    a = 9;
    // 隐式全局变量
    b = 9;
    c = 9;
    console.log(a);	//9
    console.log(b);	//9
    console.log(c);	//9
}
f1();
console.log(c);	//9
console.log(b);	//9
console.log(a);	//报错


var f1 = function () {
    console.log(a); //报错
    var a = 12;
};
```

### 十四、判断一个数字是否是质数：

```javascript
// 判断一个数字是否是质数：
function isPrimeNumber(x){
    for(var i = 2; i <= x/2; i++){
        if(x % i == 0){
            return false;
        }else{
            return true;
        }
    }		
}

// 获取用户输入的数字；
var res = prompt("请输入一个数字");

// 判断用户输入是否为空；
if(res == ""){
    alert('您输入有误！');
}else{
    // 判断用户输入的是否是一个数字；
    if(!isNaN(res)){
        // 通过调用isPrimeNmber函数，判断用户输入的这个数字是否是质数；
        if(isPrimeNumber(res)){
            alert(res+"是质数");
        }else{
            alert(res+"不是质数");
        }
    }else{
        alert("您输入的不是一个数字！");
    }
}
```

### 十五、编程思想：

```javascript
/*
编程思想：把生活中做事的经验融入到程序中；		
面向过程：凡事都要亲历亲为，每件事的具体过程都要知道，注重的是过程；
面向对象：根据需求找对象，所有的事都用对象来做，注重的是结果；

面向对象特性：封装，继承，多态(抽象性)；
js不是面向对象的语言，但是可以模拟面向对象的思想；
js是一门基于对象的语言；
万物皆对象：	


对象：
    定义：看得见，摸得到，具体特质某个东西；
    特点：
    总结：
*/
```

### 十六、对象：

###### 创建对象：

```javascript

//创建对象：
    //1.调用系统的构造函数创建对象；
    var 变量名 = new Object();


    // 1.第一种创建的对象的方式：
    var obj = new Object();

    // 添加属性
    obj.name = "小苏";
    obj.age = "23";
    console.log(obj.name);

    // 添加方法：
    obj.eat = function () {
        // body...
        console.log('吃');
    }
    obj.play = function () {
        // body...
    }
    obj.eat();	//方法的调用



//2.自定义构造函数创建对象;
//如何一次性创建多个对象？	工厂模式创建对象
function createObject(name){
    var obj = new Object();
    //添加属性:
    obj.name = name;
    //添加方法：
    obj.eat = function(){
        console.log("我就喜欢吃");
    };
}
var per1 = new createObject("小苏");

//自定义构造函数创建对象（函数名是大写）：
//区别：构造函数与普通函数区别：名字是不是大写;
//语法：
function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHi = function(){
        console.log("我叫"+this.name+",年龄是："+this.age);
    };
};
var person = new Person("小红",29);

// 流程：
// 1.在内存中开辟(申请一块空闲的空间)空间，存储创建新的对象；
// 2.把this设置为当前的对象；
// 3.设置对象的属性和方法；
// 4.把this这个对象放回；





// 3.字面量的方式创建：
var obj = {};
// 添加属性：
obj.name = "小明";
// 添加方法：
obj.sayHi = function(){
    console.log("我是："+this.name);
}

// 化后的写法：
var obj2 = {
    name: '小明',
    age: 20,
    sayHi: function(){
        console.log("我是："+this.name);
    }
}
// 缺陷：一次性的对象，不能传值；





// 如何获取该变量（对象）是不是属于什么类型的？
// 语法：
// 变量名 instanceof 类型的名字

// 总结：
// 设置和获取属性的另一种方法：
obj.name = "小明";
obj["name"] = "小明";

/*
    在当前的对象的方法中，可以使用this关键字来代表当前的对象；
    js是一门解释性的语言；
    是一门脚本语言；
    是一门弱类型的语言，声明变量都用var；
    是一门基于对象的语言；
    是一门动态类型的语言；
    动态类型的语言：
    	1.代码(变量)只有执行到这个位置的时候，才知道这个变量中存储的是什么，如果是对象，就有对象的属性和方			法，如果是变量，就有变量的作用；
    	2.对象没有什么，只要点了，通过点语法，那么就可以为对象添加属性或方法；
*/



// 创建一个图片的对象，图片有宽，有高，有大小(4m)，图片可以展示信息；
function Pic(width,height,size) {
    this.width = width;
    this.height = height;
    this.size = size;
    this.showMessage = function(){
        console.log("图片的宽度："+this.width+"图片的高度："+this.height+"图片的大小："+this.size);
    }
}
var pic = new Pic(10,20,"4Mb");
pic.showMessage();

// 创建一个狗的对象，狗有颜色，体重，年龄，可以打架，可以吃饭

function Dog(color,weight,height,age) {
    this.color = color;
    this.weight = weight;
    this.height = height;
    this.age = age;
    this.fight = function () {
        console.log("我会打架");
    }
    this.eat = function () {
        console.log("我就是喜欢吃");
        console.log(this.color,this.weight,this.height,this.age)
    }

}
// 创建对象----实例化一个对象，并初始化
var dog1 = new Dog("红色",190,1.8,18);
dog1.eat();
dog1.fight();

	
```

###### 对象创建内存图：

![21_js_对象创建内存图.html](E:\前端学习\Javascript\01-JavaScript基础\21_js_对象创建内存图.html.png)

###### JSON格式的数据：

```javascript
var json  = {
    "name": "小明",
    "age": "10",
    "sex": "男"
};

// 遍历对象，是不能通过for循环遍历，无序

// 通过for in 循环遍历json格式的数据
for(var key in json){
    //key 一个变量，里面存储着对象中所有属性的名字；
    // console.log(key)	//json对象中的属性的名字
    console.log(json[key]);
}
```

### 十七、简单类型和复杂类型、数据类型之间的传递、引用类型之间的传递：

###### 简单类型和复杂类型：

```javascript
// 原始数据类型：number，string，Boolean，undefined，null，object
// 基本类型(简单类型)，值类型：number，string，boolean
// 复杂类型(引用类型)：object
// 空类型：null，undefined

// 值类型的值在那一块空间中存储？	栈中存储；
// 引用类型的值在那一块空间中存储？对象在堆中存储，地址在栈中存储；


// 值类型之间传递的是值
var num = 10;
var num2 = num;	//这里的赋值是，将num的值复制一份给num2，所以对num的值没有影响



// 引用类型之间的传递的是地址
var obj = {
    name: "小明"
};

function f1(obj2){
    obj2.name = "小红";
}
console.log(obj.name);//小明

f1(obj);

console.log(obj.name);//小红




// 练习：
function Person(name, age,salary) {
    this.name = name,
        this.age age,
            this.salary = salary
};

function f10(person) {
    person.name = 'ls',
        person = new Person("aa",22,1000);
};

var p = new Person("zs", 23, 1000);

console.log(p.name);	// zs

f1(p);	//此时p传递的是地址

console.log(p.name);


```

###### 简单类型和复杂类型解析图：

![23_js_简单类型和复杂类型](E:\前端学习\Javascript\01-JavaScript基础\23_js_简单类型和复杂类型.png)

###### 数据类型之间的传递：

![23_js_数据类型之间传递 练习](E:\前端学习\Javascript\01-JavaScript基础\23_js_数据类型之间传递 练习.png)

###### 引用类型之间的传递：

![23_js_引用类型之间的传递](E:\前端学习\Javascript\01-JavaScript基础\23_js_引用类型之间的传递.png)

### 十八、内置对象：

```javascript
/*
js学习中的三种对象：
			1.内置对象： js系统自带的对象；
			2.自定义对象： 自定义构造函数创建的对象；
			3.浏览器对象：BOM

内置对象：学习文档 MDN:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript

​    Math：
​    Date：
​    String：
​    Array:
​    Object:
*/

```

###### 1.内置对象—Math：

```javascript
// 实例对象：通过构造函数创建出来，实例化对象；
	// 静态对象：不需要创建，直接就是一个对象吗，方法（静态方法）直接通过这个对象名字调用；
	
	// Math对象：Math 是一个内置对象，它拥有一些数学常数属性和数学函数方法。Math 不是一个函数对象。

	// Math 属性：
		// Math.E 属性表示自然对数的底数
		console.log(Math.E);
		// Math.PI 表示一个圆周率
		console.log(Math.PI);
		// Math.SQRT1_2 属性表示 1/2 的平方根，约为 0.707：
		console.log(Math.SQRT1_2);
		
	// Math 方法：
		// Math.abs() 表示获取一个值的绝对值；
		console.log(Math.abs(-3));
		// Math.ceil() 函数返回大于或等于一个给定数字的最小整数,向上取整。
		console.log(Math.ceil(12.23));
		// Math.floor() 返回小于或等于一个给定数字的最大整数，向下取整。
		console.log(Math.floor(12.23));	
		// Math.max() 函数返回一组数中的最大值。
		console.log(Math.max(12,23,34));
		// Math.min() 函数返回一组数中的最小值。
		console.log(Math.min(12,23,34));
		// Math.random() 函数返回一个浮点数,  伪随机数在范围从0到小于1，也就是说，从0（包括0）往上，但是不包括1（排除1），然后您可以缩放到所需的范围。实现将初始种子选择到随机数生成算法;它不能被用户选择或重置
		console.log(parseInt(Math.random()*10));
		// Math.round()  函数返回一个数字四舍五入之后最接近的整数；
		console.log(Math.round(9.235));
		// Math.sqrt() 函数返回一个数的平方根
		console.log(Math.sqrt(100));




	// 案例：
	// 1.自己定义个对象，实现max的方法：
	function MyMath() {
		// 添加一个方法
		this.getMax = function () {
			// 所有数字中的最大值
			var  max = arguments[0];
			for(var i = 0; i < arguments.length; i++){
				if(max < arguments[i]){
					max = arguments[i];
				}
			}
			return max;
		};
	};

	// 实例对象
	var mt = new MyMath();
	var result = mt.getMax(10,45,934.54,456);
	// console.log(result);



	// 2.随机产生一个十六进制的随机数，封装成一个函数；
	function  getColor() {
		var str = "#";
		// 一个十六进制的数组
		var arr = ["0","1","3","4","5","6","7","8","9","a","b","c","d","e","f"];
		for(var i = 0; i < 6; i++){
			var num = parseInt(Math.random()*15);
			str += arr[num];
		}
		return str;
	}


	window.onload = function (){
		document.getElementById("dv").style.backgroundColor = getColor();
	}


```



###### 2.内置对象—Date：

```javascript
//内置对象：Date()

	 // 当前的时间---当前服务器
	 // var dt = new Date();
	 // console.log(dt);

	 // 传入时间
	 // var dt1 = new Date("2021-08-14");
	 // console.log(dt1);

	 // var dt2 = new Date("2021/08-13");
	 // console.log(dt2);

	 // var dt3 = Date.now();
	 // console.log(dt3);//从1970-01-01到当前时间的毫秒数

	 var dt = new Date();
	 // var dt =+ new Date();一种特殊写法

	 // 获取年份
	 // console.log(dt.getFullYear());
	 // 获取月份
	 // console.log(dt.getMonth());//月份从0开始
	 // 获取日期
	 // console.log(dt.getDate());
	 // 获取小时
	 // console.log(dt.getHours());
	 // 获取分钟
	 // console.log(dt.getMinutes());
	 // 获取秒
	 // console.log(dt.getSeconds());
	 // 获取星期
	 // console.log(dt.getDay());//星期从0开始

	 // 转换成字符串
	 // console.log(dt.toString());
	 // console.log(dt.toDateString());//英文格式-日期
	 // console.log(dt.toLocaleDateString());//数字格式-日期
	 // console.log(dt.toTimeString());//英文-时间
	 // console.log(dt.toLocaleTimeString());//数字-时间

	 // console.log(dt.valueOf());//毫秒数

	 // 案例：
	 // 1.格式化指定格式的日期和时间：
	 function getDate(dt) {
	 	// 获取年
	 	var year = dt.getFullYear();
	 	// 获取月
	 	var month = dt.getMonth();
	 	// 获取日期
	 	var day = dt.getDate();
	 	// 获取小时
	 	var hours = dt.getHours();
	 	// 获取分钟
	 	var min = dt.getMinutes();
	 	// 获取秒
	 	var sec = dt.getSeconds();

	 	month = month < 10 ? "0" + month : month;
	 	day = day < 10 ? "0" + day : day;
	 	hours = hours < 10 ? "0" + hours : hours;
	 	min = min < 10 ? "0" + min : min;
	 	sec = sec < 10 ? "0" + sec :sec;

	 	return year + "年" + month + "月" + day + "日 " + hours + ":" + min + ":" + sec;
	 }

	 var dt = new Date();
	 console.log(getDate(dt));


```



###### 3.内置对象—Arraty：

```javascript
/*
	内置对象：Array()对象是用于构造数组的全局对象，数组是类似于列表的高阶对象。

	方法：
		Array.isArray(obj);判断当前这个对象是不是对象；
		arr.contact(arr1,arr2,...);拼合数组；
		arr.every(函数);返回值是布尔值，函数作为参数使用，函数中有三个参数，第一个参数是元素的值，第二个参数是元素的索引值，第三个参数是原来的数组（没用）;如果这个数组中的每个元素的值都符合条件，最后才返回true；
		arr.filter(函数);返回每一个都符合条件的元素，组成一个新数组；
		arr.push(值);给数组追加一个值，返回数组的长度；
		arr.pop();删除数组的最后一个元素，返回值是删除元素的值；
		arr.shift();删除数组中第一个元素，返回值就是删除的值；
		arr.unshift();向数组的第一个元素添加一个新元素，返回数组的长度；
		arr.forEach(函数);遍历；
		arr.indexOf(元素值);找指定元素的索引，找不到返回-1；
		arr.join("分隔符");返回字符串；
		arr.map(函数); 数组中的每个元素都要执行这个函数，将执行后的结果组成一个新数组返回；
		arr.reverse();反转数组；
		arr.sort();将数组排序，不稳定，返回排序后的数组；
		arr.slice(开始位置索引，结束位置索引);截取指定的数组，返回一个新数组，不包含结束位置索引的在值；
		arr.splice(开始的位置，要删除的个数，替换的元素值);
*/

	 // arr.every()使用方法
	 var arr = [1000,3000,2000];
	 var res = arr.every(function (a,b,c) {
	 	// console.log(a+"==="+b+"==="+c)
	 	return a > 2000;
	 	// 数组中的每一个元素的值都要大于2000的情况在，最后才返回true
	 })
	 // console.log(res);


	 // arr.filter();使用方法
	 var arr1 = [10,20,30,40,50,60,70,80];
	 var newArray = arr1.filter(function (ele) {
	 	return ele > 40;
	 });

	 console.log(newArray);


```



###### 4.内置对象—String：

```javascript
// string ---类型-字符串-基本数据类型
    // String ---字符串类型--引用类型

    // 字符串的特性：不可变性，字符串的值是不能改变的；
    var str = "hello";
    str[1] = "H";
    // console.log(str);// hello

    /*
      内置对象：String()
         属性：
         str.length; 字符串的长度；
         str.charAt(index) 返回值是指定索引位置的字符；
         String.fromCharCode(num1,..,numN);返回对应的ASCII的值；
         str.contact(string2,string2...)字符串拼接；
         str.indexOf(要找的字符串，从某个位置开始的索引); 返回对应字符串的索引，找不到返回-1；
         str.lastIndexOf(要找的字符串，从某个位置开始的索引);从后面往前找；
         str.replace(oldstr,newstr);用来替换字符串；
         str.slice(startIndex,endIndex);得到的是获取到的字符串；
         str.split(要匹配的分隔符,留下的字符串);通过指定的分隔符，返回一组数组；
         str.substr(开始的位置,字符串的长度);返回截取的字符串；
         str.substring(开始的位置,结束的位置);返回截取的字符串，不包含结束位置的字符；
         str.toLocaleLowerCase();转小写
         str.toLowerCase(); 转小写
         str.toLocaleUpperCase();转大写
         str.toUpperCase();转大写
         str.trim();去除字符串两端的空格
   */


    // 案例：
    // 1.截取字符串中的 杨哥
    var str = "我最爱杨哥了，太帅了";
    var index = str.indexOf("杨哥");//获取索引
    str = str.(index,2);
    console.log(str);

    // 2.找到案例中所有的 o 出现的位置；
    var str2 = "hello oll oadd weo olll";
    var index = 0;//开始的位置
    var key = "o";//要找的字符串
    while((index = str2.indexOf(key,index)) != -1){
        console.log(index);
        index += key.length;
    };

    // 3.找到这个字符串中每个字符串出现了几次？
    var str3 = "asdfjasdfasdfasadfasdfasdf";
    // 把所有的字母转换成统一的大小写
    str3 = str3.toLowerCase();
    // 创建新的对象
    var obj = {};
    // 遍历字符串，获取每个字母
    for(var i = 0; i < str3.length; i++){
        var key = str3[i]; //每个字母
        if( obj[key] ){
            obj[key]++;
        }else{
            obj[key] = 1;
        }
    }

    for(var key in obj){
        console.log(key +"出现了"+ obj[key] +"次");
    }

```

### 十九、字符串的不可变性：

![28_js_字符串不可变性.html](E:\前端学习\Javascript\01-JavaScript基础\28_js_字符串不可变性.html.png)

### 二十、基本包装类型：

```javascript
// 基本包装类型
	// 普通变量不能直接调用属性或方法，
	// 对象可以直接调用属性和方法

	// 基本包装类型：本身是基本类型，但是在执行代码的过程中，如果这种类型的变量调用了属性或方法，那么这种类的变量就不再是基本类型了，而是基本包装类型，这个变量也不是普通的变量了，而是基本包装型对象；

    var str = "hello";
    str = str.replace("ll","LL");
    console.log(str);

    var num = 10;
    num = num.toString();
    console.log(num);

    // 如果第一个是对象&&true，那么结果是true；
    // 如果第一个是true&&对象，那么结果是对象；
    var flag = new Boolean(false);
    var result = flag&&true;
    console.log(result);

```

