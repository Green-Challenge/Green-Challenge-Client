import {AxiosError} from 'axios';
import {useCallback, useEffect, useState} from 'react';
import {ChallengeService} from 'service/challenges/challenges';

type TogetherTree = {
  treeId: number;
  treeGrowth: number;
  numberOfLeaf: number;
};

const useGetTogetherTree = (challengeId: number) => {
  const initialState = {
    data: null as TogetherTree | null,
    loading: true,
    error: null as AxiosError | null,
  };

  const [togetherTree, setTogetherTree] = useState(initialState);

  const fetchData = useCallback(async () => {
    try {
      const data = await ChallengeService.getTreeGrowthByChallengeId(
        challengeId,
      );
      setTogetherTree({
        data,
        loading: false,
        error: null,
      });
    } catch (error: any) {
      setTogetherTree({
        data: null,
        loading: false,
        error: null,
      });
    }
  }, [challengeId]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {...togetherTree};
};

export default useGetTogetherTree;
