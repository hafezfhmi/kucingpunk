import React from 'react';
import styles from '../styles/EmptySearch.module.scss';

function EmptySearch() {
  return (
    <div className={styles.EmptySearch}>
      <h1>Enter NFT ID in search bar</h1>
    </div>
  );
}

export default EmptySearch;
