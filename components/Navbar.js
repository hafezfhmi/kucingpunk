import styles from '../styles/Navbar.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Link from 'next/link';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={utilStyles.headingXXS}>KucingPunk</a>
      </Link>
      <ul className={styles.container}>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li>
          <Link href="/rarity">
            <a>Rarity</a>
          </Link>
        </li>

        <li>
          <a href="https://app.pentas.io/user/0xbc0821b58c159bb4a164441c10f66abae0509d33">
            Buy
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
