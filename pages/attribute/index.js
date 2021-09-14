import Link from 'next/link';
import Image from 'next/image';
import attributeData from '../../data/attributeData.json';
import numberData from '../../data/numberData.json';
import rankingData from '../../data/rankingData.json';

export const getStaticProps = async (context) => {
  // const res = await fetch(`http://localhost:3000/api/attributeData/`);
  // const data = await res.json();

  // const res2 = await fetch(`http://localhost:3000/api/numberData/`);
  // const data2 = await res2.json();

  // const res3 = await fetch(`http://localhost:3000/api/rankingData/`);
  // const data3 = await res3.json();

  return {
    props: {
      attributeData,
      numberData,
      rankingData,
    },
  };
};

function attribute({ attributeData, numberData, rankingData }) {
  return (
    <>
      <section>
        <h1>Attributes Type</h1>
        <table>
          <thead>
            <tr>
              <th>Types</th>
              <th>Total</th>
              <th>NFT</th>
            </tr>
          </thead>
          <tbody>
            {attributeData.map((curr) => {
              return (
                <tr>
                  <td>{curr.id}</td>
                  <td>{curr.total}</td>
                  <td>
                    {curr.accId.slice(0, 5).map((curr2) => {
                      return (
                        <Link href={`http://localhost:3000/rarity/${curr2}`}>
                          <a>
                            <Image
                              src={`/images/NFT-med/${curr2}.jpg`}
                              width="64"
                              height="64"
                            />
                          </a>
                        </Link>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <h1>Attributes Amount</h1>
        <table>
          <thead>
            <tr>
              <th>Attributes Amount</th>
              <th>Total</th>
              <th>NFT</th>
            </tr>
          </thead>
          <tbody>
            {numberData.map((curr) => {
              return (
                <tr>
                  <td>{curr.id.match(/\d/g)}</td>
                  <td>{curr.total}</td>
                  <td>
                    {curr.accId.slice(0, 5).map((curr2) => {
                      return (
                        <Link href={`http://localhost:3000/rarity/${curr2}`}>
                          <a>
                            <Image
                              src={`/images/NFT-med/${curr2}.jpg`}
                              width="64"
                              height="64"
                            />
                          </a>
                        </Link>
                      );
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section>
        <h1>Ranking</h1>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Id</th>
              <th>NFT</th>
            </tr>
          </thead>
          <tbody>
            {rankingData.slice(0, 10).map((curr) => {
              return (
                <tr>
                  <td>{curr.id.match(/\d/g)}</td>
                  <td>{curr.NFTid}</td>
                  <td>
                    <Link href={`http://localhost:3000/rarity/${curr.NFTid}`}>
                      <a>
                        <Image
                          src={`/images/NFT-med/${curr.NFTid}.jpg`}
                          width="64"
                          height="64"
                        />
                      </a>
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
    </>
  );
}

export default attribute;
