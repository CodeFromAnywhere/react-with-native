import React from "react";
import { Div } from "react-with-native";
import Head from "next/head";
import HomeWrapper from "./HomeWrapper";
import Footer from "./Footer";

export default function Home() {
  return (
    <Div>
      <Head>
        <title>React With Native</title>
      </Head>
      <HomeWrapper />
      <Footer />
    </Div>
  );
}
