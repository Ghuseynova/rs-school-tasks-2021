import React from 'react';
import LoginForm from '../login-form';

import './modal.scss';

const Modal = (): JSX.Element => {
  return (
    <div className="modal">
      <div className="modal__overlay">
        <div className="modal__inner">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Modal;
