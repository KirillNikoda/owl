import classNames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './Button.module.css';
import ArrowIcon from './arrow.svg';

type Props = {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
  arrow?: 'right' | 'down' | 'none';
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({
  appearance,
  arrow = 'none',
  children,
  className,
  ...restProps
}: Props) => (
  <button
    className={classNames(styles.button, className, {
      [styles.primary]: appearance === 'primary',
      [styles.ghost]: appearance === 'ghost',
    })}
    {...restProps}>
    {children}
    {arrow !== 'none' && (
      <span
        className={classNames(styles.arrow, {
          [styles.down]: arrow === 'down',
        })}>
        <ArrowIcon />
      </span>
    )}
  </button>
);

export default Button;
