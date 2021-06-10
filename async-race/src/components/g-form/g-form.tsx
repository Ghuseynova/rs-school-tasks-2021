import React from 'react';

import Button from '../button';
import Input from '../input';

import './g-form.scss';

const GForm = (): JSX.Element => {
  return (
    <form action="#" className="g-form">
      <div className="g-form__group">
        <Input type="text" className="g-form__input" />
        <Input type="color" className="form-control--color g-form__input" />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Create"
          callback={() => {}}
        />
      </div>
      <div className="g-form__group">
        <Input type="text" className="g-form__input" />
        <Input type="color" className="form-control--color g-form__input" />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Update"
          callback={() => {}}
        />
      </div>
      <div className="g-form__group">
        <Button
          className="button--md button--lightgreen g-form__btn"
          text="Race"
          callback={() => {}}
        />
        <Button
          className="button--md button--lightgreen g-form__btn"
          text="Reset"
          callback={() => {}}
        />
        <Button
          className="button--md button--lightblue g-form__btn"
          text="Generate Cars"
          callback={() => {}}
        />
      </div>
    </form>
  );
};

export default GForm;
