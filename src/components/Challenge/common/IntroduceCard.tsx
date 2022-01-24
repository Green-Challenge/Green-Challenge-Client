import color from 'color';
import styled, {css} from 'styled-components';

interface IntroduceCardProps {
  description: string;
  imageSrc: string;
  isSquare?: boolean;
  isBigPadding?: boolean;
  isMarginTop?: boolean;
}

function IntroduceCard({
  description,
  imageSrc,
  isSquare,
  isBigPadding,
  isMarginTop,
}: IntroduceCardProps) {
  return (
    <Wrapper isSquare={isSquare} isMarginTop={isMarginTop}>
      <img src={imageSrc} alt="info 이미지" />
      <DescriptionWrapper isBigPadding={isBigPadding}>
        {description}
      </DescriptionWrapper>
    </Wrapper>
  );
}

interface WrapperProps {
  isSquare?: boolean;
  isMarginTop?: boolean;
}
const Wrapper = styled.div<WrapperProps>`
  ${props =>
    props.isSquare &&
    css`
      width: 312px;
      height: 282px;
    `}
  background-color: ${color.bgWhite};
  text-align: center;
  padding-top: 30px;
  border-radius: 10px;
  ${props =>
    props.isMarginTop &&
    css`
      margin-top: 20px;
    `}
`;

interface DescriptionWrapperProps {
  isBigPadding?: boolean;
}
const DescriptionWrapper = styled.p<DescriptionWrapperProps>`
  padding: 10px 14px ${props => (props.isBigPadding ? '32px' : '24px')};
  color: ${color.bodyFont01};
  font-weight: 400;
  font-size: 14px;
`;

export default IntroduceCard;
