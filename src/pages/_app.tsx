import type { AppProps } from "next/app";
import React from "react";
import InfoApp from "../components/InfoApp";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <InfoApp />
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default MyApp;
