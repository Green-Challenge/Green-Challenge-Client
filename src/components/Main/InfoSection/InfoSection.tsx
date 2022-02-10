import color from 'color';
import Icon from 'components/Icon/Icon';
import {useAppSelector} from 'hooks/storeHooks';
import React, {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import {ChallengeService} from 'service/challenges/challenges';
import styled from 'styled-components';
import ChallengeShort from './ChallengeShort';

function InfoSection() {
  const [short, setShort] = useState({
    amountOfTree: 0,
    dayOfChallenge: 0,
  });
  const history = useHistory();
  const onClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    history.push({pathname: '/my/tree'});
  };
  const {userId} = useAppSelector(state => state.auth.isAuth);

  useEffect(() => {
    ChallengeService.getShort(userId!).then(res => setShort(res));
  }, [userId]);

  return (
    <Wrapper>
      <TreeButton onClick={onClick}>
        <TreeIcon name="treeButton" />
      </TreeButton>
      <ChallengeShort
        amountOfTree={short.amountOfTree}
        dayOfChallenge={short.dayOfChallenge}></ChallengeShort>

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
  margin-top: -4.063rem; ;
`;

export {InfoSection};
