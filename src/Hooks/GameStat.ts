import { useState, useCallback } from 'react';

export interface Stats {
  level?: number | undefined;
  LinePerLevel?: number | undefined;
  Score?: number | undefined;
  LineCompleated?: number | undefined;
}

export interface hi extends Stats {
  (): void;
}

const buildGameStat = () => ({
  level: 1,
  LinePerLevel: 10,
  Score: 0,
  LineCompleated: 0,
});

export const GameStat = () => {
  const [Stats, setStats] = useState<Stats>(buildGameStat);

  const getLineCleared: hi = useCallback(() => {}, []);

  return [Stats, getLineCleared];
};
