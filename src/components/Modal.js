import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styled, { keyframes } from 'styled-components/macro';

const modalAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const ModalOverlay = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 40%;
  height: 40%;
  transform: translate(-50%, -50%);
  color: red;
  background-color: aliceblue;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  animation: ${modalAnimation} 300ms ease-out forwards;
`;
const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 10;
`;

const Backdrop = ({ onModalCloseHandler }) => (
  <ModalBackdrop onClick={onModalCloseHandler} />
);

const Overlay = ({ children }) => {
  return <ModalOverlay>{children}</ModalOverlay>;
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onModalClose }) => {
  return (
    <>
      {createPortal(
        <Backdrop onModalCloseHandler={onModalClose} />,
        portalElement
      )}
      {createPortal(<Overlay>{children}</Overlay>, portalElement)}
    </>
  );
};

export default Modal;
