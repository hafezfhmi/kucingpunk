import styles from '../styles/BigImages.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';

function BigImages() {
  return (
    <div className={styles.BigImages + ' ' + utilStyles.margin2TopBot}>
      <Image
        src="/images/BigImage.png"
        width="997.5"
        height="2252"
        layout="responsive"
        className={styles.images}
        alt="KucingPunk pictures"
      ></Image>
    </div>
  );
}

export default BigImages;
