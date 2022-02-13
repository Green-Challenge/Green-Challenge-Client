import color from 'color';
import styled from 'styled-components';

interface SectionProps {
  title: string;
  children: React.ReactNode;
  info?: number;
}

function Section({title, children, info}: SectionProps) {
  return (
    <Wrapper>
      <Title>
        {typeof info !== 'undefined' && <Info>{info}</Info>}
        {title}
      </Title>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: 2rem;
  padding: 0 1.5rem;
`;
const Title = styled.h3`
  color: ${color.bodyFont01};
  font-weight: 700;
  font-size: 1.125rem;
  margin-bottom: 0.75rem;
  position: relative;
  display: inline-block;
`;
const Info = styled.span`
  position: absolute;
  right: -0.375rem;
  transform: translateX(100%);
  font-size: 1.25rem;
  font-weight: 500;
  color: ${color.primary};
`;

export default Section;
