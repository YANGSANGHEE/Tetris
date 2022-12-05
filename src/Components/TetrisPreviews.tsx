import React from 'react';
import TetrisPreview from './TetrisPreview';

const TetrisPreviews = ({ tetrominoes }: { tetrominoes: object[] }) => {
  const PreviewTetrominoes: object[] = tetrominoes
    .slice(1 - tetrominoes.length)
    .reverse();
  return (
    <>
      {PreviewTetrominoes.map((tetroval, index: number) => {
        <TetrisPreview
          tetromino={tetroval}
          index={index}
          key={index}
        ></TetrisPreview>;
      })}
    </>
  );
};

export default React.memo(TetrisPreviews);
