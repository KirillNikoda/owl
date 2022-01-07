import classNames from 'classnames';
import React, {
  DetailedHTMLProps,
  HTMLAttributes,
  useEffect,
  useState,
} from 'react';

import styles from './Rating.module.css';
import StarIcon from './star.svg';

type Props = {
  isEditable?: boolean;
  rating: number;
  onSetRating?: (rating: number) => void;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Rating = ({
  rating,

  ...restProps
}: Props) => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedRatingArray = ratingArray.map((r, i) => (
      <StarIcon
        className={classNames(styles.star, {
          [styles.filled]: i < currentRating,
        })}
        key={i}
      />
    ));

    setRatingArray(updatedRatingArray);
  };

  return (
    <div {...restProps}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};

export default Rating;
