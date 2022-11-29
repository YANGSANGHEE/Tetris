import styled from '@/Theme/themeProvider';
import { calcPx } from '@/Hooks/CalcPx';
import { keyframes } from 'styled-components';

const wave = keyframes`
  0%,40%,100%{
    transform: translateY(0);
  }
  20%{
    transform: translateY(-20px);
  }
`;
const TextSet = styled.div`
  display: flex;
  justify-content: space-between;
  & > span {
    ${(props) => props.theme.fontSize.font_27}
    color:#fff;
    font-family: Galmuri11;
    font-weight: bold;
    animation: ${wave} 1.5s infinite;
    animation-delay: calc(0.1s * var(--i));
    margin-bottom: ${calcPx(95)};
  }
`;

const TextArr: String[] = [
  'P',
  'r',
  'e',
  's',
  's',
  ' ',
  'T',
  'h',
  'e',
  ' ',
  'E',
  'n',
  't',
  'e',
  'r',
];

const TextStyle = () => {
  return (
    <TextSet>
      {TextArr.map((value, index) => {
        return (
          <span key={index} style={{ '--i': `${index + 1}` }}>
            {value}
          </span>
        );
      })}
    </TextSet>
  );
};

export default TextStyle;
