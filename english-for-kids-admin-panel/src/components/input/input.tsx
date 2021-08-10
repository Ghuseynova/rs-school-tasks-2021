import React from 'react';

import './input.scss';

interface InputProps {
  className: string;
  type: string;
  callback: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder: string;
}

const Input = ({ type, className, callback, value, placeholder }: InputProps): JSX.Element => {
  console.log(value);

  return (
    <input
      type={type}
      value={value}
      className={`form-control ${className}`}
      onChange={callback}
      placeholder={placeholder}
    />
  );
};

export default Input;
