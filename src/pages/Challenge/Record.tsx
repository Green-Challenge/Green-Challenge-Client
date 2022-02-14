import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useRecord from 'hooks/challenge/useRecord';
import {useHistory, useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {css} from 'styled-components/macro';

//#오늘의 기록
function Record() {
  useIsAuthPush();
  const history = useHistory();
  const {
    state: {userId, challengeId},
  } = useLocation<{userId: number; challengeId: number}>();

  const onClick = () => {
    history.push({pathname: '/'});
  };

  const {data, loading, error} = useRecord(userId, challengeId);

  if (loading) {
    return <div>로딩중</div>;
  }

  if (error) {
    return <div>에러</div>;
  }

  if (data) {
    console.log(data.reducedCarbon * (1 / 1000));
  }

  return (
    <>
      {data && (
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
                  <div css={InfoNumber}>{parseInt(data.distance) * 1000}m</div>
                </Distance>
                <Carbon>
                  <div css={Info}>탄소저감량</div>
                  <div css={InfoNumber}>
                    {(data.reducedCarbon * (1 / 1000)).toFixed(2)}kg
                  </div>
                </Carbon>
              </div>
              <img
                src="/Icon/SVG/earth_Today.svg"
                alt="지구캐릭터"
                css={EarthStyle}
              />
            </Wrapper>
            <Button onClick={onClick}>확인</Button>
          </Main>
        </Layout>
      )}
    </>
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
  background-color: ${color.bodyFont01};
  border-radius: 0.75rem;
  align-items: center;
`;

const Distance = styled.div`
  text-align: center;
  width: 50%;
  border-right: 0.063rem ${color.line01} solid;
`;

const Info = css`
  font-size: 0.875rem;
  color: ${color.line03};
`;

const InfoNumber = css`
  font-size: 1.625rem;
  font-weight: 500;
  color: ${color.bgSurface};
`;

const Carbon = styled.div`
  width: 50%;
`;

const EarthStyle = css`
  position: relative;
  bottom: 9.375rem;
`;

export {Record};
