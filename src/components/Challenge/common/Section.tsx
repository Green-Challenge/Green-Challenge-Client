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
        {info && <Info>{info}</Info>}
        {title}
      </Title>
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
  position: relative;
  display: inline-block;
`;
const Info = styled.span`
  position: absolute;
  right: -6px;
  transform: translateX(100%);
  font-size: 20px;
  font-weight: 500;
  color: ${color.primary};
`;

export {Section};
