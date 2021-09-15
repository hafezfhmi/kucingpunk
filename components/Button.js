import styles from '../styles/Button.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Link from 'next/link';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function Button({ url, buttonType, children }) {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  if (buttonType == 'buy') {
    return (
      <a href={url} className={styles.buttonBuy}>
        {children}
      </a>
    );
  } else if (buttonType == 'bigLink') {
    return (
      <Link href={url}>
        <a
          className={styles.bigLink + ' ' + utilStyles.headingL}
          data-aos="fade-up"
        >
          {children}
        </a>
      </Link>
    );
  }
}

export default Button;
