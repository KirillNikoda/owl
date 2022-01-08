import { ReactNode } from 'react';

import Footer from '@modules/layout/Footer';
import Header from '@modules/layout/Header';
import Sidebar from '@modules/layout/Sidebar';

import styles from './Layout.module.css';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Layout;
