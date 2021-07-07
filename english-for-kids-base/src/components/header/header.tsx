import React from 'react';
import Switch from '../switch';
import Burger from '../burger';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner">
        <Burger className="header__burger" />
        <Switch className="header__switch" />
      </div>
    </header>
  );
};

export default Header;
