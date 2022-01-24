import color from 'color';
import {IntroduceCard, Section} from 'components/Challenge/common';
import {DetailCard} from 'components/Challenge/DetailCard';
import {Layout} from 'components/common';
import Button from 'components/common/Button';
import Header from 'components/common/Header';
import {useCallback} from 'react';
import {useHistory, useParams} from 'react-router-dom';
import styled from 'styled-components';

export interface AddState {
  challengeId: string;
}

function ChallengeDetail() {
  const history = useHistory();
  const params = useParams<AddState>();

  const onClick = useCallback(() => {
    history.push({pathname: '/challenge/add', state: params});
  }, [history, params]);
  return (
    <Layout>
      <Layout.Header>
        <Header isTitle isBig>
          뚜벅이 출퇴근
        </Header>
      </Layout.Header>
      <Main>
        <Wrapper>
          <DetailCard
            numberOfPersion={0}
            imageSrc="https://via.placeholder.com/312x320.jpg"
            description="내 몸도 지구도 함께 건강해지는 뚜벅이 출퇴근 챌린지! 네이버스 이웃들과 함께 1,000km를 달성해 지구에게 나무 한 그루를 심는 것과 같은 효과를 선물해 주세요.."
            tags={['환경지킴', '운동효과']}
          />
          <Section title="리워드 토큰">
            <IntroduceCard
              description="30,000N"
              imageSrc="https://via.placeholder.com/56x56.jpg"
            />
          </Section>
          <Section title="리워드 나무">
            <IntroduceCard
              description="향나무"
              imageSrc="https://via.placeholder.com/100x120.jpg"
            />
          </Section>
          <Section title="챌린지 소개">
            <IntroduceCard
              isSquare
              description="1,000km 이동 시 실제 나무 한 그루를 심는 것과 같은 효과를 가지고 있어요."
              imageSrc="https://via.placeholder.com/200x200.jpg"
            />
            <IntroduceCard
              isMarginTop
              isSquare
              description="1,000km 이동 시 실제 나무 한 그루를 심는 것과 같은 효과를 가지고 있어요."
              imageSrc="https://via.placeholder.com/200x200.jpg"
            />
            <IntroduceCard
              isMarginTop
              isSquare
              description="1,000km 이동 시 실제 나무 한 그루를 심는 것과 같은 효과를 가지고 있어요."
              imageSrc="https://via.placeholder.com/200x200.jpg"
            />
            <IntroduceCard
              isMarginTop
              isSquare
              description="1,000km 이동 시 실제 나무 한 그루를 심는 것과 같은 효과를 가지고 있어요."
              imageSrc="https://via.placeholder.com/200x200.jpg"
            />
          </Section>
          <Button onClick={onClick}>참여하기</Button>
        </Wrapper>
      </Main>
    </Layout>
  );
}

const Main = styled(Layout.Main)`
  background-color: ${color.bgSurface};
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Wrapper = styled.div`
  position: absolute;
  left: 0;
`;

export {ChallengeDetail};
