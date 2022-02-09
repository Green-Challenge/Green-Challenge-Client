import Section from 'components/common/Section';
import useGetTogetherTree from 'hooks/challenge/useGetTogetherTree';
import {IntroduceCard} from './common';

interface TogetherLeafSectionProps {
  challengeId: number;
}

type TreeGrowth = 1 | 2 | 3;

function getGeneration(treeGrowth: number) {
  const gen = {
    1: '청소년',
    2: '어른',
    3: 0,
  };

  return gen[treeGrowth as TreeGrowth];
}

function getNextGrowthLeaf(treeGrowth: number) {
  const leaf = {
    1: 30,
    2: 50,
    3: 0,
  };

  return leaf[treeGrowth as TreeGrowth];
}

function getDescriptioin(treeGrowth: number) {
  if (treeGrowth === 3) {
    return '';
  } else {
    return `나뭇잎 ${getNextGrowthLeaf(
      treeGrowth,
    )}장이 더 모이면 ${getGeneration(treeGrowth)}나무로 성장해요.`;
  }
}

function TogetherLeafSection({challengeId}: TogetherLeafSectionProps) {
  const {data} = useGetTogetherTree(challengeId);
  return (
    <>
      {data && (
        <Section title="함께 모은 나뭇잎" info={data.numberOfLeaf}>
          <IntroduceCard
            description={getDescriptioin(data.treeGrowth)}
            imageSrc="https://via.placeholder.com/200x168.jpg"
            isBigPadding
          />
        </Section>
      )}
    </>
  );
}

export default TogetherLeafSection;
