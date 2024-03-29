import styles from '../styles/Header.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.Header + ' ' + utilStyles.marginMedTopBot}>
      <h1 className={utilStyles.headingXL}>KucingPunk</h1>

      <figure className={styles.container}>
        <Image
          src="/images/KucingPunk.gif"
          height="500"
          width="500"
          alt="5 Catpunk in a short gif"
          loading="eager"
          className={styles.mainImg}
        />
        <figcaption className={styles.text1 + ' ' + styles.scroll}>
          <div>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>
          </div>
          <div>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>
          </div>
        </figcaption>
        <figcaption className={styles.text2 + ' ' + styles.scroll}>
          <div>
            <span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow
          </div>
          <div>
            <span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow
          </div>
        </figcaption>
      </figure>
    </header>
  );
}

export default Header;
