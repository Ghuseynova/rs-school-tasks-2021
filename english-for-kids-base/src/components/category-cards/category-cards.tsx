import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/actions';
import { getCategories, getIsPlay } from '../../store/selectors';
import { Category } from '../../type';
import CategoryCard from '../category-card';

import './category-cards.scss';

const CategoryCards = ({ className }: { className: string }): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const isPlay = useSelector(getIsPlay);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={`category-cards ${className}`}>
      {categories.map((category: Category) => {
        return <CategoryCard key={category.id} category={category} isPlay={isPlay} className="category-cards__item" />;
      })}
    </div>
  );
};

export default CategoryCards;
