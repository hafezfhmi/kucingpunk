import utilStyles from '../../styles/Utils.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import attributeData from '../../data/attributeData.json';
import numberData from '../../data/numberData.json';
import styles from '../../styles/Attribute.module.scss';
import SEO from '@bradgarropy/next-seo';

export const getStaticPaths = async () => {
  var paths = attributeData.map((curr) => {
    return {
      params: { id: curr.id.toString() },
    };
  });

  paths = [
    ...paths,
    ...numberData.map((curr) => {
      return {
        params: { id: curr.id },
      };
    }),
  ];

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  if (/count/.test(id)) {
    var data = numberData.find((curr) => curr.id == id);
  } else {
    var data = attributeData.find((curr) => curr.id == id);
  }

  return {
    props: { NFT: data },
  };
};

function Details({ NFT }) {
  return (
    <main className={utilStyles.marginMedTopBot}>
      {/^count/.test(NFT.id) ? (
        <SEO title={`KucingPunk - Attributes Count: ${NFT.id.match(/\d/g)}`} />
      ) : (
        <SEO title={`KucingPunk - Attribute Details: ${NFT.id}`} />
      )}

      <h1 className={styles.attrHeader}>
        {/count/.test(NFT.id) == true
          ? `Attributes count: ${NFT.id.match(/\d/g)}`
          : `Attribute: ${NFT.id}`}
      </h1>

      <h2 className={styles.attrSubHeader}>Total: {NFT.total}</h2>

      {NFT.accId.map((curr) => {
        return (
          <Link href={`/rarity/${curr}`} key={curr}>
            <a>
              <Image
                src={`/images/NFT-med/${curr}.jpg`}
                alt={`Kucing NFT with attribute ${NFT.id}`}
                width="64"
                height="64"
                placeholder="blur"
                blurDataURL="/images/Placeholder.png"
              />
            </a>
          </Link>
        );
      })}
    </main>
  );
}

export default Details;
