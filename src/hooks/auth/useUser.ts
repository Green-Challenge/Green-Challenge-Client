import {useAppSelector} from 'hooks/storeHooks';

export default function useUser() {
  return useAppSelector(state => state.auth.user);
}
