import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '../button';
import { PAGE_CHANGED } from '../../store/types';
import { garagePageName, winnerPageName } from '../../constants';

import './header.scss';

const Header = (): JSX.Element => {
  const dispatch = useDispatch();

  function handleSwitchBtn(currentPage: string): void {
    dispatch({ type: PAGE_CHANGED, page: currentPage });
  }

  return (
    <header className="header">
      <div className="header__inner">
        <Button
          className="button--yellow header__button"
          text="TO GARAGE"
          callback={() => {
            handleSwitchBtn(garagePageName);
          }}
        />
        <Button
          className="button--yellow header__button"
          text="TO WINNERS"
          callback={() => {
            handleSwitchBtn(winnerPageName);
          }}
        />
      </div>
    </header>
  );
};

export default Header;
