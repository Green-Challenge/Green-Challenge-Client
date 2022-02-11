import color from 'color';
import Section from 'components/common/Section';
import useGetTogetherTree from 'hooks/challenge/useGetTogetherTree';
import useTreeName from 'hooks/challenge/useTreeName';
import {css} from 'styled-components/macro';
import {treeImgNameByName} from 'utils/imageMap';

interface TogetherLeafSectionProps {
  challengeId: number;
  treeId: number;
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

function getDescriptioin(treeGrowth: number, treeName: string) {
  if (treeGrowth === 3) {
    return '';
  } else {
    return `나뭇잎 ${getNextGrowthLeaf(
      treeGrowth,
    )}장이 더 모이면 ${getGeneration(treeGrowth)} ${treeName}로 성장해요.`;
  }
}

function TogetherLeafSection({challengeId, treeId}: TogetherLeafSectionProps) {
  const {data} = useGetTogetherTree(challengeId);
  const {error, treeName} = useTreeName(treeId);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {data && (
        <Section title="함께 모은 나뭇잎" info={data.numberOfLeaf}>
          <div css={cardStyle}>
            <div css={treeAreaStyle}>
              <img
                src={`/Icon/SVG/${treeImgNameByName(treeName)}_${
                  data.treeGrowth
                }.svg`}
                alt="나무"
              />
            </div>
            <div css={descriptionAreaStyle}>
              {getDescriptioin(data.treeGrowth, treeName)}
            </div>
          </div>
          <br></br>
        </Section>
      )}
    </>
  );
}

const cardStyle = css`
  width: 100%;
  height: 15.5rem;
  background-color: ${color.bgWhite};
  border-radius: 0.625rem;
`;

const treeAreaStyle = css`
  height: 10.5rem;
  text-align: center;
  line-height: 15.75rem;
`;

const descriptionAreaStyle = css`
  height: 5rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: ${color.bodyFont01};
  padding: 0 4.1rem;
  word-break: keep-all;
  text-align: center;
`;

export default TogetherLeafSection;
