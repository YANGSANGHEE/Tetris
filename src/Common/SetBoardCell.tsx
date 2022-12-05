import styled from '@/Theme/themeProvider';
import { calcPx } from '@/Hooks/CalcPx';

let colors = [
  '#0066FF',
  '#A3DD00',
  '#FFC700',
  '#FF6666',
  '#B824B1',
  '#16CEB8',
  '#B2ABFF',
];

const BoardCells = styled.div`
  width: auto;
  border-radius: ${calcPx(6)};
  position: relative;
  &.block {
    border-top: ${calcPx(3)} solid rgba(255, 255, 255, 0.1);
    border-left: ${calcPx(3)} solid rgba(255, 255, 255, 0.1);
    border-bottom: ${calcPx(3)} solid rgba(0, 0, 0, 0.1);
    border-right: ${calcPx(3)} solid rgba(0, 0, 0, 0.1);
  }
  &.block .SparkEffect {
    position: absolute;
    z-index: 10;
    width: ${calcPx(6)};
    height: ${calcPx(6)};
    left: ${calcPx(-2)};
    height: ${calcPx(-2)};
    background: rgba(255, 255, 255, 0.4);
    border-radius: ${calcPx(4)};
  }
  .tetromino.ghost .SparkEffect {
    opacity: 0;
  }
  &.block_i {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
  &.block_j {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
  &.block_l {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
  &.block_o {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
  &.block_s {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
  &.block_t {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
  &.block_z {
    background-color: ${colors[Math.floor(Math.random() * colors.length)]};
  }
`;

const SetBoardCell = ({ Cell }: { Cell: any }) => {
  return (
    <BoardCells className={Cell.className}>
      <div className='SparkEffect'></div>
    </BoardCells>
  );
};

export default SetBoardCell;
