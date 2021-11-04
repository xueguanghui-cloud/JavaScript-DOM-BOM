# webapi操作笔记

## 一、DOM操作：

### 一、获取元素： 

​	1.根据 id 获取整个文档当中的元素：`document.getElementById("id");` 
​	2.根据标签名获取整个文档中的元素(伪数组)：`document.getElementsByName("标签名");` 
​	3.根据选择器获取元素：`document.querySelector("选择器");` 
​	4.根据选择器后去多个元素(伪数组)：`document.querySelectorAll("选择器");` 
​	5.根据类样式获取选择器(伪数组)：`document.getElementsByClassName("class");` 
​	6.根据 name 属性值获取表单元素(伪数组): `document.getElementsByName("name 值");`

### 二、操作属性： 

​	1.操作基本属性： src,title,alt,href,id 属性； 
​	2.操作表单属性：name,value,type,checked,slected,disabled; 
​	3.元素的样式操作：
​		对象.style.属性 = 值;
​		对象.className = 值;

### 三、自定义属性：

​	设置自定义属性：`setAttribute("属性的名字","属性的值");`
​	获取自定义属性；`getAttribute("属性的名字");`
​	移除自定义属性：`removeAttribute("属性的名字");` -- 也可以移除元素本身的属性；

### 四、节点:

​	节点的属性:
​		nodeType:1--标签,2--属性,3--文本;
​		nodeName:标签节点--大写的标签名,属性节点--属性名,文本节点--#text;
​		nodeValue:标签节点--null,属性节点--属性值,文本节点--文本内容;
​	获取节点的相关方法:

```javascript
	<script>
		// 12 行代码：都是获取节点和元素
		var ulObj = my$("uu");
		// 父级节点
		console.log(ulObj.parentNode);
		// 父级元素
		console.log(ulObj.parentElement);
		// 子节点
		console.log(ulObj.childNodes);
		// 子元素
		console.log(ulObj.children);
		// 以上方法谷歌,火狐,ie都支持;
		// 第一个子节点
		console.log(ulObj.firstChild);// ------------IE8获取的是第一个子元素
		// 第一个ziyuans
		console.log(ulObj.firstElementChild);// -------IE8不支持
		// 最后一个子节点
		console.log(ulObj.lastChild);// ------------IE8获取的是最后一个子元素
		// 最后一个子元素
		console.log(ulObj.lastElementChild);// -------IE8不支持
		// 某一个元素的前一个兄弟节点
		console.log(my$("four").previousSibling);// ------------IE8 获取的是某一个元素的前一个兄弟元素
		// 某一个元素的前一个兄弟元素
		console.log(my$("four").previousElementSibling);// -------IE8不支持
		// 某一个元素的后一个兄弟节点
		console.log(my$("four").nextSibling);// ------------IE8 获取的是某一个元素的后一个兄弟元素
		// 某一个元素的后一个兄弟元素
		console.log(my$("four").nextElementSibling);// -------IE8 不支持
	</script>
```



### 五、节点的兼容性代码：

```javascript
<script type="text/javascript">
	// 1.第一个节点和第一个元素的获取代码在 IE8 中可能不支持
	// 获取任意一个父级元素的第一个子级元素--节点方法
	// element.firstChild --> 谷歌火狐获取的是第一个子节点
	// element.firstChild --> IE8 获取的是第一个子元素
	// element.firstElementChild --> 谷歌火狐获取的是第一个子元素，IE8 不支持
	function getFirstElementChild(element) {
	if(element.firstElementChild){//true 支持
	return element.firstElementChild;
	}else{
	var node = element.firstChild;
	while(node && node.nodeType != "1"){
	node = node.nextSibling;
	}
	return node;
	}
	}

	// 2.最后一个个节点和最后一个元素的获取代码在IE8中可能不支持
	// 获取任意一个父级元素的最后一个子级元素--节点方法
	// element.lastChild --> 谷歌火狐获取的是第一个子节点
	// element.lastChild --> IE8获取的是第一个子元素
	// element.lastElementChild --> 谷歌火狐获取的是第一个子元素，IE8不支持
	function getLastElementChild(element) {
		if(element.lastElementChild){//true支持
			return element.lastElementChild;
		}else{
			var node = element.lastChild;
			while(node && node.nodeType != "1"){
				node = node.previousSibling;
			}
		}
	}

	// 3.前一个节点和前一个元素的获取代码在IE8中可能不支持
	// element.previousSibling --> 谷歌火狐获取的是第一个子节点
	// element.previousSibling --> IE8获取的是第一个子元素
	// element.previousElementSibling --> 谷歌火狐获取的是第一个子元素，IE8不支持
	// 获取任意兄弟元素的前一个元素--节点方法
	function getPerElementChild(element){
		if(element.previousElementSibling){//true 支持
			return element.previousElementSibling
		}else{
			var node = element.previousSibling;
			while(node && node.nodeType == "1"){
				node = node.previousSibling;
			}
		}
	}

	// 4.后一个节点和后一个元素的获取代码在IE8中可能不支持
	// element.nextSibling --> 谷歌火狐获取的是第一个子节点
	// element.nextSibling --> IE8获取的是第一个子元素
	// element.nextElementSibling --> 谷歌火狐获取的是第一个子元素，IE8不支持
	// 获取任意兄弟元素的前一个元素--节点方法
	function getNextElementChild(element){
		if(element.nextElementSibling){//true 支持
			return element.nextElementSibling
		}else{
			var node = element.nextSibling;
			while(node && node.nodeType == "1"){
				node = node.nextSibling;
			}
		}
	}
</script>
```

