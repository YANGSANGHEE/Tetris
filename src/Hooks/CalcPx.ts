export const calcPx = (Num: number): string => {
  let Counts = Number((Num / (1920 / 100)).toFixed(1));
  return `${Counts}vw`;
};
