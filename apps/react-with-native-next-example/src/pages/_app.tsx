import React from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Div } from "react-with-native";
import Head from "../components/Head";
import Sidebar from "../components/Sidebar";
import Page from "../components/Page";
import Footer from "../components/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <Div className="flex-1 w-screen h-screen">
      <Head />
      <Div className="relative flex w-full">
        <Sidebar />
        <Div className="flex-1 w-full">
          <Page Component={Component} pageProps={pageProps} />
        </Div>
      </Div>
    </Div>
  );
}

export default App;
