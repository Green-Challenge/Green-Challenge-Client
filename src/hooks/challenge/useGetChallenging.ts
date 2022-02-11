import {AxiosError} from 'axios';
import {useIsAuthSelector} from 'hooks/auth/useIsAuth';
import {useCallback, useEffect, useState} from 'react';
import {ChallengeService} from 'service/challenges/challenges';

type ChallengingDetail = {
  current: number;
  goalDistance: number;
  leafCount: number;
};

const useGetChallenging = (challengeId: number) => {
  const initialState = {
    data: null as ChallengingDetail | null,
    loading: true,
    error: null as AxiosError | null,
  };

  const [challengingDetail, setChallengingDetail] = useState(initialState);

  const fetchData = useCallback(
    async (userId: number) => {
      try {
        const data = await ChallengeService.getChallenging({
          userId,
          challengeId,
        });
        setChallengingDetail({
          data,
          loading: false,
          error: null,
        });
      } catch (error: any) {
        setChallengingDetail({
          data: null,
          loading: false,
          error: error,
        });
      }
    },
    [challengeId],
  );
  const {userId} = useIsAuthSelector();
  useEffect(() => {
    if (userId == null) {
      return;
    }
    fetchData(userId);
  }, [userId, fetchData]);

  return {...challengingDetail};
};

export default useGetChallenging;
