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