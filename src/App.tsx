import '@/App.css';
import Layout from './Components/Layout';
import styled from '@/Theme/themeProvider';

const Wrapbg = styled.div`
  width: 100vw;
  height: 100vh;
  background: url('/asset/bg.png') no-repeat center/cover;
  ${(props) => props.theme.flexSet.flexCenter}
`;

const App = () => {
  return (
    <Wrapbg>
      <Layout />
    </Wrapbg>
  );
};

export default App;
