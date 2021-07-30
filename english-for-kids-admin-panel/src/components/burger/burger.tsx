import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsMenuOpen } from '../../store/actions';
import { getIsMenuOpen } from '../../store/selectors';

import './burger.scss';

const Burger = ({ className }: { className: string }): JSX.Element => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(getIsMenuOpen);

  function handleClick() {
    dispatch(setIsMenuOpen(!isMenuOpen));
  }

  return (
    <button
      className={`burger ${isMenuOpen ? 'burger--is-open' : ''} ${className}`}
      onClick={handleClick}
      aria-haspopup="true"
      type="button"
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" className="burger__icon">
        <path d="M19 17h-14c-1.103 0-2 0.897-2 2s0.897 2 2 2h14c1.103 0 2-0.897 2-2s-0.897-2-2-2z" />
        <path d="M19 10h-14c-1.103 0-2 0.897-2 2s0.897 2 2 2h14c1.103 0 2-0.897 2-2s-0.897-2-2-2z" />
        <path d="M19 3h-14c-1.103 0-2 0.897-2 2s0.897 2 2 2h14c1.103 0 2-0.897 2-2s-0.897-2-2-2z" />
      </svg>
    </button>
  );
};

export default Burger;
