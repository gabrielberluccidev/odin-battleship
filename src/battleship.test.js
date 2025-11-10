/**
 * @jest-environment jsdom
 */

import { beforeEach, describe, expect, test } from '@jest/globals';
import { createShip, gameboard } from './battleship';

test('the ship length will be: 5', () => {
  expect(createShip(5).getLen()).toBe(5);
});

test('hit the ship', () => {
  expect(createShip(5).hit());
});

test('ship is not sunken', () => {
  expect(createShip(5).isSunk()).toBe(false);
});

test('should be sunk after 5 hits (for a ship of length 5)', () => {
  const ship = createShip(5);
  for (let i = 0; i < 5; i++) {
    ship.hit();
  }

  expect(ship.isSunk()).toBe(true);
});

test('should not be sunk after 4 hits (for a ship of length 4)', () => {
  const ship = createShip(4);
  for (let i = 0; i < 4; i++) {
    ship.hit();
  }

  expect(ship.isSunk()).toBe(true);
});

describe('gameboard DOM creation', () => {
  let gridContainer;

  beforeEach(() => {
    // 2. Crie o HTML que a sua função 'gameboard' espera encontrar
    document.body.innerHTML = '<div id="grid-container"></div>';

    // 3. SELECIONE o container na variável do teste
    gridContainer = document.querySelector('#grid-container');
  });
  test('should create 100 grid items for a 10x10 grid', () => {
    const myGameboard = gameboard();

    myGameboard.createGrid(10);

    expect(gridContainer.children.length).toBe(100);
  });

  test('divs name should be coordinates', () => {
    const myGameboard = gameboard();
    myGameboard.createGrid(2);

    let children = gridContainer.children;

    expect(children[0].className).toBe('grid-0-0');
    expect(children[1].className).toBe('grid-0-1');
    expect(children[2].className).toBe('grid-1-0');
    expect(children[3].className).toBe('grid-1-1');
  });

  test('divs name should be coordinates', () => {
    const myGameboard = gameboard();
    myGameboard.createGrid(2);

    let children = gridContainer.children;

    myGameboard.placeShip([0, 1], [1, 1]);

    expect((children[1].textContent = '.'));
    expect((children[3].textContent = '.'));
  });
});
