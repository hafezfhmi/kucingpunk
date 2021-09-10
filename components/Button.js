import styles from '../styles/Button.module.scss';
import Link from 'next/link';

function Button({ url, buttonType, children }) {
  if (buttonType == 'buy') {
    return (
      <a href={url} className={styles.buttonBuy}>
        {children}
      </a>
    );
  } else if (buttonType == 'checkRarity') {
    return (
      <Link href="/rarityCheck">
        <a className={styles.buttonBuy}>Check rarity</a>
      </Link>
    );
  }
}

export default Button;
