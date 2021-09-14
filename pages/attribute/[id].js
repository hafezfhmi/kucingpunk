import utilStyles from '../../styles/Utils.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import attributeData from '../../data/attributeData.json';
import numberData from '../../data/numberData.json';

export const getStaticPaths = async () => {
  // const res = await fetch('http://localhost:3000/api/attributeData');
  // const data = await res.json();

  // const res2 = await fetch('http://localhost:3000/api/numberData');
  // const data2 = await res2.json();

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
    // const res = await fetch(`http://localhost:3000/api/numberData/${id}`);
    // var data = await res.json();
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
    <div className={utilStyles.margin2TopBot}>
      <h1>
        {/count/.test(NFT.id) == true
          ? `Attributes count: ${NFT.id.match(/\d/g)}`
          : `Attributes: ${NFT.id}`}
      </h1>
      <h2>Total: {NFT.total}</h2>
      {NFT.accId.map((curr) => {
        return (
          <Link href={`http://localhost:3000/rarity/${curr}`}>
            <a>
              <Image
                src={`/images/NFT-med/${curr}.jpg`}
                width="64"
                height="64"
              />
            </a>
          </Link>
        );
      })}
    </div>
  );
}

export default Details;
