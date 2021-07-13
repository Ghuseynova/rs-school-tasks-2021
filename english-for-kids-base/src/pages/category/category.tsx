import React from 'react';
import { useSelector } from 'react-redux';
import Button from '../../components/button';
import WordCards from '../../components/word-cards';
import { getCategories } from '../../store/selectors';

import './category.scss';

const Category = ({ match }: { match: { params: { category: string } } }): JSX.Element => {
  const categories = useSelector(getCategories);
  const category = categories.find(item => item.category === match.params.category) || { words: [], category: '' };
  console.log(match, category);
  return (
    <div className="category">
      <div className="category__container container">
        <div className="category__top">
          <h1 className="category__title">{category.category}</h1>
          <div className="category__circles">
            <span className="category__circle category__circle--is-fill" />
            <span className="category__circle" />
          </div>
        </div>

        <WordCards className="category__words" words={category.words} />
        <div className="category__btn">
          <Button className="button button--start " text="start" callback={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default Category;
