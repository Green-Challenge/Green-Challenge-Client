import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import styled from 'styled-components';
import {css} from 'styled-components/macro';

//#오늘의 기록
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
          <div css={BoxStyle}>
            <Distance>
              <div css={Info}>이동 거리</div>
              <div css={InfoNumber}>00m</div>
            </Distance>
            <Carbon>
              <div css={Info}>탄소저감량</div>
              <div css={InfoNumber}>00kg</div>
            </Carbon>
          </div>
          <img
            src="/Icon/SVG/earth_Today.svg"
            alt="지구캐릭터"
            css={EarthStyle}
          />
        </Wrapper>
        <Button>확인</Button>
      </Main>
    </Layout>
  );
}

const Wrapper = styled.div`
  margin: auto 1.5rem;
  text-align: center;
`;
const Main = styled(Layout.Main)`
  flex-direction: column;
  justify-content: space-between;
`;

const BoxStyle = css`
  display: flex;
  width: 100%;
  height: 9.625rem;
  position: relative;
  bottom: -10.625rem;
  background-color: #000;
  border-radius: 0.75rem;
  align-items: center;
`;

const Distance = styled.div`
  text-align: center;
  width: 50%;
  border-right: 1px ${color.line01} solid;
  color: #fff;
`;

const Info = css`
  font-size: 14px;
  color: ${color.line03};
`;

const InfoNumber = css`
  font-size: 26px;
  font-weight: 500;
  color: ${color.bgSurface};
`;

const Carbon = styled.div`
  width: 50%;
  color: #fff;
`;

const EarthStyle = css`
  position: relative;
  bottom: 9.375rem;
`;

export {Record};
