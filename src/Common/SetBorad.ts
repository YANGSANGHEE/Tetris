import { Cell } from './Cell';

export const setBoard = ({
  row,
  column,
}: {
  row: number;
  column: number;
}): object => {
  const build = Array.from({ length: row }, () =>
    Array.from({ length: column }, () => ({ ...Cell }))
  );
  return {
    row: build,
    size: { row, column },
  };
};
