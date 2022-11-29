import { Boards } from '@/Hooks/Boards';
import TetrisBoard from './TetrisBoard';

const Tetris = ({
  rows,
  columns,
  SetGameover,
}: {
  rows: number;
  columns: number;
  SetGameover: any;
}) => {
  const [board, setBoard] = Boards({ rows, columns });
  console.log(rows);
  return <TetrisBoard boards={board} />;
};

export default Tetris;
