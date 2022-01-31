import color from 'color';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';

interface TreeCardProps {
  challengeName: string;
  numberOfCompletions: number;
  treeId: number;
  numberOfLeaf: number;
}

function treeNameById(treeId: number) {
  const treeNames = ['향나무', '잣나무'];
  return treeNames[treeId];
}

function TreeCard({
  challengeName,
  numberOfCompletions,
  numberOfLeaf,
  treeId,
}: TreeCardProps) {
  const treeName = treeNameById(treeId);
  return (
    <CardDiv>
      <CompeletionsDiv>{numberOfCompletions}</CompeletionsDiv>
      <ChallengeNameSpan>{challengeName}</ChallengeNameSpan>
      <LeafCountDiv>
        <Leaf name="leaf" />
        <span>{numberOfLeaf}</span>
      </LeafCountDiv>
    </CardDiv>
  );
}

const CardDiv = styled.div`
  width: 9.375rem;
  height: 9.374rem;
  background-color: ${color.bgWhite};
  position: relative;
  border-radius: 0.75rem;
  box-shadow: 0.25rem 0.5rem 1.5rem rgba(173, 173, 173, 0.08);
  transition: all 0.2s;
  cursor: pointer;
  &:hover {
    box-shadow: 0.5rem 0.75rem 2rem rgba(50, 50, 50, 0.08);
  }
`;

const CompeletionsDiv = styled.div`
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${color.line01};
  color: ${color.bgWhite};
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  text-align: center;
  line-height: 1.5rem;
  font-weight: 500;
  font-size: 0.75rem;
`;

const TreeImgSvg = styled(Icon)``;

const ChallengeNameSpan = styled.span`
  color: ${color.bodyFont01};
  font-size: 0.875rem;
  position: absolute;
  font-weight: 500;
  bottom: -1.75rem;
`;

const LeafCountDiv = styled.div`
  color: #05d3c4;
  position: absolute;
  display: flex;
  height: 1.25rem;
  line-height: 1.2rem;
  span {
    margin-left: -10px;
    font-weight: 500;
    font-size: 0.875rem;
  }
  bottom: -1.625rem;
  right: 0;
`;

const Leaf = styled(Icon)`
  height: 1.25rem;
`;

export default TreeCard;
