class Food {
  #board;
  #foodIcon;
  #presentFoodLocation;

  constructor(board, icon) {
    this.#board = board;
    this.#foodIcon = icon;
    this.#presentFoodLocation = { row: 0, column: 0 };
    this.place();
  }

  #getRandomLocation() {
    const row = Math.floor(Math.random() * this.#board.length);
    const column = Math.floor(Math.random() * this.#board.breadth);
    return { row, column };
  }

  place() {
    const previousFoodLocation = this.#presentFoodLocation;
    this.#board.update(previousFoodLocation, '  ');
    this.#presentFoodLocation = this.#getRandomLocation();
    this.#board.update(this.#presentFoodLocation, this.#foodIcon);
  }

  get position() {
    return { ...this.#presentFoodLocation };
  }
}

exports.Food = Food;