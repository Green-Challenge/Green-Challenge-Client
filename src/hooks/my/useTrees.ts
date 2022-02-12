import {useEffect, useState} from 'react';
import {MyService} from 'service/my/my';
import {GetTogehterTrees} from 'service/my/type';

const useTrees = (userId: number) => {
  const initailState = {
    data: null as GetTogehterTrees | null,
    loading: false,
    error: null,
  };

  const [state, setState] = useState(initailState);

  useEffect(() => {
    setState({
      data: null,
      loading: true,
      error: null,
    });
    MyService.getTogehterTrees(userId)
      .then(res => {
        setState({
          data: res,
          loading: false,
          error: null,
        });
      })
      .catch(error => {
        setState({
          data: null,
          loading: false,
          error,
        });
      });
  }, [userId]);

  return {...state};
};

export default useTrees;
