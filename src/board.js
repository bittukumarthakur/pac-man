class Board {
  #size
  #board

  constructor(size) {
    this.#size = size;
    this.#board = this.#createBoard(this.#size);
  }

  #createBoard(size) {
    const line = new Array(size).fill([]);
    return line.map(() => [...new Array(size).fill('--')]);
  }

  update({ row, column }, symbol) {
    this.#board[row][column] = symbol;
  }

  toString() {
    return this.#board.map((line) => line.join('')).join('\n');
  }
}

exports.Board = Board;