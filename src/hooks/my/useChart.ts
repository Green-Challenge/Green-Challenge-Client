import {AxiosError} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {GetChartRes} from 'service/challenges/type';
import {MyService} from 'service/my/my';

const useChart = (userId: number) => {
  const initialState = {
    data: null as GetChartRes | null,
    loading: true,
    error: null as AxiosError | null,
  };

  const [chart, setChart] = useState(initialState);

  const fetchData = useCallback(async () => {
    try {
      const data = await MyService.getChart(userId);
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
  }, [userId]);
  useEffect(() => {
    if (userId == null) {
      return;
    }
    fetchData();
  }, [userId, fetchData]);

  return {...chart};
};

export default useChart;
