import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {useAppDispatch} from '../reduxWrapHook';
import {signUp} from 'redux/slice/auth/auth';

export default function useAuthActions() {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators({signUp}, dispatch), [dispatch]);
}
