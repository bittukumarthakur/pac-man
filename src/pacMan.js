class Player {
  #avatar;
  #board;
  #directions;
  #position;
  #score;
  #length;
  #breadth;

  constructor(board, avatar) {
    this.#length = board.length - 1;
    this.#breadth = board.breadth - 1;
    this.#score = 0;
    this.#board = board;
    this.#avatar = avatar;
    this.#position = { row: 4, column: 4 };

    this.#directions = {
      right: this.#right,
      left: this.#left,
      up: this.#up,
      down: this.#down
    };

    this.#board.update({ ...this.#position }, this.#avatar);
  }

  #isColide(direction) {
    let tempPosition = { ...this.#position };
    this.#directions[direction](tempPosition);
    const { row, column } = tempPosition
    return row > this.#length || row < 0 || column < 0 || column > this.#breadth;
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
    this.#board.update({ ...this.#position }, '  ');

    if (this.#isColide(direction)) {
      this.#board.update({ ...this.#position }, this.#avatar);
      return
      direction = colideDirection;
    }

    this.#directions[direction](this.#position);
    this.#board.update({ ...this.#position }, this.#avatar);
  }

  #hasEaten(foodLocation) {
    const { row: foodRow, column: foodColumn } = foodLocation;
    const { row: avatarRow, column: avatarColumn } = this.#position;
    return foodRow === avatarRow && foodColumn === avatarColumn;
  }

  updateScore(foodLocation) {
    if (this.#hasEaten(foodLocation)) {
      this.#score += 1;
    }
  }

  get score() {
    return this.#score;
  }

}

exports.Player = Player;