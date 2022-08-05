import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

import { useForm } from 'react-hook-form';

import { StyledModalOverlay, StyledModalBackdrop } from './styles';
import { Loader } from './';

const Backdrop = ({ onModalCloseHandler }) => (
  <StyledModalBackdrop onClick={onModalCloseHandler} />
);

const Overlay = ({ children, onConfirm, onCancel }) => {
  const { name, albumArt } = children;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    onConfirm(data);
    //{name: 'lorem', artist: 'ipsum', albumArt: 'dolor'}
  }

  return (
    <StyledModalOverlay>
      <img src={albumArt} alt='track album art' />
      <div>
        <label>
          <span>Title</span>
        </label>
        <input
          type='text'
          defaultValue={name}
          {...register('name', { required: true, maxLength: 80 })}
          placeholder='Track Title'
          style={{ outlineColor: errors.name && 'var(--color-invalid)' }}
        />
        {errors.name && <span>required</span>}
        <label>
          <span>Artist</span>
        </label>
        <input
          type='text'
          {...register('artist', { required: true, maxLength: 80 })}
          placeholder='Artist Name'
          style={{ outlineColor: errors.artist && 'var(--color-invalid)' }}
        />
        {errors.artist && <span>required</span>}
        <label>
          <span>Thumbnail</span>
        </label>
        <input
          type='text'
          defaultValue={albumArt}
          {...register('albumArt', { required: true, maxLength: 80 })}
          placeholder='Album art link'
          style={{ outlineColor: errors.albumArt && 'var(--color-invalid)' }}
        />
        {errors.albumArt && <span>required</span>}
      </div>
      <div>
        <button onClick={onCancel}>Discard</button>
        <button onClick={handleSubmit(onSubmit)}>Add</button>
      </div>
    </StyledModalOverlay>
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

  if (children) {
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

  return <Loader />;
};

export default Modal;
