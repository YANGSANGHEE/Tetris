import { Cell } from './Cell';

export const setBoard = ({
  rows,
  columns,
}: {
  rows: number;
  columns: number;
}): object => {
  const build = [
    { length: rows },
    () => [{ length: columns }, () => ({ Cell })],
  ];

  return {
    rows: build,
    size: { rows, columns },
  };
};
