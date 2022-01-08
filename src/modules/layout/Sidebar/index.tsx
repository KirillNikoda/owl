import { HTMLElementProps } from '@modules/core/types/prop.types';
import classNames from 'classnames';

import styles from './Sidebar.module.css';

const Sidebar = ({ className, ...restProps }: HTMLElementProps<HTMLElement>) => {
  return (
    <nav className={classNames(styles.sidebar, className)} {...restProps}>
      sidebar
    </nav>
  );
};

export default Sidebar;
