import styled from '@/Theme/themeProvider';
import React from 'react';
import { calcPx } from '@/Hooks/CalcPx';
import { setBoard } from '@/Common/SetBorad';
import { transferToBoard } from '@/Common/Tetrominoes';
import SetBoardCell from '@/Common/SetBoardCell';
// import{transferToBoard} from '/'

const PreviewsSet = styled.div`
  position: absolute;
  top: 0;
  right: -168px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: ${calcPx(10)};
  & > div:nth-child(1) {
    display: grid;
    grid-gap: 2px;
    grid-template-rows: repeat(4, 1fr);
    grid-template-columns: repeat(4, 1fr);
    width: ${calcPx(119)};
    height: ${calcPx(119)};
  }
`;

const TetrisPreview = ({
  Tetrominoes,
  index,
}: {
  Tetrominoes: any;
  index: number;
}) => {
  const { shape, className } = Tetrominoes;

  const boards: any = setBoard({ row: 4, column: 4 });
  const styled = { top: `${index * 7}vw` };

  boards.row = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    row: boards.row,
    shape,
  });

  return (
    <PreviewsSet style={styled}>
      <div>
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
    </PreviewsSet>
  );
};

export default TetrisPreview;
