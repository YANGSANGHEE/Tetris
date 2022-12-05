import { useEffect, useState } from 'react';
import { setBoard, setNextBoard } from '@/Common/SetBorad';

export const Boards = ({
  row,
  column,
  Player,
  resetPlayer,
  addLinesCleared,
}: {
  row: number;
  column: number;
  Player: any;
  resetPlayer: any;
  addLinesCleared: any;
}) => {
  const [boards] = useState<any>(setBoard({ row, column }));

  useEffect(() => {
    setBoards((previousBoard) =>
      setNextBoard({
        board: previousBoard,
        Player,
        resetPlayer,
        addLinesCleared,
      })
    );
  }, [Player, resetPlayer, addLinesCleared]);

  return [boards];
};
