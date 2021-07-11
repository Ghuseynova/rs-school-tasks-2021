import React from 'react';
import { useSelector } from 'react-redux';
import WordCards from '../../components/word-cards';
import { getCategories } from '../../store/selectors';

import './category.scss';

const Category = ({ match }: { match: { params: { category: string } } }): JSX.Element => {
  const categories = useSelector(getCategories);
  const category = categories.find(item => item.category === match.params.category) || { words: [], category: '' };
  // console.log(match, category);
  return (
    <div className="category">
      <div className="category__container container">
        <h1 className="category__title">{category.category}</h1>
        <WordCards className="category__words" words={category.words} />
      </div>
    </div>
  );
};

export default Category;
