import { DetailedHTMLProps, HTMLAttributes } from 'react';
import classNames from 'classnames';

import styles from './Footer.module.css';

const Footer = ({
  className,
  ...restProps
}: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) => {
  return (
    <footer className={classNames(styles.footer, className)} {...restProps}>
      footer
    </footer>
  );
};

export default Footer;
