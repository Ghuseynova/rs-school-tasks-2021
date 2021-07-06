import React from 'react';
import Burger from '../burger';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner">
        <Burger className="header__burger" />
      </div>
    </header>
  );
};

export default Header;
