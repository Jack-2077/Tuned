import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
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
  height: 70%;
  transform: translate(-50%, -50%);
  color: red;
  background-color: var(--dark-grey);
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 10;
  animation: ${modalAnimation} 300ms ease-out forwards;

  img {
    display: block;
    margin: auto;
    width: 50%;
    height: 40%;
  }
  label {
    display: block;
    margin: 0px 0px 5px;
  }
  label > span {
    display: inline-block;
    margin-top: 10px;
    color: var(--white);
  }
  input {
    background-color: var(--black);
    margin-top: 6px;
  }
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

const Overlay = ({ children, onConfirm, onCancel }) => {
  const { name, artist, duration, albumArt } = children;
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    onConfirm(data);
  }

  return (
    <ModalOverlay>
      <img src={albumArt} alt='track album art' />
      <label>
        <span>Title</span>
      </label>
      <input
        type='text'
        {...register('name', { required: true, maxLength: 80 })}
        defaultValue={name}
        placeholder='Track Title'
      />

      <label>
        <span>Artist</span>
      </label>
      <input
        type='text'
        {...register('artist', { required: true, maxLength: 80 })}
        required
      />

      <label>
        <span>Thumbnail</span>
      </label>
      <input
        type='text'
        {...register('albumArt', { required: true })}
        defaultValue={albumArt}
        required
      />
      <button onClick={onCancel}>Discard</button>
      <button onClick={handleSubmit(onSubmit)}>Add</button>
    </ModalOverlay>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onModalClose, onConfirmHandler }) => {
  //close modal on pressing escape key
  useEffect(() => {
    const close = (e) => {
      if (e.key === 'Escape') {
        onModalClose();
      }
    };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);
  return (
    <>
      {createPortal(
        <Backdrop onModalCloseHandler={onModalClose} />,
        portalElement
      )}
      {createPortal(
        <Overlay onConfirm={onConfirmHandler} onCancel={onModalClose}>
          {children}
        </Overlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
