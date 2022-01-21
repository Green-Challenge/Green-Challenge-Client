import color from 'color';
import DetailCard from 'components/Challenge/DetailCard';
import {Layout} from 'components/common';
import Header1 from 'components/common/Header1';
import styled from 'styled-components';

function ChallengeDetail() {
  return (
    <Layout>
      <Layout.Header>
        <Header1 isTitle isBig title="뚜벅이 출퇴근" />
      </Layout.Header>
      <Main>
        <DetailCard
          imageSrc="https://via.placeholder.com/312x320.jpg"
          description="내 몸도 지구도 함께 건강해지는 뚜벅이 출퇴근 챌린지! 네이버스 이웃들과 함께 1,000km를 달성해 지구에게 나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.."
          tags={['환경지킴', '운동효과']}
        />
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  background-color: ${color.bgSurface};
`;

export {ChallengeDetail};
