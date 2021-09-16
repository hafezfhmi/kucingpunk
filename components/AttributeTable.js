import styles from '../styles/AttributeTable.module.scss';
import utilStyles from '../styles/Utils.module.scss';
import AttributeTableBody from '../components/AttributeTableBody';

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
