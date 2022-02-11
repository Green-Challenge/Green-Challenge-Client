import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import styled from 'styled-components';

function ChallengeSuccess() {
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle isBig>
          챌린지 성공!
        </Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <ImageWrapper>
            <img src="/Icon/SVG/Success_tH.svg" alt="성공 향나무" />
          </ImageWrapper>
          <Description>
            뚜벅이 출퇴근 챌린지에 성공해
            <br /> 향나무 한 그루를 지구에게 선물했어요.
            <br /> 나뭇잎 00장을 모은 00님에게
            <br /> 네이토큰 00N을 적립해드려요.
          </Description>
        </Wrapper>
        <Button>확인</Button>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
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
  margin-top: 1.25rem;
  color: ${color.bodyFont01};
  font-size: 0.875rem;
  font-weight: 400;
`;
export default ChallengeSuccess;