### 六、创建元素的不同方法:

​	1.`document.write("标签代码及内容");` 缺陷：如果是在页面加载完毕后，此时通过这种方式创建元素，那么页面上存在的所有内容全部被干掉；
​	2.`对象.innerHTML("标签代码及内容");` 缺陷：如果使用此方法创建元素，则创建元素的对象中的其它内容将会被干掉；
​	3.`document.createElement("标签");` 最后：把元素追加到父级元素中；
​	

### 七、元素的相关操作方法：

​	1.`appendChild(element);`	追加子元素；
​	2.`insertBefore(element);`	把新的子元素添加到第一个子元素的前面；
​	3.`replaceChild(newChild,oldChild);`	替换元素；
​	4.`removeChild(removeChild);`	删除元素；

### 八、为元素绑定事件和解绑事件：

##### 1.绑定事件：

###### 	基本语法：

​	1.`addEventListener(事件类型,处理函数,布尔值);`	参数1的事件类型没有on；谷歌火狐都支持，ie8不支持；
​	2.`attachEvent(事件类型,处理函数);` 参数1的事件类型需要on；谷歌火狐不支持，ie8不支持

###### 	兼容代码：

​	

```javascript
<script>
		function addEventListener(element, type, fun) {
            // 判断浏览器是否支持这个方法
            if (element.addEventListener) {
                element.addEventListener(type, fun, false);
            } else if (element.attachEvent) {
                element.attachEvent("on" + type, fun);
            } else {
                element["on" + type] = fun;
            }
        }
	</script>
```

##### 2.解绑事件:

###### 	基本语法：

​		注意：用什么方法绑定事件，就应该用对应的方法解绑事件；

```javascript
/* 
1.解绑事件：
    * 对象.on事件名字 = 事件处理函数 ----> 绑定事件；
    * 对象.on事件名字 = null ---> 解绑事件；
   
2.解绑事件
    * 对象.addEventListener(事件类型,命名函数,false); ---> 绑定事件
    * 对象.removeEventListener(事件类型,函数名字,false); ---> 解绑事件
    
3.解绑事件：
    * 对象.attachEvent(事件类型,命名函数); ---> 绑定事件
    * 对象.detachEvent(事件类型,函数名字); --->解绑事件
 */
```

```javascript
//案例：
//html代码：
  <input type="button" value="按钮" id="btn">
  <input type="button" value="解绑" id="btn1">


//js代码：
//	第一种
    my$("btn").onclick = function() {
        console.log("啊你哈瑟幽");
    };
    my$("btn1").onclick = function() {
        my$("btn").onclick = null;
    };
//	第二种
    function f1() {
        console.log("第一个");
    };

    function f2() {
        console.log("第二个");
    };

    my$("btn").addEventListener("click", f1, false);

    my$("btn").addEventListener("click", f2, false);

    my$("btn1").addEventListener("click", function() {
        // 解绑事件的时候，需要再绑定事件的时候使用命名函数
        my$("btn").removeEventListener("click", f1, false);
    }, false);

//	第三种
    function f1() {
        console.log("第一个");
    };

    function f2() {
        console.log("第二个");
    };

    my$("btn").attachEvent("onclick", f1);

    my$("btn").attachEvent("onclick", f2);

    my$("btn1").attachEvent("onclick", function() {
        // 解绑事件的时候，需要再绑定事件的时候使用命名函数
        my$("btn").detachEvent("onclick", f1);
    });
```

