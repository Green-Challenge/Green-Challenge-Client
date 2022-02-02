import React from 'react';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import {css} from 'styled-components/macro';

interface ChallengeCircleProps {
  progress: number;
}

// 프로그래스 바 + check 아이콘 추가된 완료 버전 원형 차트
function ChallengeCircle({progress}: ChallengeCircleProps) {
  return (
    <Wrapper>
      <div style={{width: 86, height: 86}}>
        <CircularProgressbarWithChildren
          counterClockwise
          value={progress}
          text={`${progress}%`}
          background={true}
          styles={{
            // Customize the root svg element
            root: {},
            // Customize the path, i.e. the "completed progress"
            path: {
              // 프로그래스 바 색상
              // stroke: `rgba(65, 152, 199, ${percentage / 100})`,
              stroke: '#7FEADD',
              // 프로그래스 바 끝처리 모양('butt' 또는 'round' 가능)
              strokeLinecap: 'round',
              // 트랜지션 애니메이션 커스터마이징하기
              transition: 'stroke-dashoffset 0.5s ease 0s',
              // path 회전시키기(rotate path)
              transform: 'rotate(1turn)',
              transformOrigin: 'center center',
            },
            // Customize the circle behind the path, i.e. the "total progress"
            trail: {
              //프로그래스바 지나가고 남는 부분 색상(Trail color)
              stroke: '#F2F2F2',
              // 끝부분 모양 처리
              strokeLinecap: 'round',
              // Rotate the trail
              transform: 'rotate(0.5turn)',
              transformOrigin: 'center center',
            },
            // 텍스트 커스터마이징
            text: {
              // Text color
              fill: 'transparent',
              // Text size
              fontSize: '16px',
            },
            // 배경 커스터마이징(`background` props = true일 때만 적용)
            background: {
              fill: '#F2F2F2',
            },
          }}>
          {/* 100%일 때만 체크박스 이미지 적용*/}
          {progress === 100 ? <Icon name="success" css={Success} /> : null}
          <Icon name="testTree" css={IconStyle} />
        </CircularProgressbarWithChildren>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  float: left;
`;

const Success = css`
  cursor: pointer;
  position: absolute;
  margin-left: 3.75rem;
  margin-bottom: 3.6rem;
`;
const IconStyle = css`
  cursor: pointer;
`;

export default ChallengeCircle;
