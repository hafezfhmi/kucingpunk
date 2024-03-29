import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/AttributeTable.module.scss';
import useInView from 'react-cool-inview';

const AttributeTableBody = ({ curr, sectionHeader }) => {
  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(),
  });

  return (
    <tr ref={observe}>
      {inView && (
        <>
          <td>
            <Link href={`/attribute/${curr.id}`}>
              <a className={styles.tableAttribute}>
                {sectionHeader == 'Attributes Amount'
                  ? curr.id.match(/\d/g)
                  : curr.id}
              </a>
            </Link>
          </td>
          <td className={styles.tableSecondtd}>{curr.total}</td>
          <td className={styles.tableNFT}>
            {curr.accId.slice(0, 5).map((curr2) => {
              return (
                <Link href={`/rarity/${curr2}`} key={curr2}>
                  <a>
                    <Image
                      src={`/images/NFT-small/${curr2}.jpg`}
                      width="64"
                      height="64"
                      layout="fixed"
                      placeholder="blur"
                      alt={`Cat NFT with attribute ${curr.id}`}
                      blurDataURL="/images/Placeholder.png"
                    />
                  </a>
                </Link>
              );
            })}
          </td>
        </>
      )}
    </tr>
  );
};

export default AttributeTableBody;
