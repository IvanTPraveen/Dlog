document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const scale = 20;
    const rows = canvas.height / scale;
    const columns = canvas.width / scale;

    let losses = 0;
    let snake;
    let fruit;

    (function setup() {
        snake = new Snake();
        fruit = new Fruit();
        fruit.pickLocation();

        window.setInterval(() => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fruit.draw();
            snake.update();
            snake.draw();

            if (snake.eat(fruit)) {
                fruit.pickLocation();
            }

            snake.checkCollision();
            document.querySelector('.score').innerText = snake.total;
        }, 100);
    }());

    window.addEventListener('keydown', (event) => {
        const direction = event.key.replace('Arrow', '');
        snake.changeDirection(direction);
    });

    function Snake() {
        this.x = 0;
        this.y = 0;
        this.xSpeed = scale * 1;
        this.ySpeed = 0;
        this.total = 0;
        this.tail = [];

        this.draw = function () {
            ctx.fillStyle = '#000000';

            for (let i = 0; i < this.tail.length; i++) {
                ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
            }

            ctx.fillRect(this.x, this.y, scale, scale);
        };

        this.update = function () {
            for (let i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }

            this.tail[this.total - 1] = { x: this.x, y: this.y };

            this.x += this.xSpeed;
            this.y += this.ySpeed;

            if (this.x >= canvas.width) {
                this.x = 0;
            }

            if (this.y >= canvas.height) {
                this.y = 0;
            }

            if (this.x < 0) {
                this.x = canvas.width - scale;
            }

            if (this.y < 0) {
                this.y = canvas.height - scale;
            }
        };

        this.changeDirection = function (direction) {
            switch (direction) {
                case 'Up':
                    if (this.ySpeed !== scale * 1) {
                        this.xSpeed = 0;
                        this.ySpeed = -scale * 1;
                    }
                    break;
                case 'Down':
                    if (this.ySpeed !== -scale * 1) {
                        this.xSpeed = 0;
                        this.ySpeed = scale * 1;
                    }
                    break;
                case 'Left':
                    if (this.xSpeed !== scale * 1) {
                        this.xSpeed = -scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
                case 'Right':
                    if (this.xSpeed !== -scale * 1) {
                        this.xSpeed = scale * 1;
                        this.ySpeed = 0;
                    }
                    break;
            }
        };

        this.eat = function (fruit) {
            if (this.x === fruit.x && this.y === fruit.y) {
                this.total++;
                document.getElementById("score").innerHTML = "score = "+ this.total;
                return true;
            }
            return false;
        };

        this.checkCollision = function () {
            for (let i = 0; i < this.tail.length; i++) {
                if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
                    this.total = 0;
                    this.tail = [];
                    document.getElementById("score").innerHTML = "score = "+ this.total;
                    losses = losses + 1;
                    document.getElementById("losses").innerHTML = "losses = "+ losses
                }
            }
        };
    }

    function Fruit() {
        this.x;
        this.y;

        this.pickLocation = function () {
            this.x = (Math.floor(Math.random() * columns)) * scale;
            this.y = (Math.floor(Math.random() * rows)) * scale;
        };

        this.draw = function () {
            ctx.fillStyle = '#ff0000';
            ctx.fillRect(this.x, this.y, scale, scale);
        };
    }
});