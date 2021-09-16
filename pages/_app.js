import { Fragment } from 'react';
import CustomCursor from '../components/CustomCursor';
import Layout from '../components/Layout';
import '../styles/globals.scss';
import { UseEffectScroll } from 'react-use-smooth-scroll';
import 'react-use-smooth-scroll/dist/index.css';

function MyApp({ Component, pageProps }) {
  return (
    <UseEffectScroll>
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UseEffectScroll>
  );
}

export default MyApp;
