import classNames from 'classnames';

import styles from './Footer.module.css';
import { HTMLElementProps } from '@modules/core/types/prop.types';

const Footer = ({ className, ...restProps }: HTMLElementProps<HTMLElement>) => {
  return (
    <footer className={classNames(styles.footer, className)} {...restProps}>
      <p className={styles.text}>OwlTop © 2020 - 2021 Все права защищены</p>
      <p className={styles.text}>Пользовательское соглашение</p>
      <p className={styles.text}>Политика конфиденциальности</p>
    </footer>
  );
};

export default Footer;
