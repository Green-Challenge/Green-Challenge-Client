import {ChallengingCard} from 'components/Challenge/ChallegingCard';
import {Section} from 'components/Challenge/common';
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
        <Section title="내가 모은 나뭇잎">
          <div>임심</div>
        </Section>
      </Layout.ScrollMain>
    </Layout>
  );
}

export {Challenging};
