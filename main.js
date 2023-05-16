const { Board } = require('./src/board.js');
const { Player } = require('./src/pacMan.js');

const board = new Board(10);
const bittu = new Player(board);
console.log(bittu.state());

const movementCode = () => Math.floor(Math.random() * lookup.length);

const lookup = ['right', 'left', 'up', 'down'];

setInterval(() => {
  console.clear()
  const direction = lookup[movementCode()];
  bittu.move(direction);
  console.log(direction)
  console.log(board.toString());
}, 200);
