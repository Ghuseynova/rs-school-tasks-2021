import React from 'react';
import Button from '../button';

import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner">
        <Button className="button--yellow header__button" text="TO GARAGE" />
        <Button className="button--yellow header__button" text="TO WINNERS" />
      </div>
    </header>
  );
};

export default Header;
