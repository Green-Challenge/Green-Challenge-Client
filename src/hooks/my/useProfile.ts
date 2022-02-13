import {useEffect, useState} from 'react';
import {MyService} from 'service/my/my';
import {GetProfileRes} from 'service/my/type';

const useProfile = (userId: number) => {
  const initailState = {
    data: null as GetProfileRes | null,
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
    MyService.getProfile(userId)
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

export default useProfile;
