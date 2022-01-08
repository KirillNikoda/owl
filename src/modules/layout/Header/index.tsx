import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';
import styles from './Header.module.css';

const Header = ({
  className,
  ...restProps
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <header className={classNames(styles.header, className)} {...restProps}>
      header
    </header>
  );
};

export default Header;
