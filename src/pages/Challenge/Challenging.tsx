import {ChallengingCard} from 'components/Challenge/ChallegingCard';
import CollectionLeafs from 'components/Challenge/CollectionLeafs';
import {IntroduceCard, Section} from 'components/Challenge/common';
import {Layout} from 'components/common';
import Header from 'components/common/Header';

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
          <IntroduceCard
            description="나뭇잎 30장이 더 모이면 청소년 향나무로 성장해요"
            imageSrc="https://via.placeholder.com/200x168.jpg"
            isBigPadding
          />
        </Section>
      </Layout.ScrollMain>
    </Layout>
  );
}

export {Challenging};
