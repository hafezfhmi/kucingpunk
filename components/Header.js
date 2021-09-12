import styles from '../styles/Header.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';

function Header() {
  return (
    <header className={styles.Header + ' ' + utilStyles.margin2TopBot}>
      <h1 className={utilStyles.headingXL}>KucingPunk</h1>

      <div className={styles.container}>
        <Image
          src="/images/KucingPunk.gif"
          height="500"
          width="500"
          alt="CatPunk gif"
          loading="eager"
          className={styles.mainImg}
        />
        <div className={styles.text1 + ' ' + styles.scroll}>
          <div>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>
          </div>
          <div>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>
          </div>
        </div>
        <div className={styles.text2 + ' ' + styles.scroll}>
          <div>
            <span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow
          </div>
          <div>
            <span>Meow</span>Meow<span>Meow</span>Meow<span>Meow</span>
            Meow<span>Meow</span>Meow<span>Meow</span>Meow
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
