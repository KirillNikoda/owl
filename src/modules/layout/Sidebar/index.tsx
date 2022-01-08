import classNames from 'classnames';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Sidebar.module.css';

const Sidebar = ({
  className,
  ...restProps
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <nav className={classNames(styles.sidebar, className)} {...restProps}>
      sidebar
    </nav>
  );
};

export default Sidebar;
