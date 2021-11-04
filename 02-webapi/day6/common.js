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

// 设置任意一个元素，移动到指定的位置 匀速动画封装
function animate1(element, target) {
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

// 设置任意一个元素，移动到指定的位置 变速动画封装
function animate2(element, target) {
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

// 滚动距离
function getScroll() {
	return {
			top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0,
			left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0
	};
}


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