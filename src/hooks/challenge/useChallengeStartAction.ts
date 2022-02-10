import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {useAppDispatch} from '../storeHooks';
import {startChallenge, stopChallenge} from 'redux/slice/challenges/challenges';

export default function useChallengeStartAction() {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators({startChallenge, stopChallenge}, dispatch),
    [dispatch],
  );
}
