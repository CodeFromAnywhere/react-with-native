import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const filesDirectory = path.join(process.cwd(), "src/docFiles");

export function getAllFileIds() {
  const fileNames = fs.readdirSync(filesDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

interface IParams {
  id: string;
}

type X = {
  [key: string]: any;
};

export type FileDataParams = IParams & X;

const excludeSidebarFile = ["learnBasics"];

export async function getFileData(id: string) {
  const fullPath = path.join(filesDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  const hasSidebar = !excludeSidebarFile.includes(id);

  return {
    id,
    contentHtml,
    hasSidebar,
    ...matterResult.data,
  };
}
