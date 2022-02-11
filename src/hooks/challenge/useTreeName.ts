import {useEffect, useState} from 'react';
import {ChallengeService} from 'service/challenges/challenges';

const useTreeName = (treeId: number) => {
  const [treeName, setTreeName] = useState('향나무');
  const [error, setError] = useState('');

  useEffect(() => {
    ChallengeService.getTreeName(treeId)
      .then(res => setTreeName(res.treeName))
      .catch(err => setError(err.response.data));
  }, [treeId]);

  return {
    treeName,
    error,
  };
};

export default useTreeName;
