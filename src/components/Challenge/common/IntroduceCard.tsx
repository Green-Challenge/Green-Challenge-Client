import color from 'color';
import styled, {css} from 'styled-components';

interface IntroduceCardProps {
  description: string;
  imageSrc: string;
  isSquare?: boolean;
}

function IntroduceCard({description, imageSrc, isSquare}: IntroduceCardProps) {
  return (
    <Wrapper isSquare={isSquare}>
      <img src={imageSrc} alt="info 이미지" />
      <DescriptionWrapper>{description}</DescriptionWrapper>
    </Wrapper>
  );
}

interface WrapperProps {
  isSquare?: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  ${props =>
    props.isSquare &&
    css`
      width: 312px;
      height: 312px;
    `}
  background-color: ${color.bgWhite};
  text-align: center;
  padding-top: 30px;
  border-radius: 10px;
`;

const DescriptionWrapper = styled.p`
  padding: 10px 14px 24px;
  color: ${color.bodyFont01};
  font-weight: 400;
  font-size: 14px;
`;

export default IntroduceCard;