###### 兼容代码：

```javascript
// 为元素解绑事件
function removeEventListener(element, type, funName) {
    if (element.removeEventListener) {
        element.removeEventListener(type, funName, false);
    } else if (element.detachEvent) {
        element.detachEvent("on" + type, funName);
    } else {
        element["on" + type] = null;
    }
}
```

### 九、事件冒泡：

###### 1.事件冒泡：

```javascript
//html代码：
<div id="dv1">
    <div id="dv2">
        <div id="dv3"></div>
	</div>
</div>

//js代码：
// 事件冒泡：多个元素嵌套，有层次关系，这些元素注册了相同的事件，如果里面元素的事件触发了，外面的元素事件也会被触发；
my$("dv1").onclick = function() {
    console.log(this.id);
};
my$("dv2").onclick = function() {
    console.log(this.id);
};
my$("dv3").onclick = function(e) {
    console.log(this.id);
};
```

###### 2.阻止事件冒泡：

```javascript
 // 事件冒泡：多个元素嵌套，有层次关系，这些元素注册了相同的事件，如果里面元素的事件触发了，外面的元素事件也会被触发；
// 阻止事件冒泡：
// window.event.cancelBubble = true; 谷歌、IE支持(IE特有),火狐不支持；
//  e.stopPropagation(); 谷歌、火狐支持(火狐特有),IE不支持；

my$("dv1").onclick = function() {
    console.log(this.id);
};
my$("dv2").onclick = function() {
    console.log(this.id);
};
my$("dv3").onclick = function(e) {
    console.log(this.id);
    // window.event.cancelBubble = true; //阻止事件冒泡。IE特有
    e.stopPropagation(); //阻止事件冒泡，火狐特有
};
```

##### 事件阶段：

```javascript
 /**
   * 1.事件捕获节点：从外向里
   * 2.事件目标阶段：最开始选择的那个
   * 3.事件冒泡夹断：从里向外
   * 
   * 
   * 为元素绑定事件
   * addEventListener(没有on的事件类型,事件处理函数,控制事件阶段)
   * 事件触发的过程中，可能会出现事件冒泡的效果，为了阻止事件冒泡--->
   * window.event.canceBubble=true;谷歌ie支持，火狐不支持，
   * e.stopPropagation();阻止事件冒泡--->谷歌、火狐支持，ie8不支持
   * window.event和e都是事件参数对象，一个和是IE标准，一个是火狐标准
   * 事件参数e在IE8浏览器中是不存在的，此时用window.event代替；
   * addEventListener中第三个参数是控制事件阶段的：true-->捕获阶段；false--->冒泡阶段
   * 通过e.eventPhase这个属性可以知道当前事件是什么阶段的
   * 如果这个属性的值是：
   * 1---->捕获阶段
   * 2---->目标阶段
   * 3--->冒泡阶段
   *              
 */

// html代码：
<div id="dv1">
    <div id="dv2">
        <div id="dv3"></div>
	</div>
</div>

// js代码：
var obj = [my$('dv1'), my$('dv2'), my$('dv3')];
obj.forEach(function(ele) {
    ele.addEventListener("click", function(e) {
        console.log(this.id + "====" + e.eventPhase);
    }, false)
})
```

###### 为同一个元素绑定多个不同事件指向同一个处理函数：

```javascript
//html代码：
<input type="button" value="小苏" id="btn">

//js代码：
// 为同一个函数绑定多个不同的事件指向同一个处理函数：通过e.type 实现
my$("btn").onclick = f1;
my$("btn").onmouseover = f1;
my$("btn").onmouseout = f1;

function f1(e) {
    switch (e.type) {
        case "click":
            alert("点击了！！！");
            break;
        case "mouseover":
            this.style.color = "#fff";
            break;
        case "mouseout":
            this.style.color = "red";
            break;
    }
}
```



### 最后注意：

文档中所用到的`my$("id")` 是 `documen.getElementById("id");`的封装；

## 二、BOM操作：

### 一、BOM对象：

###### 	1.	浏览器顶级对象：BOM；页面顶级对象：document；

###### 	2.系统对话框：

```javascript
window.alert("Hello"); //以后不用
window.prompt("请输入账号");//以后不用
window.confirm("你确定退出吗？"); //以后不用，返回值：确定--true；取消--false；
```

###### 3.页面加载事件：

