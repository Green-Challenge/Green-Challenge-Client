import {useIsAuthPush} from 'hooks/auth/useIsAuth';

function Record() {
  useIsAuthPush();
  return <div>Record</div>;
}

export {Record};
