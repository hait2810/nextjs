import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import { AppPropsWithLayout } from '../models/layout';
import '../html/assets/css/style.css'
import { Provider } from "react-redux";
import { store } from "../src/app/store";
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const LayoutWrapper = Component.Layout ?? Layout;
  return <LayoutWrapper>
          <Provider store={store}>

    <Component {...pageProps} />
      </Provider>
    </LayoutWrapper>
}

export default MyApp

