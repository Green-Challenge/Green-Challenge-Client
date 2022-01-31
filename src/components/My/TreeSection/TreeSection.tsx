import styled from 'styled-components';
import TreeCard from './TreeCard';

export type TreeType = {
  challengeId: number;
  challengeName: string;
  numberOfCompletions: number;
  treeId: number;
  numberOfLeaf: number;
};

export interface TreeSectionProps {
  trees: TreeType[];
}

function TreeSection({trees}: TreeSectionProps) {
  return (
    <Section>
      {trees &&
        trees.map(tree => {
          const {
            challengeId,
            challengeName,
            numberOfCompletions,
            numberOfLeaf,
            treeId,
          } = tree;
          return (
            <TreeCard
              key={challengeId}
              challengeName={challengeName}
              numberOfCompletions={numberOfCompletions}
              numberOfLeaf={numberOfLeaf}
              treeId={treeId}
            />
          );
        })}
    </Section>
  );
}

const Section = styled.section`
  padding: 0 1.5rem 2.5rem;
  display: flex;
  flex-wrap: wrap;
  > div:nth-child(2n) {
    margin-left: 0.75rem;
  }
  > div:nth-child(n + 3) {
    margin-top: 3.375rem;
  }
`;

export {TreeSection};
