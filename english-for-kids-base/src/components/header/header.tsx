import React from 'react';
import Switch from '../switch';
import Burger from '../burger';
import Menu from '../menu';
import './header.scss';

const Header = (): JSX.Element => {
  return (
    <header className="header">
      <div className="header__inner">
        <Burger className="header__burger" />
        <Switch className="header__switch" />
        <Menu className="header__nav" />
      </div>
    </header>
  );
};

export default Header;
