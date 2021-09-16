import styles from '../styles/AttributeTable.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import dynamic from 'next/dynamic';
import React from 'react';

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
              <React.Fragment key={curr.id}>
                <AttributeTableBody curr={curr} sectionHeader={sectionHeader} />
              </React.Fragment>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}

export default AttributeTable;
