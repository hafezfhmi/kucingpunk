import styles from '../styles/AttributeTable.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import dynamic from 'next/dynamic';

const AttributeTableBody = dynamic(() =>
  import('../components/AttributeTableBody')
);

function AttributeTable({ data, sectionHeader, tableHeader }) {
  return (
    <section className={utilStyles.marginMedTopBot}>
      <h1 className={styles.sectionHeader}>{sectionHeader}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            {tableHeader.map((curr) => (
              <th className={styles.tableHeader} key={curr}>
                {curr}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((curr) => {
            return (
              <>
                <AttributeTableBody curr={curr} sectionHeader={sectionHeader} />
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default AttributeTable;
