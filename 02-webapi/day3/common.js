// 根据id值获取对应的标签元素
function my$(id) {
	return document.getElementById(id);
}

// 兼容代码：
// 设置任意标签中间的任意文本内容
function setInnerText(element, text){
	// 判断浏览器是否支持这个属性textContext
	if(typeof element.textContent == "undefined"){
		// 不支持
		element.innerText = text;
	}else{
		// 支持
		element.textContent = text;
	}
}

// 获取任意标签之间的文本内容
function getInnerText(element) {
	if(typeof element.textContent == "undefined"){
		return element.innerText;
	}else{
		return element.textContent;
	}
}

// 为元素绑定事件；兼容代码
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