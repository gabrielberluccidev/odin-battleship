console.log('oi');

function createShip(length) {
  const len = length;
  let hits = 0;

  return {
    hit() {
      hits += 1;
    },
    isSunk() {
      return hits >= len;
    },

    getLen() {
      return len;
    },
  };
}

function gameboard() {
  // const gridContainer = document.createElement('div');
  // gridContainer.className = 'grid-container';

  return {
    createGrid(grid) {
      const gridContainer = document.querySelector('#grid-container');

      for (let i = 0; i < grid; i++) {
        for (let j = 0; j < grid; j++) {
          const gridItem = document.createElement('div');
          gridItem.className = `grid-${i}-${j}`;

          gridContainer.appendChild(gridItem);
        }
      }

      return gridContainer;
    },

    receiveAttack(x, y) {},

    placeShip([x, y]) {
      const position = document.querySelector(`.grid-${x}-${y}`);

      position.textContent = '.';
    },
  };
}

export { createShip, gameboard };
