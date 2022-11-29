import IntroMenu from './IntroMenu';
import Tetris from './Tetris';
import { GameoverSet } from '@/Hooks/GameoverSet';
import React, { useEffect } from 'react';

const GameSet = ({ columns, row }: { columns: number; row: number }) => {
  const [Gameover, SetGameover, resetGame] = GameoverSet();

  //게임 오버시 버튼 클릭하면 게임 다시시작
  const gameStart = (e: React.MouseEvent<HTMLElement>) => {
    resetGame();
    console.log(`Game over is ${Gameover}`);
  };

  // Enter 키를 눌렀을때 게임 시작
  useEffect(() => {
    document.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        resetGame();
      }
    });
  }, []);

  return (
    <div className='TetrisSet'>
      {Gameover ? (
        <IntroMenu KeyEvent={gameStart}></IntroMenu>
      ) : (
        <Tetris columns={columns} rows={row} SetGameover={SetGameover} />
      )}
    </div>
  );
};

export default GameSet;
