import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSwitchValue } from '../../store/actions';
import { getIsPlay } from '../../store/selectors';

import './switch.scss';

const Switch = ({ className }: { className: string }): JSX.Element => {
  const dispatch = useDispatch();
  const isPlay = useSelector(getIsPlay);

  function handleChange() {
    dispatch(setSwitchValue(!isPlay));
  }

  return (
    <div className={`switch ${className}`}>
      <label className="switch__label" htmlFor="switch">
        <input checked={isPlay} onChange={handleChange} className="switch__input" type="checkbox" id="switch" />
        <div className="switch__circle" />
        <div className={`switch__play ${isPlay ? 'switch__play--is-active' : ''}`}>Play</div>
        <div className={`switch__train ${isPlay ? '' : 'switch__train--is-active'}`}>Train</div>
      </label>
    </div>
  );
};

export default Switch;
