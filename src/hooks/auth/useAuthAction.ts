import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {useAppDispatch} from '../storeHooks';
import {signUp, signIn} from 'redux/slice/auth/auth';

export default function useAuthActions() {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators({signUp, signIn}, dispatch),
    [dispatch],
  );
}
