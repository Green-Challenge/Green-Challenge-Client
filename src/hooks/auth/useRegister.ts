import {useAppSelector} from '../reduxWrapHook';

export default function useSignup() {
  return useAppSelector(state => state.auth.register);
}
