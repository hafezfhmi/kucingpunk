import styles from '../styles/Item.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Item({ NFT }) {
  return (
    <section className={styles.Item + ' ' + utilStyles.margin2Bot}>
      <div className={styles.image}>
        <Image
          src={`/images/NFT-med/${NFT.id}.jpg`}
          height="300"
          width="300"
          layout="responsive"
        />
      </div>

      <div className={styles.container}>
        <h1>Rarity: {NFT.rank} of 500</h1>
        <h2>ID: {NFT.id}</h2>
        <ul>
          {NFT.attributes.map((curr) => (
            <li key={curr}>
              <Link href={`http://localhost:3000/attribute/${curr}`}>
                <a className={styles.smallLink}>{curr}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Item;
