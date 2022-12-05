import { useState } from 'react';
import { setBoard } from '@/Common/SetBorad';

export const Boards = ({ row, column }: { row: number; column: number }) => {
  const [boards] = useState<any>(setBoard({ row, column }));
  return [boards];
};
