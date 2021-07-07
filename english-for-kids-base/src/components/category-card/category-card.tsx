import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../type';

import './category-card.scss';

const CategoryCard = (props: {
  className: string;
  category: Category;
  isPlay: boolean;
}): JSX.Element => {
  const { className, category, isPlay } = props;
  return (
    <div
      className={`category-card ${className} ${
        isPlay ? 'category-card--theme-play' : ''
      }`}
    >
      <Link to={category.category} className="category-card__link" />
      <div className="category-card__img">
        <img
          src={`${process.env.PUBLIC_URL}/static/${category.image}`}
          alt="category"
          className="category-card__img-file"
        />
      </div>
      <h3 className="category-card__title">{category.category}</h3>
    </div>
  );
};

export default CategoryCard;
