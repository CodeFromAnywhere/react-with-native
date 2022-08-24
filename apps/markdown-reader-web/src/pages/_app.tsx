import { AppProps } from "next/app";

import Head from "next/head";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { pagesObject, pages, getPageTitle, Layout } from "markdown-reader-ui";
import { useRouter } from "react-with-native-router";

import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";
import "react-datepicker/dist/react-datepicker.css";
///rwn
import "markdown-reader-ui/css.css";
import "nested-menu/css.css";
import "markdown-parse-transpile-ui/css.css";

import "react-with-native/css.css";
import "react-with-native-router/css.css";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();

// Only holds serverRuntimeConfig and publicRuntimeConfig

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const path = router.route.slice(1);
  const pageKey = (path === "" ? "index" : path) as keyof typeof pagesObject;
  const page = pages.find((x) => x.key === pageKey);
  const siteName = "Docs";
  const title = page ? `${getPageTitle(page)} - ${siteName}` : siteName;

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>{title}</title>

        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11.6.0/build/styles/default.min.css"
        />
      </Head>
      {/* @ts-ignore */}
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
