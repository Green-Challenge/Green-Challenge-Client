import {useAppSelector} from '../storeHooks';

export default function useSignup() {
  return useAppSelector(state => state.auth.register);
}
