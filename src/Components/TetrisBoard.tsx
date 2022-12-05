import SetBoardCell from '@/Common/SetBoardCell';
import styled from '@/Theme/themeProvider';
import { calcPx } from '@/Hooks/CalcPx';
import theme from '@/Theme/Style';

const BoardContainer = styled.div`
  & > div {
    margin: ${calcPx(16)} auto;
    display: grid;
    width: ${calcPx(538)};
    height: 80.4vh;
    background-color: rgba(11, 0, 55, 0.7);
    border-radius: ${calcPx(10)};
    border: 5px solid ${(props) => props.theme.color.mint};
    position: relative;
    & > div:nth-child(1) {
      width: 100%;
      ${(props) => props.theme.flexSet.flexCenter}
      position: absolute;
      top: ${calcPx(-30)};
      font-family: bitbit;
      color: ${(props) => props.theme.color.purple};
      & > p {
        width: ${calcPx(324)};
        height: ${calcPx(85)};
        background: url('/asset/LevelSet.png') center/cover no-repeat;
        text-align: center;
        padding: ${calcPx(10)};
        ${(props) => props.theme.fontSize.font_40}
      }
    }
  }
`;
const TetrisBoard = ({
  boards,
  level,
}: {
  boards: any;
  level: number | undefined;
}) => {
  console.log('board', boards);
  const boardSet = {
    girdTemplateRows: `reapeat(${boards.size.row},1fr)`,
    girdTemplateColumns: `reapeat(${boards.size.column},1fr)`,
  };

  return (
    <BoardContainer>
      <div style={boardSet}>
        <div>
          <p>Level{level}</p>
        </div>
        {boards.row.map((row: any, y: number) =>
          row.map((cell: any, x: number) => {
            return (
              <SetBoardCell
                key={x * boards.size.columnx + x}
                Cell={cell}
              ></SetBoardCell>
            );
          })
        )}
      </div>
    </BoardContainer>
  );
};

export default TetrisBoard;
