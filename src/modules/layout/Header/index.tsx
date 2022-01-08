import { HTMLElementProps } from '@modules/core/types/prop.types';
import classNames from 'classnames';
import styles from './Header.module.css';

const Header = ({ className, ...restProps }: HTMLElementProps<HTMLElement>) => {
  return (
    <header className={classNames(styles.header, className)} {...restProps}>
      header
    </header>
  );
};

export default Header;
