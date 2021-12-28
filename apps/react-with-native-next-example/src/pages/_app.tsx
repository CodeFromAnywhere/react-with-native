import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Div } from "react-with-native";
import Menu from "./menu";

function App({ Component, pageProps }: AppProps) {
  return (
    <Div>
      <Menu pageProps={pageProps} Component={Component}/>
    </Div>
  );
}

export default App;
