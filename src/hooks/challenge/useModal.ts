import {useAppDispatch} from 'hooks/storeHooks';
import {useMemo} from 'react';
import {bindActionCreators} from 'redux';
import {closeModal, openModal} from 'redux/slice/challenges/challenges';

const useModal = () => {
  const dispatch = useAppDispatch();
  return useMemo(
    () => bindActionCreators({closeModal, openModal}, dispatch),
    [dispatch],
  );
};

export default useModal;
