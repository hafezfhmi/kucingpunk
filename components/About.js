import styles from '../styles/About.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function About() {
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);
  return (
    <section className={styles.About + ' ' + utilStyles.margin2TopBot}>
      <h2 className={utilStyles.headingL} data-aos="fade-up">
        Meowhat?
      </h2>
      <h3
        className={utilStyles.headingXS + ' ' + utilStyles.marginNeg2Top}
        data-aos="fade-up"
      >
        *Read: What?
      </h3>
      <div className={styles.container}>
        <div className={styles.subContainerLeft}>
          <p data-aos="fade-up">KucingPunk is a collection of NFT.</p>
          <hr className={styles.horizontalShort} data-aos="fade-up" />
          <p data-aos="fade-up">Machinely generated with a total of 500 NFT.</p>
          <hr className={styles.horizontalShort} data-aos="fade-up" />
          <p data-aos="fade-up">
            Each NFT is uniquely equipped with different traits and ranked by
            their own rarity.
          </p>
          <hr className={styles.horizontalShort} data-aos="fade-up" />
          <p data-aos="fade-up">
            All KucingPunk will be minted on pentas.io and a total of 470 NFT
            will be made available for sale.
          </p>
        </div>
        <div className={styles.subContainerRight}>
          <Image
            src="/images/Cat1.png"
            height="400"
            width="400"
            alt="Picture of a cat"
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default About;
