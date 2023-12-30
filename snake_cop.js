class Game {
  constructor() {
      this.board = Array(10).fill().map(() => Array(10).fill('*'));
      this.snake = [[0, 0]];
      this.direction = [0, 1];
      this.gameOver = false;
      this.food = this.generateFood();
  }

  generateFood() {
      let food;
      do {
          food = [Math.floor(Math.random() * this.board.length), Math.floor(Math.random() * this.board[0].length)];
      } while (this.snake.some(([x, y]) => x === food[0] && y === food[1]));
      return food;
  }

  printBoard() {
      this.board.forEach(row => console.log(row.join(' ')));
  }

  updateBoard() {
      this.board = this.board.map((row, i) => row.map((cell, j) => {
          if (this.snake.some(([x, y]) => x === i && y === j)) return 'S';
          if (this.food[0] === i && this.food[1] === j) return 'F';
          return '*';
      }));
  }

  updateSnake() {
      const head = this.snake[0].map((val, i) => val + this.direction[i]);
      if (head.some((val, i) => val < 0 || val >= this.board[i].length) || this.snake.some(([x, y]) => x === head[0] && y === head[1])) {
          this.gameOver = true;
      } else {
          this.snake.unshift(head);
          if (head[0] === this.food[0] && head[1] === this.food[1]) {
              this.food = this.generateFood();
          } else {
              this.snake.pop();
          }
      }
  }

  changeDirection(newDirection) {
      this.direction = newDirection;
  }

  play() {
      while (!this.gameOver) {
          this.updateBoard();
          this.printBoard();
          this.updateSnake();
          // Here you can add a delay or input for changing direction
      }
  }
}

const game = new Game();
game.play();