import color from 'color';
import {ChallengingCard} from 'components/Challenge/ChallegingCard';
import CollectionLeafs from 'components/Challenge/CollectionLeafs';
import {Chart, IntroduceCard, Section} from 'components/Challenge/common';
import {Layout} from 'components/common';
import Header from 'components/common/Header';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import {data} from './mock/data';

function Challenging() {
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle isBig>
          뚜벅이 출퇴근
        </Header>
      </Layout.Header>
      <Layout.ScrollMain>
        <ChallengingCard
          currentDistance="6km"
          imageSrc="https://via.placeholder.com/312x320.jpg"
          numberOfPersion={0}
          progress={60}
          target="10km"
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
          <Chart data={data} />
        </Section>
        <QuestionWrapper>
          <Question name="question" />
          <QuestionSpan>채린지 진행방식이 궁금해요</QuestionSpan>
        </QuestionWrapper>
      </Layout.ScrollMain>
    </Layout>
  );
}

const QuestionWrapper = styled.div`
  padding: 0 24px;
  margin-top: 36px;
  margin-bottom: 41px;
`;

const Question = styled(Icon)`
  width: 16px;
  height: 16px;
  margin-right: 6px;
`;

const QuestionSpan = styled.span`
  color: ${color.bodyFont02};
  font-size: 14px;
  font-weight: 400;
  text-decoration: underline;
`;

export {Challenging};
