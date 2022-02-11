import color from 'color';
import {ChallengingCard} from 'components/Challenge/ChallegingCard';
import ChallengeChart from 'components/Challenge/ChallengeChart';
import CollectionLeafs from 'components/Challenge/CollectionLeafs';
import TogetherLeafSection from 'components/Challenge/TogetherLeafSection';
import {Layout} from 'components/common';
import BackButton from 'components/common/BackButton';
import Header from 'components/common/Header';
import Section from 'components/common/Section';
import Icon from 'components/Icon/Icon';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useChallengeDetail from 'hooks/challenge/useChallengeDetail';
import useGetChallenging from 'hooks/challenge/useGetChallenging';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {getImagUri} from 'utils/imageMap';

function Challenging() {
  useIsAuthPush();
  // const history = useHistory();
  const {
    state: {challengeId},
  } = useLocation<{challengeId: number}>();
  const challenging = useGetChallenging(challengeId);
  const challenge = useChallengeDetail(challengeId);

  if (challenging.loading || challenge.loading) {
    return <div>로딩중</div>;
  }

  if (challenging.error || challenge.error) {
    return <div>에러</div>;
  }

  return (
    <>
      {challenging.data && challenge.data && (
        <>
          <Layout>
            <Layout.Header>
              <Header isTitle isBig headerLeftItems={<BackButton path="/" />}>
                {challenge.data.challengeName}
              </Header>
            </Layout.Header>
            <Layout.ScrollMain>
              <ChallengingCard
                challengeId={challengeId}
                currentDistance={challenging.data.current}
                imageSrc={getImagUri(challenge.data.challengeName)}
                numberOfPersion={challenge.data.numberOfChallengers}
                progress={
                  (challenging.data.current / challenging.data.goalDistance) *
                  100
                }
                target={challenging.data.goalDistance}
              />
              <Section
                title="내가 모은 나뭇잎"
                info={challenging.data.leafCount}>
                <CollectionLeafs numberOfLeafs={challenging.data.leafCount} />
              </Section>
              <TogetherLeafSection
                treeId={challenge.data.treeId}
                challengeId={challengeId}
              />
              <ChallengeChart challengeId={challengeId} />
              <QuestionWrapper>
                <Question name="question" />
                <QuestionSpan>챌린지 진행방식이 궁금해요</QuestionSpan>
              </QuestionWrapper>
            </Layout.ScrollMain>
          </Layout>
        </>
      )}
    </>
  );
}

const QuestionWrapper = styled.div`
  padding: 0 1.5rem;
  margin-top: 2.25rem;
  margin-bottom: 2.5625rem;
`;

const Question = styled(Icon)`
  width: 1rem;
  height: 1rem;
  margin-right: 0.375rem;
`;

const QuestionSpan = styled.span`
  color: ${color.bodyFont02};
  font-size: 0.875rem;
  font-weight: 400;
  text-decoration: underline;
`;

export {Challenging};
