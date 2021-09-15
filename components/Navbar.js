import { useState } from 'react';
import styles from '../styles/Navbar.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Link from 'next/link';

function Navbar() {
  let [click, setClick] = useState(false);

  const navReveal = () => {
    setClick((click) => !click);
  };

  const navLinkClose = () => {
    setClick(false);
  };

  return (
    <>
      <div
        className={click == false ? styles.navButton : styles.navButtonCross}
        onClick={navReveal}
      >
        <span />
      </div>

      <nav
        className={
          click == false ? styles.nav : styles.nav + ' ' + styles.navReveal
        }
      >
        <Link href="/">
          <a className={utilStyles.headingXXS + ' ' + styles.navHead}>
            KucingPunk
          </a>
        </Link>
        <ul className={styles.container}>
          <li>
            <Link href="/">
              <a onClick={navLinkClose}>Home</a>
            </Link>
          </li>

          <li>
            <Link href="/attribute">
              <a onClick={navLinkClose}>Attribute</a>
            </Link>
          </li>

          <li>
            <Link href="/rarity">
              <a onClick={navLinkClose}>Rarity</a>
            </Link>
          </li>

          <li>
            <a href="https://app.pentas.io/user/0xbc0821b58c159bb4a164441c10f66abae0509d33">
              Buy
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
