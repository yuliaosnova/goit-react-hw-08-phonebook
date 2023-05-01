import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useDispatch } from 'react-redux';
import { setShowModal } from 'redux/showModalSlice';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // console.log("Mounting phase: same when componentDidMount runs");
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      //   console.log("Unmounting phase: same when componentWillUnmount runs");
      window.removeEventListener('keydown', handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      dispatch(setShowModal());
    }
  };

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      dispatch(setShowModal());
    }
  };

  return createPortal(
    <div className={css.Overlay} onClick={handleBackdropClick}>
      <div className={css.Modal}>{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;
