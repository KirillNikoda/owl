import classNames from 'classnames';
import Link from 'next/link';
import React, { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Tag.module.css';

type TagColor = 'ghost' | 'red' | 'grey' | 'green' | 'primary';

type Props = {
  size?: 's' | 'm';
  color?: TagColor;
  href?: string;
  children: React.ReactNode;
} & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Tag = ({
  size = 'm',
  color = 'ghost',
  href = '',
  className,
  children,
  ...restProps
}: Props) => {
  return (
    <div
      className={classNames(styles.tag, className, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.grey]: color === 'grey',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
        [styles.pointer]: !!href,
      })}
      {...restProps}>
      {href ? <Link href={href}>{children}</Link> : children}
    </div>
  );
};

export default Tag;
