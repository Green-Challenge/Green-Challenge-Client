import {useIsAuthPush} from 'hooks/auth/useIsAuth';

function MyPage() {
  useIsAuthPush();
  return <div>MyPage</div>;
}

export {MyPage};
