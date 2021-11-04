

// 自调用函数---小蛇
(function () {
  var elements = []; //存放小蛇每个身体部分
  //小蛇的构造函数
  function Snake(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;

    // 小蛇的身体
    this.body = [{
      x: 3,
      y: 2,
      color: "red"
    }, {
      x: 2,
      y: 2,
      color: "orange"
    }, {
      x: 1,
      y: 2,
      color: "orange"
    }];

    // 方向
    this.direction = direction || "right";
  };
  Snake.prototype.init = function (map) {
    // 先删除之前的小蛇
    remove();
    // 循环遍历创建div
    for (var i = 0; i < this.body.length; i++) {
      // 数组中的每个元素都是一个对象
      var obj = this.body[i];
      var div = document.createElement("div");
      map.appendChild(div);
      div.style.position = "absolute";
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.left = obj.x * this.width + 'px';
      div.style.top = obj.y * this.height + 'px';
      div.style.backgroundColor = obj.color;
      div.parentNode.lastChild.style.borderRadius = '50%';
      elements.push(div);
    };
  };

  // 为原型添加方法--小蛇移动
  Snake.prototype.move = function (food, map) {
    // 改变小蛇的身体的移动坐标
    var i = this.body.length - 1; //2
    for (; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
    };
    //判断方向---改变蛇头的坐标
    switch (this.direction) {
      case "right":
        this.body[0].x += 1;
        break;
      case "left":
        this.body[0].x -= 1;
        break;
      case "down":
        this.body[0].y += 1;
        break;
      case "up":
        this.body[0].y -= 1;
        break;
    };
    // 判断有没有吃到食物--蛇头的坐标与食物的坐标一直
    // 蛇头的横纵坐标
    var headX = this.body[0].x * this.width;
    var headY = this.body[0].y * this.height;
    if (headX == food.x && headY == food.y) {
      fraction += 10;
      // 获取小蛇的最后的尾巴
      var last = this.body[this.body.length - 1];
      this.body.push({
        x: last.x,
        y: last.y,
        color: last.color
      });
      // 把食物删除，重新初始化食物
      food.init(map);
    }
  };


  // 删除小蛇---私有函数
  function remove() {
    // 获取数组
    var i = elements.length - 1;
    for (; i >= 0; i--) {
      // 先从当前的子元素找到该子元素的父级元素。然后删掉该子元素
      var ele = elements[i];
      ele.parentNode.removeChild(ele);
      // 再次把elements中的这个子元素也要删掉
      elements.splice(i, 1);
    }
  };
  window.Snake = Snake;
}());
