import { HTMLElementProps } from '@modules/core/types/prop.types';
import classNames from 'classnames';
import React, { useEffect, useState, KeyboardEvent } from 'react';

import styles from './Rating.module.css';
import StarIcon from './star.svg';

type Props = {
  isEditable?: boolean;
  rating: number;
  onSetRating?: (rating: number) => void;
} & HTMLElementProps<HTMLDivElement>;

const Rating = ({
  rating,
  isEditable,
  onSetRating,
  className,
  ...restProps
}: Props) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rating]);

  const changeDisplay = (i: number) => {
    if (isEditable) {
      constructRating(i);
    }
  };

  const setRatingCreator = (i: number) => {
    return () => {
      if (isEditable && onSetRating) {
        onSetRating(i);
      }
    };
  };

  const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
    if (e.code === 'Space' && onSetRating) {
      onSetRating(i);
    }
  };

  const constructRating = (currentRating: number) => {
    const updatedRatingArray = ratingArray.map((r, i) => (
      <span
        key={i}
        className={classNames({
          [styles.filled]: i < currentRating,
          [styles.editable]: isEditable,
        })}
        onMouseEnter={() => changeDisplay(i + 1)}
        onMouseLeave={() => changeDisplay(rating)}
        onClick={setRatingCreator(i + 1)}>
        <StarIcon
          tabIndex={isEditable ? 0 : -1}
          onKeyDown={(e: KeyboardEvent<SVGElement>) =>
            isEditable && handleSpace(i + 1, e)
          }
        />
      </span>
    ));

    setRatingArray(updatedRatingArray);
  };

  return (
    <div className={classNames(styles.starsContainer, className)} {...restProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
