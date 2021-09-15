import { Fragment } from 'react';
import CustomCursor from '../components/CustomCursor';
import Layout from '../components/Layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <CustomCursor />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}

export default MyApp;
