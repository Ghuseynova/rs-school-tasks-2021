import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setAudios, setPlayedAudio } from '../../store/actions';
import { getAudios, getIsPlay, getPlayedAudio } from '../../store/selectors';
import { getRandomAudio, playAudio } from '../../utils';
import FlipElement from '../flip-element';

import './word-card.scss';

interface WordCardType {
  className: string;
  word: string;
  audioSrc: string;
  translation: string;
  image: string;
}

const WordCard = ({ word, audioSrc, translation, image, className }: WordCardType): JSX.Element => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isPlay = useSelector(getIsPlay);
  const audios = useSelector(getAudios);
  const playedAudio = useSelector(getPlayedAudio);

  function handleClick() {
    if (!isPlay) {
      playAudio(audioSrc);
    } else if (audioSrc === playedAudio) {
      const filteredAudios = audios.filter(audio => audio !== playedAudio);
      setIsCorrect(!isCorrect);
      playAudio('audio/right.mp3');

      window.setTimeout(() => {
        const randomAudio = getRandomAudio(filteredAudios);
        playAudio(randomAudio);
        dispatch(setPlayedAudio(randomAudio));
        dispatch(setAudios(filteredAudios));
      }, 500);
    } else {
      playAudio('audio/wrong.mp3');
    }
  }

  function handleFlipping(event: React.MouseEvent<HTMLDivElement, MouseEvent>): void {
    event.stopPropagation();

    if (!isPlay) {
      setIsFlipped(true);
    }
  }

  function handleMouseLive() {
    if (!isPlay) {
      setIsFlipped(false);
    }
  }

  return (
    <div
      className={`word ${className} ${isFlipped ? 'word--is-flip' : ''} ${isPlay ? 'word--is-play' : ''} ${
        isCorrect ? 'word--is-correct' : ''
      }`}
      onMouseLeave={handleMouseLive}
    >
      <div
        className="word__front"
        onClick={handleClick}
        onKeyDown={handleClick}
        onMouseLeave={handleMouseLive}
        role="button"
        tabIndex={0}
      >
        <div className="word__img">
          <img src={`${process.env.PUBLIC_URL}/static/${image}`} alt="word" className="word__img-file" />
        </div>
        <div className="word__bottom">
          <p className="word__text">{word}</p>
        </div>
      </div>
      <div className="word__back">
        <div className="word__img">
          <img src={`${process.env.PUBLIC_URL}/static/${image}`} alt="word" className="word__img-file" />
        </div>
        <div className="word__bottom">
          <p className="word__text">{translation}</p>
        </div>
      </div>
      <FlipElement className="word__turn" handleFlipping={handleFlipping} />
    </div>
  );
};

export default WordCard;
