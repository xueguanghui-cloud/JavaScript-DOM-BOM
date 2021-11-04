// 格式化日期
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