import color from 'color';
import styled from 'styled-components';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

function Section({title, children}: SectionProps) {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 32px;
  padding: 0 24px;
`;
const Title = styled.h3`
  color: ${color.bodyFont01};
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 12px;
`;

export {Section};
