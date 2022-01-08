import classNames from 'classnames';

import styles from './Footer.module.css';
import { HTMLElementProps } from '@modules/core/types/prop.types';

const Footer = ({ className, ...restProps }: HTMLElementProps<HTMLElement>) => {
  return (
    <footer className={classNames(styles.footer, className)} {...restProps}>
      footer
    </footer>
  );
};

export default Footer;
