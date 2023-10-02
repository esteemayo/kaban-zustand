import './Modal.css';

const Modal = ({ children }) => {
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
