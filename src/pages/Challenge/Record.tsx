import {useIsAuthPush} from 'hooks/auth/useIsAuth';

function Record() {
  useIsAuthPush();
  return <div>Record - 오늘의 기록</div>;
}

export {Record};
