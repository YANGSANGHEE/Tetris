import { useState, useCallback, Dispatch, SetStateAction } from 'react';

export const GameoverSet = (): any[] => {
  const [Gameover, SetGameover] = useState(true);
  //Gameover가 되어있을때 True
  const resetGame = useCallback(() => {
    SetGameover(false);
  }, []);

  return [Gameover, SetGameover, resetGame];
};
