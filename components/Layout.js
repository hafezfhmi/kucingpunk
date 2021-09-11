import React, { Fragment } from 'react';
import styles from '../styles/Layout.module.scss';
import Footer from './Footer';
import Navbar from './Navbar';

function Layout({ children }) {
  return (
    <div className={styles.layout__container}>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
