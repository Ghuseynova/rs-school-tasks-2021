import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsMenuOpen, setSelectedCategory } from '../../store/actions';
import { getSelectedCategory } from '../../store/selectors';

interface MenuItemTypes {
  to: string;
  text: string;
  itemClassName: string;
  linkClassName: string;
}

const MenuItem = ({ to, text, itemClassName, linkClassName }: MenuItemTypes): JSX.Element => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  function handleClick() {
    dispatch(setIsMenuOpen(false));
    dispatch(setSelectedCategory(text));
  }

  return (
    <li className={itemClassName}>
      <Link
        to={to}
        className={`${linkClassName} ${selectedCategory === text ? 'nav__link--is-active' : ''}`}
        onClick={handleClick}
      >
        {text}
      </Link>
    </li>
  );
};

export default MenuItem;
