import { Cell } from './Cell';
import { transferToBoard } from './Tetrominoes';

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

export const setNextBoard = ({
  board,
  Player,
  resetPlayer,
  addLinesCleared,
}: {
  board: any;
  Player: any;
  resetPlayer: any;
  addLinesCleared: any;
}) => {
  const { Tetromino, position } = Player;

  let row = board.row.map((rows: any) =>
    rows.map((Cells: any) => (Cells.occupied ? Cells : { ...Cell }))
  );

  row = transferToBoard({
    className: Tetromino.className,
    isOccupied: Player.collided,
    position,
    row,
    shape: Tetromino.shape,
  });
};
