import { useCallback, useEffect, useState } from 'react';

import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  useEffect(() => {
    setShowModal(isOpen)
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className='modal'>
      <div className={showModal ? 'modal-wrapper active' : 'modal-wrapper'}>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;