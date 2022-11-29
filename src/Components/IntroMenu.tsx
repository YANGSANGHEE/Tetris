import styled from '@/Theme/themeProvider';
import { calcPx } from '@/Hooks/CalcPx';
import TextStyle from './Textanimation';

const TitleSet = styled.div`
  ${(props) => props.theme.flexSet.flexcolumnCenter}
  & > div:nth-child(1) {
    background: url('/asset/Title.png') center/cover no-repeat;
    width: ${calcPx(883)};
    height: ${calcPx(320)};
    margin-bottom: ${calcPx(110)};
  }
  & > button {
    width: ${calcPx(214)};
    height: ${calcPx(57)};
    border: 1px solid ${(props) => props.theme.color.mint};
    color: ${(props) => props.theme.color.mint};
    ${(props) => props.theme.fontSize.font_27};
    font-family: Galmuri14;
    font-weight: bold;
    margin-bottom: ${calcPx(60)};
    cursor: pointer;
    transition: ease 0.3s;
    &:hover {
      background: ${(props) => props.theme.color.mint};
      color: #fff;
      box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.5);
    }
  }
  & > div:nth-child(3) {
    color: #fff;
    font-family: Galmuri14;
    & > p {
      ${(props) => props.theme.fontSize.font_18};
      letter-spacing: ${calcPx(5)};
      text-align: center;
    }
  }
`;

const IntroMenu = ({
  KeyEvent,
}: {
  KeyEvent: (e: React.MouseEvent<HTMLInputElement>) => void;
}) => {
  return (
    <TitleSet>
      <div></div>
      <button>Ranking</button>
      <div>
        <TextStyle />
        <p>Copyrightⓒ 2022 Sanghee. All right reserved</p>
      </div>
    </TitleSet>
  );
};

export default IntroMenu;
