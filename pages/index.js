import Head from 'next/head';
import About from '../components/About';
import BigImages from '../components/BigImages';
import Header from '../components/Header';
import AttributeRarity from '../components/AttributeRarity';

export default function Home() {
  return (
    <>
      <Head>
        <title>KucingPunk</title>
        <meta
          name="description"
          content="KucingPunk is an NFT collection of 'kucing' or cats inspired by the immensely popular CryptoPunk."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <About />
      <BigImages />
      <AttributeRarity />
    </>
  );
}
