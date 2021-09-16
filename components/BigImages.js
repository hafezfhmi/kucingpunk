import styles from '../styles/BigImages.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import Image from 'next/image';
import ScrollContainer from 'react-indiana-drag-scroll';

function BigImages() {
  return (
    <ScrollContainer
      className={styles.BigImages + ' ' + utilStyles.margin2TopBot}
    >
      <Image
        src="/images/BigImage.png"
        width="997.5"
        height="2252"
        layout="responsive"
        className={styles.images}
        alt="KucingPunk pictures"
        placeholder="blur"
        blurDataURL="/images/Placeholder.png"
      ></Image>
    </ScrollContainer>
  );
}

export default BigImages;
