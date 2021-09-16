import styles from '../styles/Item.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';
import Link from 'next/link';

function Item({ NFT }) {
  return (
    <figure className={styles.Item + ' ' + utilStyles.marginMedBot}>
      <div className={styles.image}>
        <Image
          src={`/images/NFT-med/${NFT.id}.jpg`}
          height="300"
          width="300"
          layout="responsive"
          placeholder="blur"
          blurDataURL="/images/Placeholder.png"
        />
      </div>

      <figcaption className={styles.container}>
        <h1>Rarity: {NFT.rank} of 500</h1>
        <h2>ID: {NFT.id}</h2>
        <ul>
          {NFT.attributes.map((curr) => (
            <li key={curr}>
              <Link href={`/attribute/${curr}`}>
                <a className={styles.smallLink}>{curr}</a>
              </Link>
            </li>
          ))}
        </ul>
      </figcaption>
    </figure>
  );
}

export default Item;
