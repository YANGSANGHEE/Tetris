import IntroMenu from './IntroMenu';
import Tetris from './Tetris';
import { GameoverSet } from '@/Hooks/GameoverSet';
import { calcPx } from '@/Hooks/CalcPx';
import { useEffect } from 'react';
import styled from 'styled-components';

const TetrisSet = styled.div``;

const GameSet = ({ column, row }: { column: number; row: number }) => {
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
    <TetrisSet>
      {Gameover ? (
        <IntroMenu KeyEvent={gameStart}></IntroMenu>
      ) : (
        <Tetris column={column} row={row} SetGameover={SetGameover} />
      )}
    </TetrisSet>
  );
};

export default GameSet;
