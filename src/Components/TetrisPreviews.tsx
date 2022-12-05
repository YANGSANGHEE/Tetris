import React from 'react';
import TetrisPreview from './TetrisPreview';

const TetrisPreviews = ({ Tetrominoes }: { Tetrominoes: object[] }) => {
  const PreviewTetrominoes: object[] = Tetrominoes.slice(
    1 - Tetrominoes.length
  ).reverse();
  console.log(PreviewTetrominoes);
  return (
    <>
      {PreviewTetrominoes.map((tetroval: any, index: number) => {
        return (
          <TetrisPreview
            Tetrominoes={tetroval}
            index={index}
            key={index}
          ></TetrisPreview>
        );
      })}
    </>
  );
};

export default React.memo(TetrisPreviews);
