import styled from 'styled-components';
import React from 'react';
import { calcPx } from '@/Hooks/CalcPx';
import { Stat } from './Tetris';

const TetrisStatInfo = styled.ul`
  position: absolute;
  width: ${calcPx(181)};
  right: ${calcPx(-230)};
  bottom: ${calcPx(141)};
  list-style: none;
  text-align: left;
  font-family: bitbit;
  & > div {
    margin-bottom: ${calcPx(30)};
    & > li {
      ${(props) => props.theme.fontSize.font_30};
      color: #fff;
      &.Stattitle {
        ${(props) => props.theme.fontSize.font_27};
        color: ${(props) => props.theme.color.mint};
        margin-bottom: ${calcPx(24)};
      }
    }
  }
  & > div:nth-child(2) {
    margin-bottom: 0;
  }
`;

const TetrisStat = ({ Stat }: { Stat: Stat }) => {
  console.log(Stat);
  const { LinePerLevel, Score, LineCompleated } = Stat;
  const LineToLevel = LinePerLevel - LineCompleated;

  console.log(LineToLevel);
  return (
    <TetrisStatInfo>
      <div>
        <li className='Stattitle'>Lines to Level</li>
        <li>{LineToLevel}</li>
      </div>
      <div>
        <li className='Stattitle'>Score</li>
        <li>{Score}</li>
      </div>
    </TetrisStatInfo>
  );
};
export default React.memo(TetrisStat);
