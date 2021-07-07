import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCategories, getIsMenuOpen } from '../../store/selectors';
import Button from '../button';
import MenuItem from '../menu-item';
import { setIsMenuOpen } from '../../store/actions';

import './menu.scss';

interface MenuTypes {
  className: string;
}

const Menu = ({ className }: MenuTypes): JSX.Element => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement;
    if (ref.current && !ref.current.contains(target)) {
      console.log(target);
      dispatch(setIsMenuOpen(false));
    }
  };

  const categories = useSelector(getCategories);
  const isMenuOpen = useSelector(getIsMenuOpen);

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <nav ref={ref} className={`nav ${isMenuOpen ? 'nav--is-open' : ''} ${className}`}>
      <ul className="nav__list">
        <MenuItem category="Main page" itemClassName="nav__item" linkClassName="nav__link" />
        {categories.map(category => {
          return (
            <MenuItem
              key={category.category.split('').join('')}
              category={category.category}
              itemClassName="nav__item"
              linkClassName="nav__link"
            />
          );
        })}
      </ul>
      <Button className="button button--simple nav__btn" text="login" callback={() => {}} />
    </nav>
  );
};

export default Menu;
