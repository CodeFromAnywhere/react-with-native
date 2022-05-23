import "../globals.css";
import "react-datetime/css/react-datetime.css";
import "rc-time-picker/assets/index.css";
import "react-toastify/dist/ReactToastify.css";

import { AppProps } from "next/app";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import { QueryClient, QueryClientProvider } from "react-query";
import { StoreProvider, Components } from "ui";
import { Div, P } from "react-with-native";
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
  return (
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <AlertProvider>
        <ModalProvider>
          <StoreProvider>
            <Div className="flex flex-row">
              <Div className="bg-gray-300 p-4 h-screen w-40">
                <P className="font-bold">Menu</P>
                <Components.Menu />
              </Div>
              <Component {...pageProps} />
            </Div>
          </StoreProvider>
        </ModalProvider>
      </AlertProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
