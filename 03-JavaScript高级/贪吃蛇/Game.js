
// 自调用函数---游戏
(function () {
  var that = null;

  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  };
  Game.prototype.init = function () {
    // 初始化游戏
    this.food.init(this.map);
    this.snake.init(this.map);
    // 调用自动移动小蛇的方法
    this.runSnake(this.food, this.map);
    this.bindKey();
  };

  // 添加原型方法---设置小蛇可以自动移动
  Game.prototype.runSnake = function (food, map) {
    var timeId = setInterval(function () {
      // 此时this是window
      this.snake.move(food, map);
      this.snake.init(map);
      // 横坐标的最大值
      var maxX = map.offsetWidth / this.snake.width;
      // 纵坐标的最大值
      var maxY = map.offsetHeight / this.snake.height;
      // 小蛇头的横坐标
      var headX = this.snake.body[0].x;
      // 小蛇头的纵坐标
      var headY = this.snake.body[0].y;
      if (headX < 0 || headX >= maxX) {
        // 撞墙了，停止计时器
        clearInterval(timeId);
        alert("很遗憾！ 游戏结束！！您的分数为：" + fraction);
      };
      if (headY < 0 || headY >= maxY) {
        // 撞墙了，停止计时器
        clearInterval(timeId);
        alert("很遗憾！ 游戏结束！！您的分数为：" + fraction);
      }
    }.bind(that), 200); //bind改变this的指向问题
  };

  // 添加原型方法---设置用户按键，改变小蛇移动方向
  Game.prototype.bindKey = function () {
    // 获取按钮
    var left = document.getElementById("left");
    var up = document.getElementById("up");
    var right = document.getElementById("right");
    var down = document.getElementById("down");
    document.addEventListener("click", function (e) {
      left.onclick = function () {
        this.snake.direction = "left";
      }.bind(that);
      right.onclick = function () {
        this.snake.direction = "right";
      }.bind(that);
      up.onclick = function () {
        this.snake.direction = "up";
      }.bind(that);
      down.onclick = function () {
        this.snake.direction = "down";
      }.bind(that);
    }.bind(that), false);

    document.addEventListener("keydown", function (e) {
      switch (e.keyCode) {
        case 37:
          this.snake.direction = "left";
          break;
        case 38:
          this.snake.direction = "up";
          break;
        case 39:
          this.snake.direction = "right";
          break;
        case 40:
          this.snake.direction = "down";
          break;
      };
    }.bind(that), false)

  };

  window.Game = Game;

}());
