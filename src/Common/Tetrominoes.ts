const className = 'block';

interface Tetrominoes {
  I: { shape: number[][]; className: string };
  J: { shape: number[][]; className: string };
  L: { shape: number[][]; className: string };
  O: { shape: number[][]; className: string };
  T: { shape: number[][]; className: string };
  Z: { shape: number[][]; className: string };
  [index: number]: any;
}

export const Tetrominoes: Tetrominoes = {
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
    ],
    className: `${className}_i`,
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0],
    ],
    className: `${className}_j`,
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1],
    ],
    className: `${className}_l`,
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    className: `${className}_o`,
  },
  T: {
    shape: [
      [1, 1, 1],
      [0, 1, 0],
      [0, 1, 0],
    ],
    className: `${className}_t`,
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0],
    ],
    className: `${className}_z`,
  },
};

export const randomTetromino = (): [] => {
  const keys: string[] = Object.keys(Tetrominoes);
  const index: number = Math.floor(Math.random() * keys.length);
  const key: string = keys[index];
  return Tetrominoes[key];
};

export const transferToBoard = ({
  className,
  isOccupied,
  position,
  row,
  shape,
}: {
  className: string;
  isOccupied: boolean;
  position: any;
  row: number;
  shape: any;
}) => {
  shape.forEach((rows: [], y: number) => {
    rows.forEach((cell: number, x: number) => {
      if (cell) {
        const occupied: boolean = isOccupied;
        const _y: number = y + position.row;
        const _x: number = x + position.column;
        row[_y][_x] = { occupied, className };
      }
    });
  });
  return row;
};
