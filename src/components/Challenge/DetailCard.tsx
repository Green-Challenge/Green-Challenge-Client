import color from 'color';
import styled from 'styled-components';
import HashTag from './HashTag';

interface DetailCardProps {
  imageSrc: string;
  tags: string[];
  description: string;
}

function DetailCard({description, imageSrc, tags}: DetailCardProps) {
  return (
    <Wrapper>
      <ImageWrapper>
        <img src={imageSrc} alt="챌린지 이미지" />
      </ImageWrapper>
      <DescriptionWrapper>
        <TagsWrapper>
          {tags.map(tag => (
            <HashTag key={tag}>{tag}</HashTag>
          ))}
        </TagsWrapper>
        <Description>{description}</Description>
      </DescriptionWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  padding: 16px 24px 28px;
  background-color: ${color.bgWhite};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
`;
const ImageWrapper = styled.div`
  border-radius: 10px;
  overflow: hidden;
  img {
    display: block;
  }
`;
const DescriptionWrapper = styled.div``;
const TagsWrapper = styled.div`
  ${HashTag} + ${HashTag} {
    margin-left: 10px;
  }
  margin: 26px 0 14px;
`;
const Description = styled.div`
  font-size: 14px;
  color: ${color.bodyFont01};
  font-weight: 400;
`;

export default DetailCard;
