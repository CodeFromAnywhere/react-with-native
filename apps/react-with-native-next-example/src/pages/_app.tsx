import React, { ReactElement, ReactNode } from "react";
import "../styles/globals.css";
import "../styles/index.css";
import type { AppProps } from "next/app";
import { Div } from "react-with-native";
import { NextPage } from "next";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return getLayout(<Component {...pageProps} />);
}

export default App;
