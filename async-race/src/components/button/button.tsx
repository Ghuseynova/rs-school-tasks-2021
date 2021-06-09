import React from 'react';

import './button.scss';

type ButtonProps = {
  className: string;
  text: string;
};

const Button = ({ className, text }: ButtonProps): JSX.Element => {
  return (
    <button className={`button ${className}`} type="button">
      <span className="button__text">{text}</span>
    </button>
  );
};

export default Button;
