import React from 'react';
import Button from '../button';
import CarIcon from '../car';

import './garage-item.scss';

type GarageItemTypes = {
  className: string;
  name: string;
};

const GarageItem = ({ className, name }: GarageItemTypes): JSX.Element => {
  return (
    <div className={`garage-item ${className}`}>
      <div className="garage-item__top">
        <Button
          className=" button button--sm button--lightblue garage-item__btn"
          text="Select"
        />
        <Button
          className=" button button--sm button--lightblue garage-item__btn"
          text="Remove"
        />
        <span className="garage-item__name">{name}</span>
      </div>
      <div className="garage-item__bottom">
        <Button
          className=" button button--engine garage-item__engine garage-item__engine--start"
          text="A"
        />

        <Button
          className=" button button--engine button--disable garage-item__engine garage-item__engine--stop"
          text="B"
        />

        <CarIcon color="red" className="garage-item__car" />

        <svg
          className="garage-item__flag"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M18.926 5.584c-9.339 13.568-6.142-.26-14.037 6.357L6.684 19H4.665L1 4.59l1.85-.664c8.849-6.471 4.228 5.82 15.637 1.254.364-.147.655.09.439.404z" />
        </svg>
      </div>
    </div>
  );
};
export default GarageItem;
