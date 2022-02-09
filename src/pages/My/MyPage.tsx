import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useIsChallenging from 'hooks/challenge/useIsChallenging';

function MyPage() {
  useIsAuthPush();
  useIsChallenging();
  return <div>MyPage</div>;
}

export {MyPage};
