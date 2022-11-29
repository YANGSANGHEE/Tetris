import { useState } from 'react';
import { setBoard } from '@/Common/SetBorad';

export const Boards = ({
  rows,
  columns,
}: {
  rows: number;
  columns: number;
}) => {
  const boards = useState<any>(setBoard({ rows, columns }));

  return boards;
};
