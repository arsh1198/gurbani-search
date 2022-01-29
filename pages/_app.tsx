import "../styles/globals.css";
import type { AppProps } from 'next/app'
import ApiProvider from "../contexts/ApiContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApiProvider>
      <Component {...pageProps} />
    </ApiProvider>
  );
}

export default MyApp;
