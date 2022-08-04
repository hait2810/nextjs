import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AppPropsWithLayout } from '../models/layout';
import '../html/assets/css/style.css'


function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return <LayoutWrapper><Component {...pageProps} /></LayoutWrapper>
}

export default MyApp

