import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AppPropsWithLayout } from '../models/layout';
import signin from '../components/lognin/signin';

// import './../components/Header/header.css';
// import './../components/Header/search';
// import 'https://unpkg.com/aos@next/dist/aos.js';


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return <LayoutWrapper><Component {...pageProps} /></LayoutWrapper>
}

export default MyApp

