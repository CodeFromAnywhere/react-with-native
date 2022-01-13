import { NextComponentType, NextPageContext } from "next/types";
import React from "react";
import { Div } from "react-with-native";
import Container from "./Container";
import Footer from "./Footer";

function Page<P = {}>({
  Component,
  pageProps,
}: {
  Component: NextComponentType<NextPageContext, any, P>;
  pageProps: any;
}) {
  return (
    <Container>
      <Div className="static">
        <Component {...pageProps} />
        <Footer />
      </Div>
    </Container>
  );
}

export default Page;
