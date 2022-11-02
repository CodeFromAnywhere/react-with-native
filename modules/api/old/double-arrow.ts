/**
 * There is probably some doc-comments available for the function, maybe we can fix this with proxies to pass those comments... that would be insane.
 */
const fn1 = (a: string, b: number) => {
  return true;
};

const fn2 = (a: string, b: number) => {
  return 282827;
};

const fn3 = async (a: string, b: number) => {
  return Promise.resolve("yesssss");
};

const sdk = {
  fn1,
  fn2,
  fn3,
};

type SdkType = typeof sdk;

type SdkTypes = {
  [Fn in keyof SdkType]: {
    functionType: (
      ...parameters: Parameters<SdkType[Fn]>
    ) => ReturnType<SdkType[Fn]>;
    parameterType: Parameters<SdkType[Fn]>;
    returnType: ReturnType<SdkType[Fn]>;
  };
};
/**
 * Cool example, but not going to use this...
 */

export const doubleFunctionApi = <T extends keyof SdkType>(functionName: T) => {
  const yourApi = (
    ...params: SdkTypes[T]["parameterType"]
  ): SdkTypes[T]["returnType"] => {
    const response = undefined as unknown as SdkTypes[T]["returnType"];

    return response;
  };

  return yourApi;
};