```javascript
//重点： window.onload---页面加载完成后执行
window.onload = function() {
	alert("Hello");
}

// 扩展事件--针对IE8
// window.onunload---页面关闭后触发
window.onunload = function() {
	alert("页面关闭了");
}

// window.onbeforeunload---页面关闭前触发
window.onbeforeunload = function() {
	alert("页面即将关闭");
}
```

### 二、location对象：

```javascript
// 对象中的属性和方法
// location对象：
console.log(window.location);

//浏览器的地址：
console.log(window.location.href);
// 协议：
console.log(window.location.protocol);
// 主机名及端口号：
console.log(window.location.host);
// 主机名：
console.log(window.location.hostname);
// 端口号：
console.log(window.location.port);
// 文件地址--相对路径：
console.log(window.location.pathname);
// 搜索的内容：
console.log(window.location.search);
// #后面的内容：
console.log(window.location.hash);
// 页面来源的域名的标准形式：
console.log(window.location.origin);


// 方法:
// 设置跳转的页面的地址:
window.location.href = "http://www.jd.com";//重点
window.location.assign("http://www.jd.com");
//重新加载--刷新
window.location.reload();
// 设置跳转的页面的地址,没有历史记录,不能回退
window.location.replace("http://www.jd.com");
```

![image-20210906214424056](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210906214424056.png)

### 三、history对象：

 `window.history.forward();` *//前进*

 `window.history.back();` *//后退*

 `window.history.go();` *//参数为-1时候回退.为1是前进*

```javascript
代码一：
<input type="button" value="跳过去" id="btn1">
<input type="button" value="前进" id="btn2">

document.getElementById("btn1").onclick = function() {
	window.location.href = "./13_js_history对象2.html";
}

document.getElementById("btn2").onclick = function() {
	window.history.forward();
}

```

```javascript
代码二：
document.getElementById("btn").onclick = function() {
    window.history.back();
}
```

### 四、navigator对象：

- **userAent 通过userAent可以判断用户浏览器类型**

* **platfrom 通过platfrom可以判断浏览器所在的系统平台类型***

```javascript
console.log(window.navigator.userAgent);
//Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/92.0.4515.131 Safari/537.36

console.log(window.navigator.platform);
//Win32
```

### 五、定时器：

###### setInterval

**`setInterval()`** 方法重复调用一个函数或执行一个代码段，在每次调用之间具有固定的时间延迟。

```javascript
//html代码：
 <input type="button" value="stop" id="btn">
//js代码：
  	// 定义定时器：
  	// 参数一：函数；、
  	// 参数二：时间--毫秒--1000毫秒--1秒；
  	// 执行过程：页面加载完毕后，每一1s执行一次
  	var timerId = setInterval(function() {
   	   console.log("你好");
  	}, 1000)

	//点击按钮停止定时器
	document.getElementById("btn").onclick = function() {
    	// 清除定时器
    	clearInterval(timerId);
	}
```

案例：

```javascript
//html代码：
<input type="button" value="摇起来" id="btn1">
<input type="button" value="停下来" id="btn2">
<div id="dv">
	<img src="img/01.jfif" alt="">
    <img src="img/02.jfif" alt="">
</div>

//css代码：
img {
    width: 200px;
    height: 300px;
}
#dv {
position: absolute;
}
//js代码：
var timer = '';
document.getElementById("btn1").onclick = function() {
    timerId = setInterval(function() {
        // 随机数
        var x = parseInt(Math.random() * 100 + 1);
        var y = parseInt(Math.random() * 100 + 1);
        document.getElementById("dv").style.left = x + "px";
        document.getElementById("dv").style.top = y + "px";
    }, 200)
}

document.getElementById("btn2").onclick = function() {
    clearInterval(timerId);
}
```

![image-20210907111430534](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210907111430534.png)

![image-20210907111453608](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210907111453608.png)

```javascript
//html代码：
 <input type="button" value="亮起来" id="btn">
 <div id="dv"></div>
//css代码：
#dv {
    width: 500px;
    height: 500px;
    background-color: #000;
    position: relative;
}
span {
    font-size: 30px;
    color: yellow;
    position: absolute;
}
//js代码：
  document.getElementById("btn").onclick = function() {
      setInterval(function() {
          document.getElementById("dv").innerHTML = "<span>★</span>"
          var x = parseInt(Math.random() * 500 + 1);
          var y = parseInt(Math.random() * 500 + 1);
          document.getElementById("dv").firstElementChild.style.left = x + "px";
          document.getElementById("dv").firstElementChild.style.top = y + "px";
      }, 100)
  }
```

