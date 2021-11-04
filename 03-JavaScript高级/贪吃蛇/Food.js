//食物,先定义构造函数，再创建对象
(function () {
  var elements = []; //保存每个小方块食物
  function Food(x, y, width, height, color) {
    // 横纵坐标
    this.x = x || 0;
    this.y = y || 0;
    // 颜色
    this.color = color || "green";
    // 宽高
    this.width = width || 20;
    this.height = height || 20;
  };

  // 私有函数---删除食物
  function removeFood() {
    // elements数组中有这个食物
    for (var i = 0; i < elements.length; i++) {
      var ele = elements[i];
      // 找到这个子元素的父级元素。然后删除这个子元素
      ele.parentNode.removeChild(ele);
      // 再次把elements中的这个子元素也要删掉
      elements.splice(i, 1);
    }
  };

  // 为原型添加初始化的方法（显示这个食物）
  Food.prototype.init = function (map) {
    // 删除这个小食物
    removeFood();
    // 创建div并设置样式
    var div = document.createElement("div");
    div.style.position = "absolute";
    div.style.width = this.width + "px";
    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    // 随机坐标
    this.x = parseInt(Math.random() * (map.offsetWidth / this.width)) * this.width;
    this.y = parseInt(Math.random() * (map.offsetHeight / this.height)) * this.height;
    div.style.left = this.x + "px";
    div.style.top = this.y + "px";
    // 把div添加map中
    map.appendChild(div);
    // 把div加入到elements中
    elements.push(div);
  };

  // 把Food暴露给window，外部可以使用
  window.Food = Food;
}());
