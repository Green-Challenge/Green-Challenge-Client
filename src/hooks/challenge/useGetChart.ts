import {AxiosError} from 'axios';
import {useIsAuthSelector} from 'hooks/auth/useIsAuth';
import {useCallback, useEffect, useState} from 'react';
import {ChallengeService} from 'service/challenges/challenges';
import {GetChartRes} from 'service/challenges/type';

const useGetChart = (challengeId: number) => {
  const initialState = {
    data: null as GetChartRes | null,
    loading: true,
    error: null as AxiosError | null,
  };

  const [chart, setChart] = useState(initialState);

  const fetchData = useCallback(
    async (userId: number) => {
      try {
        const data = await ChallengeService.getChartData({
          userId,
          challengeId,
        });
        setChart({
          data,
          loading: false,
          error: null,
        });
      } catch (error: any) {
        setChart({
          data: null,
          loading: false,
          error: null,
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

  return {...chart};
};

export default useGetChart;
