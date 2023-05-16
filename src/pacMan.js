class Player {
  #avatar
  #board
  #directions
  #position

  constructor(board) {
    this.#board = board;
    this.#avatar = '🐼';
    this.#position = { row: 4, column: 4 };

    this.#directions = {
      right: this.#right,
      left: this.#left,
      up: this.#up,
      down: this.#down
    };

    this.#board.update({ ...this.#position }, this.#avatar);
  }

  #isColide({ row, column }) {
    return row > 9 || row < 0 || column < 0 || column > 9;
  }

  #colide(direction) {
    let tempPosition = { ...this.#position };
    this.#directions[direction](tempPosition);

    const oppositeDirection = {
      right: 'left',
      left: 'right',
      up: 'down',
      down: 'up'
    };

    if (this.#isColide(tempPosition)) {
      return { hasColide: true, direction: oppositeDirection[direction] }
    }

    return { hasColide: false, direction }
  }

  #right(position) {
    position.column += 1;
  }

  #left(position) {
    position.column -= 1;
  }

  #up(position) {
    position.row -= 1;
  }

  #down(position) {
    position.row += 1;
  }

  move(direction) {
    this.#board.update({ ...this.#position }, '--');
    const { hasColide, direction: colideDirection } = this.#colide(direction);

    if (hasColide) {
      direction = colideDirection;
    }

    this.#directions[direction](this.#position);
    this.#board.update({ ...this.#position }, this.#avatar);
  }

  // eat() {

  // }

}

exports.Player = Player;