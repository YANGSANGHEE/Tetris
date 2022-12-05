import styled from '@/Theme/themeProvider';
import React from 'react';
import { setBoard } from '@/Common/SetBorad';
import SetBoardCell from '@/Common/SetBoardCell';
// import{transferToBoard} from '/'

const PreviewsSet = styled.div`
  
  
`;

const TetrisPreview = ({
  tetromino,
  index,
}: {
  tetromino: any;
  index: number;
}) => {
  const { shape, className } = tetromino;
  console.log(setBoard);
  const board = setBoard({ row: 4, column: 4 });
  const styled = { top: `${index * 15}vw` };

  board.row = transferToBoard({
    className,
    isOccupied: false,
    position: { row: 0, column: 0 },
    row: board.row,
    shape,
  });

  return <></>;
};

export default TetrisPreview;
