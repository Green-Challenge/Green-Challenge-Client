import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {AddState} from '.';

function AddChallenge() {
  const location = useLocation<AddState>();
  const challengeId = location.state.challengeId;
  console.log(challengeId);

  return (
    <Layout>
      <Layout.Header>
        <Header isTitle isBig>
          챌린지 시작
        </Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <ImageWrapper>
            <img
              src="https://via.placeholder.com/200x300.jpg"
              alt="챌린지 나무"
            />
          </ImageWrapper>
          <Description>
            네이버스 이웃들과 함께
            <br /> 나뭇잎 100장을 모아
            <br />
            지구에게 향나무를 선물해 주세요!
          </Description>
        </Wrapper>
        <Button>확인</Button>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  margin: auto 24px;
`;
const ImageWrapper = styled.div`
  text-align: center;
`;
const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;
const Description = styled.p`
  text-align: center;
  margin-top: 20px;
  color: ${color.bodyFont01};
  font-size: 14px;
  font-weight: 400;
`;

export {AddChallenge};
