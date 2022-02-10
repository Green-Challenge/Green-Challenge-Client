import color from 'color';
import Icon from 'components/Icon/Icon';
import React from 'react';
import {useHistory} from 'react-router-dom';
import styled from 'styled-components';
import ChallengeShort from './ChallengeShort';

function InfoSection() {
  const history = useHistory();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    history.push({pathname: '/my/tree'});
  };

  return (
    <Wrapper>
      <TreeButton onClick={onClick}>
        <TreeIcon name="treeButton" />
      </TreeButton>
      <ChallengeShort amountOfTree={70} dayOfChallenge={70}></ChallengeShort>

      <Earth name="earthMain" />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  border-top: 0.0625rem solid ${color.line03};
  width: 100%;
  box-sizing: border-box;
  background-color: ${color.bgWhite};
  height: 19rem;
  position: relative;
`;

const TreeButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  border: none;
  text-align: center;
  background-color: ${color.bgWhite};
`;

const TreeIcon = styled(Icon)`
  width: 2.5rem;
`;

const Earth = styled(Icon)`
  margin-top: 73px;
`;

export {InfoSection};
