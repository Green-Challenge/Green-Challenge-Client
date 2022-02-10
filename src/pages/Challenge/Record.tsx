// import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import styled from 'styled-components';

//<오늘의 기록> 페이지
function Record() {
  useIsAuthPush();
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle isBig>
          오늘의 기록
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
          {/* <Description>
            이동거리
            <br />
            <br />
            탄소저감량
          </Description> */}
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
// const Description = styled.p`
//   text-align: center;
//   margin-top: 1.25rem;
//   color: ${color.bodyFont01};
//   font-size: 0.875rem;
//   font-weight: 400;
// `;

export {Record};