![image-20210907111712321](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210907111712321.png)

```javascript
//html代码：
<img src="image/00_00.jpg" alt="" id="im">
//js代码：
function f1() {
    // 获取当前时间
    var dt = new Date();
    // 获取小时
    var hour = dt.getHours();
    // 获取秒
    var second = dt.getSeconds();
    hour = hour < 10 ? "0" + hour : hour;
    second = second < 10 ? "0" + second : second;

    document.getElementById("im").src = "image/" + hour + "_" + second + ".jpg";
}
setInterval(f1, 1000)
```

![image-20210907111830910](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210907111830910.png)

```javascript
//html代码：
<textarea name="" id="text" cols="30" rows="10">
    欢迎您成为当前的网络用户，祝您玩的愉快，必须要遵守法律的相关规定！
</textarea>
<button id="btn" disabled>请仔细阅读协议(5)</button>
//js代码：
var time = 5;
var timeId = setInterval(function() {
    document.getElementById("btn").innerText = "请仔细阅读协议(" + time + ")";
    if (time <= 0) {
        clearInterval(timeId);
        document.getElementById("btn").innerText = "同意";
        document.getElementById("btn").disabled = false;
    }
    time--;
}, 1000);
```

![image-20210907154719930](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210907154719930.png)

![image-20210907154803744](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210907154803744.png)

封装动画特效：*设置任意一个元素，移动到指定的位置，匀速动画*

```javascript
// 设置任意一个元素，移动到指定的位置
function animate(element, target) {
    // 清除定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function() {
        // 获取div当前位置
        var current = element.offsetLeft;
        // 移动的步数
        var step = 1;
        step = current > target ? -step : step;
        // 移动后的位置
        current = current + step;
        // 判断div是否到达目标位置
        if (Math.abs(target - current) >= Math.abs(step)) {
            // 设置div的位置
            element.style.left = current + "px";
        } else {
            // 清除定时器
            clearInterval(element.timeId);
            element.style.left = target + "px";
        };
    }, 5);
};
```

封装动画特效：*设置任意一个元素，移动到指定的位置，变速动画*

```javascript
// 设置任意一个元素，移动到指定的位置 变速动画封装
function animate(element, target) {
    // 清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function() {
        //获取当前元素位置
        var current = element.offsetLeft;
        // 移动的步数
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            // 清理定时器
            clearInterval(element.timeId);
        };
        // 测试代码：
        console.log("目标位置:" + target + "当前位置：" + current + "每次移动步数：" + step);
    }, 20)
}
```

###### 封装特效最终代码：

```javascript
// 获取任意一个元素的任意一个样式属性的值
function getStyle(element, attr) {
    return window.getComputedStyle ? window.getComputedStyle(element, null)[attr] : element.currentStyle[attr] || 0;
}
// 变速动画封装
function animate(element, json, callback) {
    // 清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function() {
        var flag = true; //假设已经全部到达
        for (var attr in json) {
            if (attr == "opacity") {
                //判断属性是否是opacity
                var current = getStyle(element, attr) * 100;
                var target = json[attr] * 100;
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                // 判断属性是否是zIndex
                element.style.zIndex = json[attr];
            } else {
                // 普通属性
                //获取当前元素位置
                var current = parseInt(getStyle(element, attr));
                var target = json[attr];
                // 移动的步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            // 到达目标
            if (current != target) {
                flag = false;
            };
        };
        if (flag) {
            // 清理定时器
            clearInterval(element.timeId);
            if (callback) {
                callback();
            }
        };
    }, 20)
}
```

**案例：**

```html
<div class="nav">
    <span id="cloud"></span>
    <ul id="navBar">
        <li>北京校区</li>
        <li>上海校区</li>
        <li>广州校区</li>
        <li>深圳校区</li>
        <li>武汉校区</li>
        <li>关于我们</li>
        <li>联系我们</li>
        <li>招贤纳士</li>
    </ul>
</div>
```

```css
* {
    margin: 0;
    padding: 0
}

ul {
    list-style: none
}

body {
    background-color: #333;
}

.nav {
    width: 800px;
    height: 42px;
    margin: 100px auto;
    background: url(images/rss.png) right center no-repeat;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
}

.nav li {
    width: 83px;
    height: 42px;
    text-align: center;
    line-height: 42px;
    float: left;
    cursor: pointer;
}

.nav span {
    position: absolute;
    top: 0;
    left: 0;
    width: 83px;
    height: 42px;
    background: url(images/cloud.gif) no-repeat;
}

ul {
    position: relative;
}
```

