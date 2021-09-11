import styles from '../styles/Button.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Link from 'next/link';

function Button({ url, buttonType, children }) {
  if (buttonType == 'buy') {
    return (
      <a href={url} className={styles.buttonBuy}>
        {children}
      </a>
    );
  } else if (buttonType == 'rarity') {
    return (
      <Link href="/rarityCheck">
        <a className={styles.rarity + ' ' + utilStyles.headingL}>{children}</a>
      </Link>
    );
  }
}

export default Button;
