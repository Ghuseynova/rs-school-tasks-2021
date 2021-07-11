import React, { useEffect, useRef } from 'react';
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

  const categories = useSelector(getCategories);
  const isMenuOpen = useSelector(getIsMenuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (target.classList.contains('burger')) {
        event.stopPropagation();
      }

      if (ref.current && !ref.current.contains(target)) {
        dispatch(setIsMenuOpen(false));
      }
    };

    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return (
    <nav ref={ref} className={`nav ${isMenuOpen ? 'nav--is-open' : ''} ${className}`}>
      <ul className="nav__list">
        <MenuItem to="/" text="Main page" itemClassName="nav__item" linkClassName="nav__link" />
        {categories.length !== 0 &&
          categories.map(item => {
            const { category } = item;
            return (
              <MenuItem
                key={category}
                to={category.split('%').join('')}
                text={category}
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
