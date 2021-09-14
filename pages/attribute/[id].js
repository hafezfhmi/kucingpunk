import utilStyles from '../../styles/Utils.module.scss';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticPaths = async () => {
  const res = await fetch('http://localhost:3000/api/attributeData');
  const data = await res.json();

  const res2 = await fetch('http://localhost:3000/api/numberData');
  const data2 = await res2.json();

  var paths = data.map((curr) => {
    return {
      params: { id: curr.id.toString() },
    };
  });

  paths = [
    ...paths,
    ...data2.map((curr) => {
      return {
        params: { id: curr.id.toString() },
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
  if (/count/.test(context.params.id)) {
    const res = await fetch(`http://localhost:3000/api/numberData/${id}`);
    var data = await res.json();
  } else {
    const res = await fetch(`http://localhost:3000/api/attributeData/${id}`);
    var data = await res.json();
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
