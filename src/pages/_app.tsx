import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { GlobalStyle } from '../../styles/global';
import { createWrapper } from "next-redux-wrapper";

import store from '../store/store';
function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Provider>
  );
}

const makestore = () => store;
const wrapper = createWrapper(makestore);

export default wrapper.withRedux(MyApp);
