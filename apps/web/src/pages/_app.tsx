import "../globals.css";
import "react-toastify/dist/ReactToastify.css";
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-datepicker/dist/react-datepicker.css";

import { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider, Components } from "ui";
import { Div, P, Span } from "react-with-native";
import { pagesObject } from "ui";
import { ToastContainer } from "react-with-native-notification";
import { AlertProvider } from "react-with-native-alert";
import { ModalProvider } from "react-with-native-modal";

const progress = new ProgressBar();

//Binding events.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const queryClient = new QueryClient();
function MyApp({ Component, pageProps }: AppProps) {
  console.log({ pageProps });
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <AlertProvider>
        <ModalProvider>
          <StoreProvider>
            <Div className="border-gray-200 border-b">
              <P className="text-3xl h-32 flex justify-center items-center">
                React With Native Demo
              </P>
            </Div>
            <Div className="grid grid-cols-4">
              <Span className="col-span-1 border-r border-r-gray-200 min-h-screen">
                <pagesObject.menu />
              </Span>
              <Div className="col-span-3">
                <Component {...pageProps} />
              </Div>
            </Div>
          </StoreProvider>
        </ModalProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
