import baseStyled, { ThemedStyledInterface } from 'styled-components';
import { calcPx } from '@/Hooks/CalcPx';

const color = {
  mint: '#16CEB8',
  purple: '#B824B1',
  yellow: '#FFC700',
  blue: '#0066FF',
  green: '#A4DD00',
  salmon: '#FF6666',
};

const fontSize = {
  font_18: `font-size : ${calcPx(18)};`,
  font_27: `font-size : ${calcPx(27)};`,
  font_30: `font-size : ${calcPx(30)};`,
  font_35: `font-size : ${calcPx(35)};`,
  font_36: `font-size : ${calcPx(36)};`,
  font_40: `font-size : ${calcPx(40)};`,
  font_48: `font-size : ${calcPx(48)};`,
  font_50: `font-size : ${calcPx(50)};`,
  font_55: `font-size : ${calcPx(55)};`,
};

const flexSet = {
  flexCenter: `
    display : flex;
    align-items : center;
    justify-content : center;
  `,
  flexcolumnCenter: `
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`,
};

const theme = {
  color,
  fontSize,
  flexSet,
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export default theme;
