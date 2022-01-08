import { DetailedHTMLProps, HTMLAttributes } from 'react';

import styles from './Sidebar.module.css';

const Sidebar = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
) => {
  return <nav {...props}>sidebar</nav>;
};

export default Sidebar;
