import {useIsAuthPush} from 'hooks/auth/useIsAuth';
import useIsChallenging from 'hooks/challenge/useIsChallenging';

function Record() {
  useIsAuthPush();
  useIsChallenging();
  return <div>Record</div>;
}

export {Record};
