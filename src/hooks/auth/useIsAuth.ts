import {useAppDispatch, useAppSelector} from 'hooks/storeHooks';
import {useHistory} from 'react-router-dom';
import {meAuth} from 'redux/slice/auth/auth';
import {AuthService} from 'service/auth/auth';

export function useIsAuthPush() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  AuthService.me()
    .then(data => dispatch(meAuth({userId: data.userId, isAuth: true})))
    .catch(() => {
      dispatch(meAuth({userId: null, isAuth: false}));
      history.push('/auth');
    });
}

export function useIsAuthMain() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  AuthService.me()
    .then(data => {
      dispatch(meAuth({userId: data.userId, isAuth: true}));
      history.push('/');
    })
    .catch(() => {
      dispatch(meAuth({userId: null, isAuth: false}));
    });
}

export function useIsAuthSelector() {
  return useAppSelector(state => state.auth.isAuth);
}
