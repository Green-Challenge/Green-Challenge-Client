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
      width: 19.5rem;
      height: 17.625rem;
    `}
  background-color: ${color.bgWhite};
  box-shadow: 0.25rem 0.5rem 1.5rem rgba(173, 173, 173, 0.12);
  text-align: center;
  padding-top: 1.875rem;
  border-radius: 0.625rem;
  ${props =>
    props.isMarginTop &&
    css`
      margin-top: 1.25rem;
    `}
`;

interface DescriptionWrapperProps {
  isBigPadding?: boolean;
}
const DescriptionWrapper = styled.p<DescriptionWrapperProps>`
  padding: 0.625rem 2.8125rem
    ${props => (props.isBigPadding ? '2rem' : '1.5rem')};
  color: ${color.bodyFont01};
  font-weight: 400;
  font-size: 0.875rem;
`;

export {IntroduceCard};