```javascript

// 获取云彩
var cloud = document.getElementById("cloud");
// 获取li
var list = document.getElementById("navBar").children;

// 循环遍历为li注册鼠标进入事件，鼠标离开事件，点击事件
for (var i = 0; i < list.length; i++) {
    // 进入事件
    list[i].onmouseover = mouseoverHandle;
    // 离开事件
    list[i].onmouseout = mouseoutHandle;
    // 点击事件
    list[i].onclick = clickHandle;
}

function mouseoverHandle() { // 进入
    animate(cloud, this.offsetLeft);
};

function mouseoutHandle() { //离开
    animate(cloud, lastPosition);
};
var lastPosition = 0;

function clickHandle() { //点击
    lastPosition = this.offsetLeft;
};


//变速动画
function animate(element, target) {
    //清理定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function() {
        //获取元素的当前位置
        var current = element.offsetLeft;
        //移动的步数
        var step = (target - current) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        current += step;
        element.style.left = current + "px";
        if (current == target) {
            //清理定时器
            clearInterval(element.timeId);
        }
        //测试代码:
        console.log("目标位置:" + target + ",当前位置:" + current + ",每次移动步数:" + step);
    }, 20);
}
```

![image-20210910113008378](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210910113008378.png)

###### setTimeout

**`setTimeout()`**方法设置一个定时器，该定时器在定时器到期后执行一个函数或指定的一段代码。



### 六、轮播图案例：

实现功能：自动播放切换；导航按钮；分页器效果；

###### 一、html代码：

```html
<div class="box" id="box">
    <!-- 相框 -->
    <div class="inner">
        <ul>
            <li>
                <a href="#"><img src="img/1.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="img/2.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="img/3.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="img/4.jpg" alt=""></a>
            </li>
            <li>
                <a href="#"><img src="img/5.jpg" alt=""></a>
            </li>
        </ul>
        <ol>
        </ol>
        <div id="focus">
            <span id="left">&lt;</span>
            <span id="right">&gt;</span>
        </div>
    </div>
</div>
```

###### 二、CSS代码：

```css
* {
    margin: 0;
    padding: 0;
}

ul {
    list-style: none;
}

img {
    vertical-align: top;
}

.box {
    width: 520px;
    height: 280px;
    margin: 100px auto;
    padding: 5px;
    border: 1px solid #ccc;
}

.inner {
    width: 520px;
    height: 280px;
    background-color: pink;
    overflow: hidden;
    position: relative;
}

.inner ul {
    width: 1000%;
    position: absolute;
    top: 0;
    left: 0;
}

.inner ul li {
    float: left;
}

ol {
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -60px;
}

ol li {
    width: 10px;
    height: 10px;
    text-align: center;
    line-height: 20px;
    border-radius: 50%;
    margin: 0 5px;
    background-color: #fff;
    color: #000;
    cursor: pointer;
    display: inline-block;
}

ol li.current {
    background-color: #ff5000;
    color: #fff;
}

#focus {
    width: 100%;
    position: absolute;
    top: 50%;
    margin-top: -20px;
    display: none;
}

#focus span {
    cursor: pointer;
    width: 20px;
    height: 40px;
    display: inline-block;
    text-align: center;
    color: #fff;
    line-height: 40px;
    background-color: rgba(0, 0, 0, .3);
}

#focus span#left {
    position: absolute;
    left: 0;
}

#focus span#right {
    position: absolute;
    right: 0;
}
```

###### 三、Javascript代码：

