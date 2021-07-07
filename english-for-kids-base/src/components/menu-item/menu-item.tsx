import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsMenuOpen, setSelectedCategory } from '../../store/actions';
import { getSelectedCategory } from '../../store/selectors';

interface MenuItemTypes {
  category: string;
  itemClassName: string;
  linkClassName: string;
}

const MenuItem = ({ category, itemClassName, linkClassName }: MenuItemTypes): JSX.Element => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(getSelectedCategory);

  function handleClick() {
    dispatch(setIsMenuOpen(false));
    dispatch(setSelectedCategory(category));
  }

  return (
    <li className={itemClassName}>
      <Link
        to={category}
        className={`${linkClassName} ${selectedCategory === category ? 'nav__link--is-active' : ''}`}
        onClick={handleClick}
      >
        {category}
      </Link>
    </li>
  );
};

export default MenuItem;
