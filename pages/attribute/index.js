import Link from 'next/link';
import Image from 'next/image';
import attributeData from '../../data/attributeData.json';
import numberData from '../../data/numberData.json';
import AttributeTable from '../../components/AttributeTable';

export const getStaticProps = async (context) => {
  return {
    props: {
      attributeData,
      numberData,
    },
  };
};

function attribute({ attributeData, numberData }) {
  return (
    <>
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
    </>
  );
}

export default attribute;
