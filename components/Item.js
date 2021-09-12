import styles from '../styles/Item.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';

function Item() {
  return (
    <section className={styles.Item + ' ' + utilStyles.margin2Bot}>
      <Image src="/images/Cat1.jpg" height="300" width="300" />
      <div className={styles.container}>
        <h1>Rarity: 42 of 500</h1>
        <ul>
          <li>Straw hats of 28</li>
          <li>Straw hats of 28</li>
          <li>Straw hats of 28</li>
          <li>Straw hats of 28</li>
          <li>Straw hats of 28</li>
          <li>Straw hats of 28</li>
        </ul>
      </div>
    </section>
  );
}

export default Item;
