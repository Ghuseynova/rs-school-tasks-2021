import React from 'react';

import './button.scss';

type ButtonProps = {
  className: string;
  text: string;
  callback: () => void;
};

const Button = ({ className, text, callback }: ButtonProps): JSX.Element => {
  return (
    <button
      className={`button ${className}`}
      type="button"
      onClick={() => {
        callback();
      }}
    >
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
