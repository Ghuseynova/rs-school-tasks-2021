import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { SET_IS_MODAL_OPEN } from '../../store/types';
import Button from '../button';
import Input from '../input';

import './login-form.scss';

interface UserType {
  name: string;
  password: string;
}

const LoginForm = (): JSX.Element => {
  const [user, setUser] = useState<UserType>({ name: '', password: '' });
  const [isValid, setIsValid] = useState<boolean>(true);
  const dispatch = useDispatch();

  function onChange(e: React.SyntheticEvent) {
    console.log(e);
    const newValue = (e.target as HTMLInputElement).value;
    const { type } = e.target as HTMLInputElement;

    if (type === 'password') {
      setUser({ ...user, password: newValue });
    } else {
      setUser({ ...user, name: newValue });
    }

    console.log(user);
  }

  function onSubmit() {
    const { name, password } = user;
    if (name !== 'admin' || password !== 'admin') {
      setIsValid(false);
    }
  }

  function onCancel() {
    dispatch({ type: SET_IS_MODAL_OPEN, payload: false });
  }

  return (
    <form className="login-form">
      <h2 className="login-form__title">Login</h2>
      {!isValid && (
        <div className="login-form__help">
          <p>Please enter right name and password</p>
          <p> * username - admin; password - admin;</p>
        </div>
      )}

      <Input
        type="text"
        value={user.name}
        className="login-form__input"
        placeholder="Enter username"
        callback={onChange}
      />
      <Input
        type="password"
        value={user.password}
        className="login-form__input"
        placeholder="Enter password"
        callback={onChange}
      />

      <div className="login-form__buttons">
        <Button className="button button--simple button--theme-red login-form__btn" text="cancel" callback={onCancel} />
        <Button
          className="button button--simple button--theme-green  login-form__btn"
          text="login"
          callback={onSubmit}
        />
      </div>
    </form>
  );
};

export default LoginForm;
