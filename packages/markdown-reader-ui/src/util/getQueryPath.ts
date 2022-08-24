import { NextParsedUrlQuery } from "next/dist/server/request-meta";

export const getQueryPath = (
  parsedUrlQuery: NextParsedUrlQuery | undefined
) => {
  const paths = parsedUrlQuery?.paths;
  const queryPath = Array.isArray(paths)
    ? paths.join("/")
    : paths === undefined
    ? ""
    : paths;
  return queryPath;
};
