import React from 'react';
import { Word } from '../../type';
import WordCard from '../word-card/word-card';

import './word-cards.scss';

interface WordCardsType {
  className: string;
  words: Word[];
}

const WordCards = ({ className, words }: WordCardsType): JSX.Element => {
  // console.log(words);
  return (
    <div className={`words ${className}`}>
      {words.map(word => {
        return (
          <WordCard
            className="words__item"
            key={word.word}
            audioSrc={word.audioSrc}
            image={word.image}
            translation={word.translation}
            word={word.word}
          />
        );
      })}
    </div>
  );
};

export default WordCards;
