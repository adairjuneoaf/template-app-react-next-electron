import type { AppProps } from "next/app";
import React from "react";
import InfoApp from "../components/InfoApp";
import TitleBatCustom from "../components/TitleBarCustom";

import { GlobalStyle } from "../styles/global";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <TitleBatCustom />
      <InfoApp />
      <Component {...pageProps} />
      <GlobalStyle />
    </React.Fragment>
  );
}

export default MyApp;
