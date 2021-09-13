import Item from '../../components/Item';
import Searchbar from '../../components/Searchbar';

// https://nextjs.org/docs/basic-features/data-fetching
// https://www.youtube.com/watch?v=2zRHlqc0_yw
// Make dynamic path for routing based on data using getStaticPaths and get the data using getStaticProps
export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/nftData');
  const data = await res.json();

  const paths = data.map((curr) => {
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
  const res = await fetch(`http://localhost:3000/api/nftData/${id}`);
  const data = await res.json();

  return {
    props: { NFT: data },
  };
};

function Details({ NFT }) {
  return (
    <>
      <Searchbar />
      <Item NFT={NFT} />
    </>
  );
}

export default Details;
