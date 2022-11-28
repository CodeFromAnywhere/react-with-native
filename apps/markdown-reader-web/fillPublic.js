const { copyReaderStaticAssets } = require("collect-static-assets");
const { getAllMarkdownReaderPages } = require("markdown-reader-functions");

const fillPublic = async () => {
  // NB: change this to the function you get your markdown pages (FileWebPage[]) from
  const pages = await getAllMarkdownReaderPages();
  console.log({ pages: pages.length });
  if (!pages) return;
  return copyReaderStaticAssets(process.cwd(), pages);
};
fillPublic();
