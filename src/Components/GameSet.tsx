import IntroMenu from './IntroMenu';

const GameSet = ({ column, row }: { column: number; row: number }) => {
  const gameStart = () => {
    console.log('start Tetris');
  };
  return (
    <div className='TetrisSet'>
      <IntroMenu KeyEvent={gameStart}></IntroMenu>
    </div>
  );
};

export default GameSet;
