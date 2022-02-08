import color from 'color';
import Description from 'components/Auth/OnBoard/Description';
import Headline from 'components/Auth/OnBoard/Headline';
import OnBoardImage from 'components/Auth/OnBoard/OnBoardImage';
import {Layout} from 'components/common';
import styled from 'styled-components';
import Button from 'components/common/Button';
import {useIsAuthMain} from 'hooks/auth/useIsAuth';
import {useHistory} from 'react-router-dom';

function OnBoard() {
  useIsAuthMain();
  const history = useHistory();

  return (
    <Layout>
      <OnBoardImage />
      <Main>
        <Wrapper>
          <Headline />
          <Description />
        </Wrapper>
        <BtnGroup>
          <Btn
            color={color.bgWhite}
            onClick={() => {
              history.push('/auth/signin');
            }}>
            로그인
          </Btn>
          <Btn
            onClick={() => {
              history.push('/auth/signup');
            }}>
            회원가입
          </Btn>
        </BtnGroup>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  height: 5.375rem;
`;

const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

const BtnGroup = styled.div`
  margin-left: 2.4rem;
`;

const Btn = styled(Button)`
  width: calc(50% - 1.875rem);
  background-color: ${props => props.color || color.primary};
  color: ${props => (props.color ? color.primary : color.bgWhite)};
  border: 0.063rem solid ${color.primary};
  margin: 2.5rem 0.375rem;
`;

export {OnBoard};
