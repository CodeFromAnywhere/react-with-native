import { getBundleQueryPaths } from "bundle-util";
import { GetStaticPaths, GetStaticPathsContext } from "next";

export const pathsGetStaticPaths: GetStaticPaths = async (
  context: GetStaticPathsContext
) => {
  const paths = await getBundleQueryPaths();

  // console.log({ paths });
  if (!paths) {
    return { paths: [], fallback: false };
  }

  const staticPaths = paths.map((p) => ({ params: { paths: p.split("/") } }));

  return {
    paths: staticPaths,
    fallback: false, // can also be true or 'blocking'
  };
};
