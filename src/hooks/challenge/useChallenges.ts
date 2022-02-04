import {useAppDispatch, useAppSelector} from 'hooks/storeHooks';
import {useCallback, useEffect} from 'react';
import {fetchChallenges} from 'redux/slice/challenges/challenges';

export default function useChallenges(id: string) {
  const challenges = useAppSelector(state => state.challenges.challenges);
  const dispatch = useAppDispatch();
  const fetchData = useCallback(() => {
    dispatch(fetchChallenges(id));
  }, [dispatch, id]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    ...challenges,
  };
}
