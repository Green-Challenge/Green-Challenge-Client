import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useIsAuthPush, useIsAuthSelector} from 'hooks/auth/useIsAuth';
import useIsChallenging from 'hooks/challenge/useIsChallenging';
import {useCallback, useMemo} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {ChallengeService} from 'service/challenges/challenges';
import {StartChallengeReq} from 'service/challenges/type';
import styled from 'styled-components';
import {AddState} from '.';

function AddChallenge() {
  useIsAuthPush();
  useIsChallenging();
  const isAuth = useIsAuthSelector();
  const history = useHistory();
  const location = useLocation<AddState>();
  const challengeId = location.state.challengeId;
  const state: AddState = useMemo(() => ({challengeId}), [challengeId]);

  const onClick = useCallback(() => {
    if (isAuth.userId == null) {
      return;
    }
    const req: StartChallengeReq = {
      userId: Number(isAuth.userId),
      challengeId: challengeId,
    };
    ChallengeService.startChallenge(req)
      .then(() => {
        history.push({pathname: '/challenge/challenging', state});
      })
      .catch((error: any) => {
        console.log(error.response.data);
      });
  }, [history, state, challengeId, isAuth.userId]);

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
        <Button onClick={onClick}>확인</Button>
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

export {AddChallenge};
