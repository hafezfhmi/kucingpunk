import Head from 'next/head';
import About from '../components/About';
import BigImages from '../components/BigImages';
import Header from '../components/Header';
import AttributeRarity from '../components/AttributeRarity';

export default function Home() {
  return (
    <main>
      <Header />
      <About />
      <BigImages />
      <AttributeRarity />
    </main>
  );
}
