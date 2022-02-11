import color from 'color';
import React from 'react';
import styled from 'styled-components';

interface ModalProps {
  isOpen: boolean;
  clickCancelButton?: () => void;
  clickConfirmButton?: () => void;
}

function Modal({isOpen, clickCancelButton, clickConfirmButton}: ModalProps) {
  return (
    <Background isOpen={isOpen}>
      <Inner>
        <div>챌린지를 멈추고</div>
        <div>홈 화면으로 돌아갈까요?</div>
      </Inner>
    </Background>
  );
}

const Background = styled.div<{isOpen: boolean}>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Inner = styled.div`
  position: absolute;
  background-color: ${color.bgWhite};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Modal;