```javascript
// 获取最外面的div
var box = document.getElementById("box");
// 获取相框
var inner = box.children[0];
// 获取ul
var ulObj = inner.children[0];
// 获取ol
var olObj = inner.children[1];
// 获取焦点div
var focus = inner.children[2];
// 获取ul下的li
var list = ulObj.children;
// 获取相框的宽度
var imgWidth = inner.offsetWidth;

var pic = 0; //全局变量
// 创建小按钮---根据ul中li的个数
for (var i = 0; i < list.length; i++) {
    var liObj = document.createElement("li");
    // 在每个ol中的li标签上添加一个自定义属性，存储索引值
    liObj.setAttribute("index", i);
    olObj.appendChild(liObj);
    // 鼠标进入事件
    liObj.onmouseover = function() {
        // 清除ol中所有li的类样式
        for (var j = 0; j < olObj.children.length; j++) {
            olObj.children[j].removeAttribute("class");
        }
        // 为当前元素添加类样式，使其成为选中状态
        this.className = "current";
        // 获取鼠标进入的i的当前索引值
        pic = this.getAttribute("index");
        // 移动ul
        animate(ulObj, -pic * imgWidth);
    };
}

// 设置ol中第一个为默认值
olObj.children[0].className = "current";

// 克隆一个ul中的第一个li，加入到ul中的最后
ulObj.appendChild(ulObj.children[0].cloneNode(true));

// 自动播放
var timeId = setInterval(clickHandleRight, 2000);


// 鼠标进入到box的div显示焦点元素
box.onmouseover = function() {
    focus.style.display = "block";
    // 鼠标进入停止播放
    clearInterval(timeId);
};
// 鼠标离开到box的div隐藏焦点元素
box.onmouseout = function() {
    focus.style.display = "none";
    // 鼠标离开继续播放
    timeId = setInterval(clickHandleRight, 2000);
};

// 右边焦点按钮
document.getElementById("right").onclick = clickHandleRight;

function clickHandleRight() {

    if (pic == list.length - 1) {
        pic = 0;
        ulObj.style.left = 0 + "px";
    }
    pic++;
    // 移动ul
    animate(ulObj, -pic * imgWidth);
    // 如果pic=5说明吗，此时显示的第 6张图（内容是第一张图），第一个小按钮为选中
    if (pic == list.length - 1) {
        // 第五个按钮去掉类样式
        olObj.children[olObj.children.length - 1].removeAttribute("class");
        // 第一个按钮设置类样式
        olObj.children[0].className = "current";
    } else {
        for (var i = 0; i < olObj.children.length; i++) {
            olObj.children[i].removeAttribute("class");
        }
        olObj.children[pic].className = "current";
    }
};
// 左边焦点按钮
document.getElementById("left").onclick = clickHandleLeft;

function clickHandleLeft() {

    if (pic == 0) {
        pic = 5;
        ulObj.style.left = -pic * imgWidth + "px";
    }
    pic--;
    animate(ulObj, -pic * imgWidth);
    // 设置小按钮的颜色
    for (var i = 0; i < olObj.children.length; i++) {
        olObj.children[i].removeAttribute("class");
    }
    olObj.children[pic].className = "current";
};

// 设置任意一个元素，移动到指定的位置
function animate(element, target) {
    // 清除定时器
    clearInterval(element.timeId);
    element.timeId = setInterval(function() {
        // 获取div当前位置
        var current = element.offsetLeft;
        // 移动的步数
        var step = 10;
        step = current > target ? -step : step;
        // 移动后的位置
        current = current + step;
        // 判断div是否到达目标位置
        if (Math.abs(target - current) >= Math.abs(step)) {
            // 设置div的位置
            element.style.left = current + "px";
        } else {
            // 清除定时器
            clearInterval(element.timeId);
            element.style.left = target + "px";
        };
    }, 10);
};
```

![image-20210909171423779](C:\Users\小薛&小昱\AppData\Roaming\Typora\typora-user-images\image-20210909171423779.png)

### 五、三大系列系列：

#### offset系列：

- ​    没有脱离文档流：offset：父级元素margin+父级元素padding+父级border+自己margin；

- ​    脱离文档流：offset：和父级元素没有关系，主要是自己的left和自己的margin；

- ​    `offsetWidth`：获取元素的宽*(含有元素的边框)*；

- ​    `offsetHeight`：获取元素的高*(含有元素的边框)*；

- ​    `offsetTop`:获取元素距离上边的距离；

- ​    `offsetLeft`：获取元素距离左边的距离；

  ```javascript
  1. offsetLeft : 用于获取元素到最近的定位父盒子的左侧距离
      * 计算方式: 当前元素的左边框的左侧到定位父盒子的左边框右侧
      * 如果父级盒子没有定位, 那么会接着往上找有定位的盒子
      * 如果上级元素都没有定位,那么最后距离是与body的left值
  
  2. offsetTop : 用于获取元素到最近定位父盒子的顶部距离
      * 计算方式:当前元素的上边框的上侧到定位父盒子的上边框下侧
      * 如果父级盒子没有定位,那么会接着往上找有定位的盒子
      * 如果上级元素都没有定位,那么最后距离是与body的top值
  
  3. offsetWidth :用于获取元素的真实宽度(除了margin以外的宽度)
  
  4. offsetHeight : 用于获取元素的真实高度(除了margin以外的高度)
  
  5. offsetParent :用于获取该元素中有定位的最近父级元素
      * 如果当前元素的父级元素都没有进行定位,那么offsetParent为body
  ```

  

