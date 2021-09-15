import { useState } from 'react';
import styles from '../styles/Searchbar.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import router from 'next/router';

function Searchbar() {
  let [searchId, setSearchId] = useState('');

  const getInput = (event) => {
    setSearchId(event.target.value);
  };

  const changeRoute = (event) => {
    event.preventDefault();
    setSearchId('');
    router.push(`/rarity/${searchId}`);
  };

  return (
    <form onSubmit={changeRoute}>
      <input
        type="number"
        placeholder="Search..."
        className={styles.Searchbar + ' ' + utilStyles.margin2TopBot}
        min="1"
        max="500"
        value={searchId}
        onChange={getInput}
      />
    </form>
  );
}

export default Searchbar;
