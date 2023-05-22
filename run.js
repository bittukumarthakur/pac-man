const readline = require('readline');
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

const { Board } = require('./src/board.js');
const { Player } = require('./src/pacMan.js');
const { Food } = require('./src/food.js');

const lookup = {
  d: "right",
  a: "left",
  w: "up",
  s: "down"
};

const main = function () {
  const board = new Board(10, 10);
  const bittu = new Player(board, "🐼");
  const apple = new Food(board, '🍎');

  const foodAppear = setInterval(() => {
    apple.place();
  }, 3000);

  const game = function (move) {
    bittu.move(move);
    bittu.updateScore(apple.position);
    console.clear();
    console.log(' Score : ', bittu.score, ' Health : ', '❤️ ❤️ ❤️')
    console.log(board.toString());
  };

  process.stdin.on('keypress', (src, key) => {
    if (key.ctrl && key.name === 'c') {
      process.exit();
    } else {
      game(lookup[key.name]);
    }
  });

}

main();