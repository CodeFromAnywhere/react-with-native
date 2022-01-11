import { NextComponentType, NextPageContext } from "next/types";
import React from "react";
import { Div } from "react-with-native";

function Page<P={}>({ Component, pageProps }:{ Component: NextComponentType<NextPageContext, any, P>, pageProps: any }) {
  return (
    <Div className="w-full p-4">
        <Component {...pageProps} />
    </Div>
  );
}

export default Page;
