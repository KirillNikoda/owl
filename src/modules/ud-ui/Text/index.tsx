import { HTMLElementProps } from '@modules/core/types/prop.types';
import classNames from 'classnames';

import styles from './Text.module.css';

type Props = {
  size?: 's' | 'l' | 'm';
  children: React.ReactNode;
} & HTMLElementProps<HTMLParagraphElement>;

const Text = ({ size = 'm', children, ...restProps }: Props) => {
  return (
    <p
      className={classNames(styles.text, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...restProps}>
      {children}
    </p>
  );
};

export default Text;
