const { Board } = require('./src/board.js');
const { Player } = require('./src/pacMan.js');
const { Food } = require('./src/food.js');


const readStdin = function (onData, isEndOfInput, foodAppear1, foodAppear2, foodAppear3) {
  process.stdin.setEncoding("utf-8");
  let lastMove = "d";

  const lookup = {
    d: "right",
    a: "left",
    w: "up",
    s: "down"
  }


  const readLine = function () {
    const line = process.stdin.read();
    if (line) {
      if (isEndOfInput(line.trim())) {
        clearInterval(intervalId);
        clearInterval(foodAppear1);
        clearInterval(foodAppear2);
        clearInterval(foodAppear3);
        return "Game Over";
      }

      if (line.trim() in lookup) {
        lastMove = line;
        onData(lookup[line.trim()]);
      }
      onData(lookup[lastMove.trim()]);

    };
    onData(lookup[lastMove.trim()]);
  }

  const intervalId = setInterval(readLine, 300);
};



const main = function () {
  const board = new Board(15, 15);
  const bittu = new Player(board, '🐼');
  const apple = new Food(board, '🍎');
  const orange = new Food(board, '🍊');
  const mango = new Food(board, '🥭');
  const grapes = new Food(board, '🍇');



  const foodAppear1 = setInterval((sec) => {
    apple.place();
  }, 1000 * Math.floor(Math.random() * 10));

  const foodAppear2 = setInterval((sec) => {
    mango.place();
    orange.place();
  }, 1000 * Math.floor(Math.random() * 10));

  const foodAppear3 = setInterval((sec) => {
    grapes.place();
  }, 1000 * Math.floor(Math.random() * 10));

  const a = function (move) {
    bittu.move(move);
    bittu.updateScore(apple.position);
    bittu.updateScore(orange.position);
    bittu.updateScore(mango.position);
    bittu.updateScore(grapes.position);
    // bittu.hasEaten(apple.position)
    console.clear();
    console.log('\t', 'Score : ', bittu.score, '\t', 'Health : ', '❤️ ❤️ ❤️')
    console.log(board.toString());
  };

  readStdin(a, (endToken) => endToken === "END", foodAppear1, foodAppear2, foodAppear3);
}


main();



// const debu = new Player(board, "🐳");
// const tomato = new Food(board, '🪱 ');

// const getRandomNumber = (multiple) => Math.floor(Math.random() * multiple);


// const getDirectionGenerator = function () {
//   const lookup = ['right', 'left', 'up', 'down'];
//   let times = 0;
//   let directionCode = 0;

//   return function () {
//     if (times === 0) {
//       times = getRandomNumber(6);
//       directionCode = getRandomNumber(lookup.length);
//       return lookup[directionCode];
//     }
//     times--;
//     return lookup[directionCode];

//   };
// };

// const direction1 = getDirectionGenerator();
// const direction2 = getDirectionGenerator();

// setInterval(() => {
//   tomato.place();
//   apple.place();
// }, 5000);

// setInterval(() => {
//   bittu.move(direction1());
//   debu.move(direction2());
//   console.clear();
//   console.log(board.toString());
// }, 200);
