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
  } else if (buttonType == 'bigLink') {
    return (
      <Link href={url}>
        <a className={styles.bigLink + ' ' + utilStyles.headingL}>{children}</a>
      </Link>
    );
  }
}

export default Button;
