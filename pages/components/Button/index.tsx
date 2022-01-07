import classNames from 'classnames';
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import styles from './Button.module.css';

type Props = {
  children: React.ReactNode;
  appearance: 'primary' | 'ghost';
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button = ({ children, appearance, className, ...restProps }: Props) => {
  return (
    <button
      className={classNames(styles.button, className, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      })}
      {...restProps}>
      {children}
    </button>
  );
};

export default Button;
