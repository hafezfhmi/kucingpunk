import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/AttributeTable.module.scss';
import utilStyles from '../styles/Utils.module.scss';

function AttributeTable({ data, sectionHeader, tableHeader }) {
  return (
    <section className={utilStyles.margin2TopBot}>
      <h1 className={styles.sectionHeader}>{sectionHeader}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeader.map((curr) => (
              <th
                key={`${sectionHeader}${curr}`}
                className={styles.tableHeader}
              >
                {curr}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((curr) => {
            return (
              <tr>
                <td>
                  <Link href={`http://localhost:3000/attribute/${curr.id}`}>
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
                      <Link href={`http://localhost:3000/rarity/${curr2}`}>
                        <a>
                          <Image
                            src={`/images/NFT-med/${curr2}.jpg`}
                            width="64"
                            height="64"
                            layout="fixed"
                          />
                        </a>
                      </Link>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default AttributeTable;
