import { AppProps } from "next/app";
import { MarkdownReaderPageProps } from "markdown-reader-types";
import { StoreProvider } from "markdown-reader-ui";
import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import {
  publicEnvironmentVariables,
  publicLocalEnvironmentVariables,
} from "sdk-env-public";

// import { Raleway } from "@next/font/google";
// const font = Raleway();

// CSS
import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";
import "react-datepicker/dist/react-datepicker.css";
import "markdown-reader-ui/css.css";
import "nested-menu/css.css";
import "markdown/css.css";
import "react-with-native/css.css";
import "react-with-native-router/css.css";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

// Only holds serverRuntimeConfig and publicRuntimeConfig
export type RealAppProps = Omit<AppProps, "pageProps"> & {
  pageProps: MarkdownReaderPageProps;
};

function MyApp({ Component, pageProps }: RealAppProps) {
  const siteName =
    publicLocalEnvironmentVariables.markdownReaderTitle ||
    publicEnvironmentVariables.markdownReaderTitle ||
    "Docs";

  const title = pageProps.title ? `${pageProps.title} - ${siteName}` : siteName;

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway&display=swap"
          rel="stylesheet"
        />

        {/* NB: for CODE syntax highlighting of "markdown" markdown-parser */}
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      <StoreProvider>
        {/* <main className={font.className}> */}
        {/* @ts-ignore */}
        <Component {...pageProps} />
        {/* </main> */}
      </StoreProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
