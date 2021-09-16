import attributeData from '../../data/attributeData.json';
import numberData from '../../data/numberData.json';
import AttributeTable from '../../components/AttributeTable';

export const getStaticProps = async () => {
  return {
    props: {
      attributeData,
      numberData,
    },
  };
};

function attribute({ attributeData, numberData }) {
  return (
    <main>
      <AttributeTable
        data={attributeData}
        sectionHeader={'Attributes Type'}
        tableHeader={['Types', 'Total', 'NFT']}
      />
      <AttributeTable
        data={numberData}
        sectionHeader={'Attributes Amount'}
        tableHeader={['Attributes Amount', 'Total', 'NFT']}
      />
    </main>
  );
}

export default attribute;
