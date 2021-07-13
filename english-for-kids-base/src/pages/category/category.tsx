import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../../components/button';
import WordCards from '../../components/word-cards';
import { setAudios, setGameStart, setPlayedAudio } from '../../store/actions';
import { getAudios, getCategories, getIsGameStarted, getIsPlay, getPlayedAudio } from '../../store/selectors';
import { getRandomAudio, playAudio } from '../../utils';

import './category.scss';

const Category = ({ match }: { match: { params: { category: string } } }): JSX.Element => {
  const dispatch = useDispatch();
  const categories = useSelector(getCategories);
  const isPlay = useSelector(getIsPlay);
  const isGameStarted = useSelector(getIsGameStarted);
  const playedAudio = useSelector(getPlayedAudio);
  const audios = useSelector(getAudios);
  const category = categories.find(item => item.category === match.params.category) || { words: [], category: '' };

  function handleStartBtn() {
    const randomAudio = getRandomAudio(audios);
    playAudio(randomAudio);
    dispatch(setGameStart(!isGameStarted));
    dispatch(setPlayedAudio(randomAudio));
  }

  function handleRepeatBtn() {
    playAudio(playedAudio);
  }

  useEffect(() => {
    const audios = category.words.map(word => word.audioSrc);
    dispatch(setAudios(audios));
  }, [dispatch, category.words]);

  return (
    <div className="category">
      <div className="category__container container">
        <div className="category__top">
          <h1 className="category__title">{category.category}</h1>

          {isPlay && (
            <div className="category__circles">
              <span className="category__circle category__circle--is-fill" />
              <span className="category__circle" />
            </div>
          )}
        </div>

        <WordCards className="category__words" words={category.words} />
        <div className="category__btn">
          {isPlay && (
            <Button
              className={`button ${isGameStarted ? 'button--repeat' : 'button--start'} `}
              text={`${isGameStarted ? '' : 'start'}`}
              callback={isGameStarted ? handleRepeatBtn : handleStartBtn}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
