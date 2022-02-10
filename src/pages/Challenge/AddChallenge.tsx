import color from 'color';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useIsAuthPush, useIsAuthSelector} from 'hooks/auth/useIsAuth';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {ChallengeService} from 'service/challenges/challenges';
import {StartChallengeReq} from 'service/challenges/type';
import styled from 'styled-components';
import {treeImgNameByName} from 'utils/imageMap';

function AddChallenge() {
  useIsAuthPush();
  const isAuth = useIsAuthSelector();
  const history = useHistory();
  const location = useLocation<{challengeId: number; treeId: number}>();
  const {challengeId, treeId} = location.state;
  const state = useMemo(() => ({challengeId}), [challengeId]);
  const [treeName, setTreeName] = useState('향나무');

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

  useEffect(() => {
    ChallengeService.getTreeName(treeId)
      .then(res => setTreeName(res.treeName))
      .catch(error => console.log(error));
  }, [treeId]);

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
              src={`/Icon/SVG/challenge_start_${treeImgNameByName(
                treeName,
              )}.svg`}
              alt="챌린지 나무"
            />
          </ImageWrapper>
          <Description>
            네이버스 이웃들과 함께
            <br /> 나뭇잎 100장을 모아
            <br />
            지구에게 {treeName}를 선물해 주세요!
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
