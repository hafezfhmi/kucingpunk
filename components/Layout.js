import React, { Fragment } from 'react';
import styles from '../styles/Layout.module.scss';

function Layout({ children }) {
  return <div className={styles.layout__container}>{children}</div>;
}

export default Layout;
