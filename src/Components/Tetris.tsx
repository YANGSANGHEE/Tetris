import { Boards } from '@/Hooks/Boards';
import styled from 'styled-components';
import { GameStat } from '@/Hooks/GameStat';
import { Players } from '@/Hooks/Players';
import TetrisBoard from './TetrisBoard';
import TetrisStat from './TetrisStat';
import TetrisPreviews from './TetrisPreviews';

export interface Stat {
  LinePerLevel: number | undefined;
  Score: number | undefined;
  LineCompleated: number | undefined;
}

const Tetriswrap = styled.div`
  position: relative;
`;

const Tetris = ({
  row,
  column,
  SetGameover,
}: {
  row: number;
  column: number;
  SetGameover: any;
}) => {
  const [board, setBoard] = Boards({
    row,
    column,
    Player,
    resetPlayer,
    addLinesCleared,
  });
  const [Stats, getLineCleared] = GameStat();
  const [Player, setPlayer, resetPlayer] = Players();

  const { level, LinePerLevel, Score, LineCompleated } = Stats;

  const Stat: Stat = {
    LinePerLevel: LinePerLevel,
    Score: Score,
    LineCompleated: LineCompleated,
  };
  return (
    <Tetriswrap>
      <TetrisBoard level={level} boards={board} />
      <TetrisStat Stat={Stat}></TetrisStat>
      <TetrisPreviews Tetrominoes={Player.Tetrominoes}></TetrisPreviews>
    </Tetriswrap>
  );
};

export default Tetris;
