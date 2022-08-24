import { getBundleQueryPaths, getRealPathFromQueryPath } from "bundle-util";
import { fs } from "fs-util";
import { MainPageProps, getQueryPath } from "markdown-reader-ui";
import { GetStaticPropsContext } from "next";

export const pathGetStaticProps = async (
  context: GetStaticPropsContext
): Promise<{
  props: MainPageProps;
}> => {
  const queryPaths = (await getBundleQueryPaths()) || [];
  const queryPath = getQueryPath(context.params);
  const realPath = await getRealPathFromQueryPath(queryPath);

  if (!realPath) {
    return { props: { markdownString: null, queryPaths } };
  }

  const markdownString = await fs.readFile(realPath, "utf8");

  return {
    // Passed to the page component as props
    props: { markdownString, queryPaths },
  };
};
