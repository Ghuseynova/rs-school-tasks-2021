import React from 'react';

import './input.scss';

type InputProps = {
  className: string;
  type: string;
  callback: (value: string) => void;
  value: string;
};

const Input = ({
  type,
  className,
  callback,
  value,
}: InputProps): JSX.Element => {
  return (
    <input
      type={type}
      value={value}
      className={`form-control ${className}`}
      onChange={e => {
        console.log(e.target.value);
        callback(e.target.value);
      }}
    />
  );
};

export default Input;
