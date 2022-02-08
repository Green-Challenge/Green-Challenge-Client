import {useAppSelector} from '../storeHooks';

export default function useRegister() {
  return useAppSelector(state => state.auth.register);
}
