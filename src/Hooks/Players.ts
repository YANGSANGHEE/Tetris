import { randomTetromino } from '@/Common/Tetrominoes';
import { useState, useCallback } from 'react';

export interface bulidPlayer {
  collided: boolean;
  isFastDropping: boolean;
  position: { row: number; column: number };
  Tetrominoes: any[];
  Tetromino: [] | undefined;
}

const buildPlayer = (previous: any): bulidPlayer => {
  let Tetrominoes;
  if (previous) {
    Tetrominoes = [...previous.Tetrominoes];
    Tetrominoes.unshift(randomTetromino());
  } else {
    Tetrominoes = Array(5)
      .fill(0)
      .map((_) => randomTetromino());
  }
  return {
    collided: false,
    isFastDropping: false,
    position: { row: 0, column: 0 },
    Tetrominoes,
    Tetromino: Tetrominoes.pop(),
  };
};

export const Players = () => {
  const [Player, setPlayer] = useState(buildPlayer(''));
  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);
  return [Player, setPlayer, resetPlayer];
};
