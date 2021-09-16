import CustomCursor from '../components/CustomCursor';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import { UseEffectScroll } from 'react-use-smooth-scroll';
import 'react-use-smooth-scroll/dist/index.css';
import SEO from '@bradgarropy/next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <UseEffectScroll>
      <SEO
        title="KucingPunk - A collection of Kucing NFT"
        description="KucingPunk is a collection of NFT of kucing or cats uniquely machine generated and ranked by the rarity of their traits."
        keywords={[
          'nft',
          'cats',
          'kucing',
          'nft collection',
          'nft image',
          'nft art',
          'nft crypto',
          'nft art financial',
          'nft marketplace',
          'pentas nft',
          'pentas',
          'what is nft',
          'buy nft',
          'meow',
          'kucingpunk',
          'kucingpunk nft',
          'what is an nft',
          'machine',
          'generated',
          'machine generated',
          'how to make an nft',
          'nft stocks',
          'nft meaning',
          'nft art finance',
          'whats an nft',
          'opensea',
          'opensea nft',
          'elon',
          'elon musk',
          'bnb',
          'eth',
          'etherium',
          'rarible nft',
          'digital art nft',
          'pixel nft',
          'pixel',
        ]}
        icon="/images/favicon.ico"
        facebook={{
          image: '/images/SEOimg.png',
          url: 'kucingpunk.live',
          type: 'website',
        }}
        twitter={{
          image: '/images/SEOimg.png',
          site: '@KucingPunkLive',
          card: 'summary',
        }}
      />
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UseEffectScroll>
  );
}

export default MyApp;
