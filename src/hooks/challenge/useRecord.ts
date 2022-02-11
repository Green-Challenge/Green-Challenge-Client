import {useEffect, useState} from 'react';
import {ChallengeService} from 'service/challenges/challenges';
import {GetRecordRes} from 'service/challenges/type';

const useRecord = (userId: number, challengeId: number) => {
  const initailState = {
    data: null as GetRecordRes | null,
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
    ChallengeService.getRecord({challengeId, userId})
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
  }, [userId, challengeId]);

  return {...state};
};

export default useRecord;
