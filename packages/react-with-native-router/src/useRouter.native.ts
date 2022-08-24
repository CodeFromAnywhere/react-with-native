import { useNavigation } from "@react-navigation/native";
import { NextURL } from "next/dist/server/web/next-url";
import { MittEmitter } from "next/dist/shared/lib/mitt";
import { PrefetchOptions } from "next/dist/shared/lib/router/router";
import { NextRouter, RouterEvent } from "next/router";

type TransitionOptions = {
  shallow?: boolean;
  locale?: string | false;
  scroll?: boolean;
};
export const useRouter = (): NextRouter => {
  const navigation = useNavigation();

  const push = async (route: any, options: any) => {
    const realRoute = route === "/" ? "index" : route;
    //@ts-ignore
    navigation.navigate(realRoute, options?.query);
    return true;
  };

  const route = "";

  const replace = async (
    url: NextURL,
    as?: NextURL | undefined,
    options?:
      | {
          shallow?: boolean;
          locale?: string | false;
          scroll?: boolean;
        }
      | undefined
  ) => true;

  const reload = () => {};
  const back = () => navigation.goBack();

  const prefetch = async (
    url: string,
    asPath?: string | undefined,
    options?: PrefetchOptions | undefined
  ) => {};
  const events: MittEmitter<RouterEvent> = {
    on: (type: RouterEvent, handler: () => void) => {},
    off: () => {},
    emit: () => {},
  };

  const beforePopState = (
    cb: (state: {
      url: string;
      as: string;
      options: TransitionOptions;
    }) => boolean
  ) => {};
  return {
    push,
    route,
    isLocaleDomain: true,
    pathname: "",
    query: {},
    asPath: "",
    isFallback: false,
    basePath: "",
    locale: "",
    locales: [""],
    defaultLocale: "",
    isReady: true,
    isPreview: false,
    replace,
    reload,
    back,
    prefetch,
    beforePopState,
    events,
  };
};