#### scrolll系列：

- `scrollWidth`:元素中内容实际的宽(没有边框),如果没有内容，则获取的是元素的宽；

- `scrollHeight`:元素中内容实际的高(没有边框),如果没有内容，则获取的是元素的高；

- `scrollTop`：向上卷曲出去的距离；

- `scrollLeft`：想左卷曲出去的距离：

  ```javascript
  1. scrollHeight :元素中内容的实际高度(没有边框)
      * 如果内容不足,就是元素的高度
  
  2. scrollWidth: 元素中内容的实际宽度(没有边框)
      * 如果内容不足,就是元素的宽度
  
  3. scrollTop: onscroll事件发生时,元素向上卷曲出去的距离
  
  4. scrollLeft : onscroll事件发生时,元素向左卷曲出去的距离
  ```

  ###### 兼容问题

  ```javascript
  /* 
  未声明 DTD: 谷歌,火狐,IE9+支持
    document.body.scrollTop/scrollLeft
  
  * 已经声明DTD:IE8以下支持
   document.documentElement.scrollTop/scrollLeft 
  
  * 火狐/谷歌/ie9+以上支持的
    window.pageYOffest/pageXOffest
   */
  
  //兼容代码：
  function getScroll() {
      return {
          left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0,
          top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop || 0
      };
  }
      
  /* 
     使用方法:
      1. 取得scrollLeft值: getScroll().left
      2. 取得scrollTop值: getScroll().top	
  */
  ```

  

####   cilent系列：                                                                                                                                                                              

-  `clientWidth`:可视区域的宽，没有边框
-  `clientHeight`:可视区域的高，没有边框
-  `clientLeft`:可视区域左边框的宽
-  `clientTop`:可视区域上边框的宽
- `clientX`:可视区域的横坐标
- `clientY`:可视区域的纵坐标

```javascript
/*
    1. clientWidth : 获取网页可视区域的宽度
    2. clientHeight: 获取网页可视区域的高度
    3. clientX :获取鼠标事件发生时的应用客户端区域的水平坐标
    4. clientY :获取鼠标事件发生时的应用客户端区域的垂直坐标
*/
```

###### 兼容问题

(1) clientWidth 和 clientHeight的兼容问题

```javascript
  //由浏览器对象不同导致

* 未声明 DTD: 谷歌,火狐,IE9+支持

document.body.clientWidth/clientHeight

* 已经声明DTD:IE8以下支持

document.documentElement.clientWidth/clientHeight

* 火狐/谷歌/ie9+以上支持的

 window.innerWidth/innerHeight
```

(2) clientWidth 和 clientHeight的兼容代码

```javascript
function client(){
    if(window.innerWidth){
        return {
            "width":window.innerWidth,
            "height":window.innerHeight
        };
    }else if(document.compatMode === "CSS1Compat"){
        return {
            "width":document.documentElement.clientWidth,
            "height":document.documentElement.clientHeight
        };
    }else{
        return {
            "width":document.body.clientWidth,
            "height":document.body.clientHeight
        };
    }
}
使用方法:
1. 取得clientWidth的值: client().width
2. 取得clientHeight的值: client().height
```

(3)clientX 和 clientY的兼容问题

```javascript
//由事件参数对象的兼容性问题导致

1. 谷歌,火狐,IE9+: 事件参数对象随着事件处理函数的参数传入
2. IE8以下: event对象必须作为window对象的一个属性(window.event)
```

(4)clientX 和 clientY的兼容性代码

```javascript
//将client和scroll的兼容问题进行对象的封装
var evtTools={
    //获取兼容的事件参数对象
    getEvt:function (e) {
        return window.event?window.event:e;
    },
    //获取的是可视区域的横坐标
    getClientX:function (e) {
        return this.getEvt(e).clientX;
    },
    //获取的是可视区域的纵坐标
    getClientY:function (e) {
        return this.getEvt(e).clientY;
    },
    //获取向左卷曲出去的距离的横坐标
    getScrollLeft:function () {
        return window.pageXOffset||document.body.scrollLeft||document.documentElement.scrollLeft||0;
    },
    //获取向上卷曲出去的距离的纵坐标
    getScrollTop:function () {
        return window.pageYOffset||document.body.scrollTop||document.documentElement.scrollTop||0;
    }
};
```

