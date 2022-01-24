import color from 'color';
import styled from 'styled-components';
import {ChallengeImage} from '../common';
import HashTag from './HashTag';

interface DetailCardProps {
  imageSrc: string;
  tags: string[];
  description: string;
  numberOfPersion: number;
}

function DetailCard({
  description,
  imageSrc,
  tags,
  numberOfPersion,
}: DetailCardProps) {
  return (
    <Wrapper>
      <ChallengeImage imageSrc={imageSrc} numberOfPersion={numberOfPersion} />
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
  padding: 16px 24px 28px;
  background-color: ${color.bgWhite};
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
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

export {DetailCard};
