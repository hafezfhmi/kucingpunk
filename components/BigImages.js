import styles from '../styles/BigImages.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';

function BigImages() {
  return (
    <div className={styles.BigImages + ' ' + utilStyles.margin2TopBot}>
      <Image
        src="/images/catImageBig.png"
        width="1995"
        height="4504"
        layout="responsive"
        className={styles.images}
        alt="KucingPunk pictures"
        loading="eager"
      ></Image>
    </div>
  );
}

export default BigImages;
