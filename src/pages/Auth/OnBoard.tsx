import color from 'color';
import Description from 'components/Auth/OnBoard/Description';
import Headline from 'components/Auth/OnBoard/Headline';
import OnBoardImage from 'components/Auth/OnBoard/OnBoardImage';
import {Layout} from 'components/common';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

function OnBoard() {
  let history = useHistory();

  return (
    <Layout>
      <OnBoardImage />
      <Main>
        <Wrapper>
          <Headline />
          <Description />
        </Wrapper>
        <ButtonGroup>
          <Button
            color={color.bgWhite}
            onClick={() => {
              history.push('/auth/signin');
            }}>
            로그인
          </Button>
          <Button
            onClick={() => {
              history.push('/auth/signup');
            }}>
            회원가입
          </Button>
        </ButtonGroup>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 86px;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonGroup = styled.div`
  margin-left: 2.4rem;
`;

const Button = styled.button`
  width: calc(50% - 30px);
  height: 56px;
  background-color: ${props => props.color || color.primary};
  color: ${props => (props.color ? color.primary : color.bgWhite)};
  border: 1px solid ${color.primary};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  margin: 40px 6px;
  border-radius: 10px;
`;

export {OnBoard};
