class Board {
  #size
  #board
  #length
  #breadth

  constructor(length, breadth) {
    this.#length = length;
    this.#breadth = breadth;
    this.#board = this.#createBoard(this.#size);
  }

  #createBoard() {
    const line = new Array(this.#length).fill([]);
    return line.map(() => [...new Array(this.#breadth).fill('  ')]);
  }

  update({ row, column }, symbol) {
    this.#board[row][column] = symbol;
  }

  toString() {
    const borderBreadth = (this.#breadth + 2) * 2;
    const border = new Array(borderBreadth).fill('🀰').join('');
    return border.concat('\n', this.#board.map((line) => '█ '.concat(line.join(''), ' █')).join('\n'), '\n', border);
  }

  get length() {
    return this.#length;
  }

  get breadth() {
    return this.#breadth;
  }
}

exports.Board = Board;