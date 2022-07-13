import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useForm } from 'react-hook-form';

import {
  StyledModalOverlay,
  StyledModalBackdrop,
  StyledLoader,
} from './styles';

const Backdrop = ({ onModalCloseHandler }) => (
  <StyledModalBackdrop onClick={onModalCloseHandler} />
);

const Overlay = ({ children, onConfirm, onCancel }) => {
  const { name, artist, duration, albumArt } = children;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    onConfirm(data);
  }

  return (
    <StyledModalOverlay>
      <img src={albumArt} alt='track album art' />
      <label>
        <span>Title</span>
      </label>
      <input
        type='text'
        required
        // {...register('title', { required: true, maxLength: 80 })}
        defaultValue={name}
        placeholder='Track Title'
      />
      {errors.title && errors.title.type === 'required' && (
        <span>This is required</span>
      )}
      <label>
        <span>Artist</span>
      </label>
      <input
        type='text'
        required
        // {...register('artist', { required: true, maxLength: 80 })}
      />
      <label>
        <span>Thumbnail</span>
      </label>
      <input
        type='text'
        // {...register('albumArt', { required: true })}
        defaultValue={albumArt}
      />
      <br />
      <button onClick={handleSubmit(onSubmit)}>Add</button>
      <button onClick={onCancel}>Discard</button>
    </StyledModalOverlay>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = ({ children, onModalClose, onConfirmHandler }) => {
  //close modal on pressing escape key
  if (children) {
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
  }

  return (
    <StyledLoader>
      <div></div>
      <div></div>
      <div></div>
    </StyledLoader>
  );
};

export default Modal;
