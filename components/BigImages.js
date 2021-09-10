import styles from '../styles/BigImages.module.scss';
import Image from 'next/image';

function BigImages() {
  return (
    <div className={styles.BigImages}>
      <Image
        src="/images/catBig.jpg"
        width="1000"
        height="1000"
        layout="fixed"
        className={styles.images}
      ></Image>
    </div>
  );
}

export default BigImages;
