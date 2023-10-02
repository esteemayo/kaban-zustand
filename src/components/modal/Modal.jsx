import { useState } from 'react';

import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  const [showModal, setShowModal] = useState(isOpen);

  return (
    <div className='modal'>
      <div className='modal-wrapper active'>
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
