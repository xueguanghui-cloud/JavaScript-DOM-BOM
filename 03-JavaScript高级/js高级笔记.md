# JavaScript高级

## 一、实例对象：

#### 	一、实例对象与构造函数之间的关系：

- 实例对象和构造函数之间的关系：

  ​    1.实例对象是通过构造函数来创建的---创建的过程叫做实例化对象

  ​    2.如何判断对象是不是这个数据类型？

  ​     	1) 通过构造器的方式：实例对象.constructor == 构造函数名字：`console.log(per.constructor == Person);`

  ​     	2) 对象 instanceof 构造函数名字:`console.log(per instanceof Person);`

```javascript
// 自定义构造函数----》实例化对象
function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.eat = function() {
        console.log("吃大蒜");
    }
}

// 构造函数---创建对象 
var per = new Person("小羽", 33, "男");
// 实例对象是通过构造函数创建的
// console.dir();把这个对象的结构显示出来
console.dir(per);
console.dir(Person);

console.log(per.constructor == Person);
console.log(per.__proto__.constructor == Person);
console.log(per.__proto__.constructor == Person.prototype.constructor);
```

- 贪吃蛇

```html
<div class="map">

</div>
<div id="btn">
    <button id="up">上</button>
    <button id="down">下</button>
    <button id="left">左</button>
    <button id="right">右</button>
</div>
```

```css
.map {
    width: 800px;
    height: 600px;
    margin: 0px auto;
    background-color: #ccc;
    position: relative;
}

#btn {
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 50px;
    margin: 0 auto;
    text-align: center;
}

button {
    width: 70px;
    height: 30px;
    line-height: 30px;
    border: 1px solid #008c8c;
    border-radius: 5px;
    background-color: turquoise;
    color: #fff;
}

@media screen and (max-width: 600px) {
    .map {
        width: auto;
        min-height: 500px;
        max-height: 90vh;
        margin: 0 auto;
        background-color: #ccc;
        position: relative;
    }
}
```

```javascript
var fraction = 0;//得分
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


var game = new Game(document.querySelector(".map"));
game.init();
```

