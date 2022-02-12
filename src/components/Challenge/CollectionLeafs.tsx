import color from 'color';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';

interface CollectionLeafsProps {
  numberOfLeafs: number;
}
function CollectionLeafs({numberOfLeafs}: CollectionLeafsProps) {
  return (
    <Wrapper>
      {Array.from({length: 8}).map((_, index) => {
        if (index + 1 <= numberOfLeafs) {
          return (
            <LeafContainer key={index}>
              <Leaf name="leaf" />
            </LeafContainer>
          );
        } else {
          return (
            <LeafContainer key={index}>
              <Leaf key={index} name="leafGray" />
            </LeafContainer>
          );
        }
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: ${color.bgWhite};
  border-radius: 0.625rem;
  height: 8.5rem;
  padding: 1.125rem 2.188rem;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
`;

const Leaf = styled(Icon)`
  width: 2.75rem;
  height: 2.75rem;
`;
const LeafContainer = styled.div`
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default CollectionLeafs;
