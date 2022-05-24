const CodeIframe = ({ pageKey }: { pageKey: string }) => {
  const src = getCodeLocation(pageKey);
  return <iframe src={src} width="100%" />;
};

export const getCodeLocation = (pageKey: string) => {
  return `https://github.com/Code-From-Anywhere/react-with-native/blob/main/packages/ui/src/pages/${pageKey}.tsx`;

  //return `https://raw.githubusercontent.com/Code-From-Anywhere/react-with-native/main/packages/ui/src/pages/index.tsx`;
};

export default CodeIframe;
