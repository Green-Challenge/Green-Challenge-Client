import color from 'color';
import {ChallengingCard} from 'components/Challenge/ChallegingCard';
import CollectionLeafs from 'components/Challenge/CollectionLeafs';
import {Chart, IntroduceCard} from 'components/Challenge/common';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Section from 'components/common/Section';
import Icon from 'components/Icon/Icon';
import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useChallengeDetail from 'hooks/challenge/useChallengeDetail';
import useGetChallenging from 'hooks/challenge/useGetChallenging';
import {useLocation} from 'react-router-dom';
import styled from 'styled-components';
import {data as chartData} from './mock/data';

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
        <Layout>
          <Layout.Header>
            <Header isTitle isBig>
              뚜벅이 출퇴근
            </Header>
          </Layout.Header>
          <Layout.ScrollMain>
            <ChallengingCard
              currentDistance={challenging.data.current}
              imageSrc="https://via.placeholder.com/312x320.jpg"
              numberOfPersion={challenge.data.numberOfChallengers}
              progress={
                (challenging.data.current / challenging.data.goalDistance) * 100
              }
              target={challenging.data.goalDistance}
            />
            <Section title="내가 모은 나뭇잎" info={2}>
              <CollectionLeafs numberOfLeafs={2} />
            </Section>
            <Section title="함께 모은 나뭇잎" info={20}>
              <IntroduceCard
                description="나뭇잎 30장이 더 모이면 청소년 향나무로 성장해요"
                imageSrc="https://via.placeholder.com/200x168.jpg"
                isBigPadding
              />
            </Section>
            <Section title="나의 탄소 저감량">
              <Chart data={chartData} />
            </Section>
            <QuestionWrapper>
              <Question name="question" />
              <QuestionSpan>채린지 진행방식이 궁금해요</QuestionSpan>
            </QuestionWrapper>
          </Layout.ScrollMain>
        </Layout>
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
