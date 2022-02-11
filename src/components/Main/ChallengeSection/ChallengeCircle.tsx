import React, {useEffect, useState} from 'react';
import {CircularProgressbarWithChildren} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {css} from 'styled-components/macro';
import Icon from 'components/Icon/Icon';
import styled from 'styled-components';
import {ChallengeService} from 'service/challenges/challenges';
import {treeImgNameByName} from 'utils/imageMap';

interface ChallengeCircleProps {
  treeId: number;
  isParticipating: boolean;
  percentage: number;
  isComplete: boolean;
}

function ChallengeCircle({
  treeId,
  isParticipating,
  percentage,
  isComplete,
}: ChallengeCircleProps) {
  const [treeName, setTreeName] = useState('t1');

  useEffect(() => {
    ChallengeService.getTreeName(treeId).then(res =>
      setTreeName(treeImgNameByName(res.treeName)),
    );
  }, [treeId]);
  return (
    <Wrapper>
      <div style={{width: 86, height: 86}}>
        <CircularProgressbarWithChildren
          counterClockwise
          value={isParticipating ? percentage : 0}
          text={`${treeName}`}
          background={true}
          styles={{
            root: {},
            path: {
              stroke: '#7FEADD',
              strokeLinecap: 'round',
              transition: 'stroke-dashoffset 0.5s ease 0s',
              transform: 'rotate(1turn)',
              transformOrigin: 'center center',
            },
            trail: {
              stroke: '#F2F2F2',
              strokeLinecap: 'round',
              transform: 'rotate(0.5turn)',
              transformOrigin: 'center center',
            },
            text: {
              fill: 'transparent',
              fontSize: '1rem',
            },
            background: {
              fill: '#F2F2F2',
            },
          }}>
          {isComplete ? <Icon name="success" css={Success} /> : null}
          <Img src={`/Icon/${treeName}.svg`} alt="tree" />
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

const Img = styled.img`
  width: 5.375rem;
  height: 5.375rem;
`;

// const ColorStyle = css`
//   color: 'transparent';
// `;

export default ChallengeCircle;
