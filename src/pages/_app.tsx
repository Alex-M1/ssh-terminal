import type { AppProps } from 'next/app';
import '../style.css';
import '../App.css';
import { Provider } from 'react-redux';
import { store } from 'src/store';
import Header from 'src/components/Header';
import { GlobalStyle } from 'src/components/_common/styled/Global';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
}
