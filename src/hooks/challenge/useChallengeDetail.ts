import {useAppDispatch, useAppSelector} from 'hooks/storeHooks';
import {useCallback, useEffect} from 'react';
import {fetchChallengeDetail} from 'redux/slice/challenges/challenges';

export default function useChallengeDetail(challengeId: string) {
  const challengeDetail = useAppSelector(
    state => state.challenges.challengeDetail[challengeId],
  );
  const dispatch = useAppDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchChallengeDetail(challengeId));
  }, [dispatch, challengeId]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...challengeDetail,
  };
}
