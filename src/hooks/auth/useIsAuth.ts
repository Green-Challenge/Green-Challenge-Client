import {useAppDispatch, useAppSelector} from 'hooks/storeHooks';
import {useHistory} from 'react-router-dom';
import {meAuth} from 'redux/slice/auth/auth';
import {AuthService} from 'service/auth/auth';

export function useIsAuthPush() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  AuthService.me()
    .then(() => dispatch(meAuth(true)))
    .catch(() => {
      dispatch(meAuth(false));
      history.push('/auth');
    });
}

export function useIsAuthMain() {
  const history = useHistory();
  const dispatch = useAppDispatch();
  AuthService.me()
    .then(() => {
      dispatch(meAuth(true));
      history.push('/');
    })
    .catch(() => {
      dispatch(meAuth(false));
    });
}

export function useIsAuthSelector() {
  return useAppSelector(state => state.auth.isAuth);
}
