import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getIsPlay } from '../../store/selectors';
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
  const isPlay = useSelector(getIsPlay);

  function handleClick() {
    if (!isPlay) {
      const audio = new Audio(`${process.env.PUBLIC_URL}/static/${audioSrc}`);
      audio.play();
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
      className={`word ${className} ${isFlipped ? 'word--is-flip' : ''} ${isPlay ? 'word--is-play' : ''}`}
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
