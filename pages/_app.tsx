import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AppPropsWithLayout } from '../models/layout';
import '../html/assets/css/style.css'

// import './../html/assets/js/banner'

import '../html/assets/css/detail.css'
import '../html/assets/css/cart.css'
import { Provider } from "react-redux";
import { store } from "../src/app/store";
import './../html/assets/css/account.css'
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return   <Provider store={store}>
  <LayoutWrapper>  
    <Component {...pageProps} />
    </LayoutWrapper>
    </Provider>
}

export default MyApp

