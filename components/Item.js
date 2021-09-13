import styles from '../styles/Item.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';

function Item({ NFT }) {
  return (
    <section className={styles.Item + ' ' + utilStyles.margin2Bot}>
      <Image src={`/images/NFT-med/${NFT.id}.jpg`} height="300" width="300" />
      <div className={styles.container}>
        <h1>Rarity: {NFT.rank} of 500</h1>
        <h2>ID: {NFT.id}</h2>
        <ul>
          {NFT.attributes.map((curr) => (
            <li key={curr}>&#9656; {curr}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Item;
