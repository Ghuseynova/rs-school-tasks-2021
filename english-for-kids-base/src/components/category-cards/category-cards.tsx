import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCategories } from '../../store/actions';
import { getCategories } from '../../store/selectors';
import { Category } from '../../type';
import CategoryCard from '../category-card';

import './category-cards.scss';

const CategoryCards = ({ className }: { className: string }): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);

  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  return (
    <div className={`category-cards ${className}`}>
      {categories.map((category: Category) => {
        return (
          <CategoryCard
            key={category.id}
            category={category}
            className="category-cards__item"
          />
        );
      })}
    </div>
  );
};

export default CategoryCards;
