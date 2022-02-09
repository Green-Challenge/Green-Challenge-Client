import {useAppSelector} from 'hooks/storeHooks';
import {useHistory} from 'react-router-dom';

const useIsChallenging = () => {
  const history = useHistory();
  const {isStart, challengeId} = useAppSelector(
    state => state.challenges.challenging,
  );

  if (isStart) {
    history.push({pathname: `/challenge/challenging`, state: {challengeId}});
  }
};

export default useIsChallenging;
