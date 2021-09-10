import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>KucingPunk</title>
        <meta
          name="description"
          content="KucingPunk is an NFT collection of 'kucing' or cats inspired by the immensely popular CryptoPunk."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
    </Layout>
  );
}
