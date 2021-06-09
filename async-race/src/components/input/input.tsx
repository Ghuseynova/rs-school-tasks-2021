import React from 'react';

import './input.scss';

type InputProps = {
  className: string;
  type: string;
};

const Input = ({ type, className }: InputProps): JSX.Element => {
  return <input type={type} className={`form-control ${className}`} />;
};

export default Input;
