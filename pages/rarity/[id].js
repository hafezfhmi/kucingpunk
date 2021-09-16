import Item from '../../components/Item';
import NFTdata from '../../data/NFTdata.json';
import Searchbar from '../../components/Searchbar';
import SEO from '@bradgarropy/next-seo';

// https://nextjs.org/docs/basic-features/data-fetching
// https://www.youtube.com/watch?v=2zRHlqc0_yw
// Make dynamic path for routing based on data using getStaticPaths and get the data using getStaticProps
export const getStaticPaths = async () => {
  const paths = NFTdata.map((curr) => {
    return {
      params: { id: curr.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;

  let data = NFTdata.find((curr) => curr.id == parseInt(id));

  return {
    props: { NFT: data },
  };
};

function Details({ NFT }) {
  return (
    <main>
      <SEO title={`KucingPunk - Rarity: ID ${NFT.id}`} />
      <Searchbar />
      <Item NFT={NFT} />
    </main>
  );
}

export default Details;
