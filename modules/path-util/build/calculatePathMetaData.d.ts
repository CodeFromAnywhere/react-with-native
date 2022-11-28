import { PathMetaData, TsComment } from "code-types";
/**
export const sumFolderSummary = (
  firstFolderSummary: FolderSummary,
  secondFolderSummary: FolderSummary
): FolderSummary => {
  const folderSummaryKeys = Object.keys(
    firstFolderSummary
  ) as (keyof FolderSummary)[];
  const sum = mergeObjectsArray(
    folderSummaryKeys.map((keyName) => {
      return {
        [keyName]: sumAllKeys([
          firstFolderSummary[keyName],
          secondFolderSummary[keyName],
        ],["bytes","characters","lines","numberOfFiles"]),
      };
    })
  ) as FolderSummary;

  return sum;
};


takes all PathMetaData of an array that contains all child files, and merges them, taking the newest update date, the earliest created-date, and summing size

export const sumFileGeneralMetaData = async (
  childrenMetaDataArray: PathGeneralMetaData[]
): Promise<PathGeneralMetaData | null> => {
  const sum = childrenMetaDataArray.reduce(
    (sumMetaData, pathMetaData: PathGeneralMetaData) => {
      const newPathMetaData: PathGeneralMetaData = {
        createdAt:
          !sumMetaData || pathMetaData.createdAt < sumMetaData.createdAt
            ? pathMetaData.createdAt
            : sumMetaData.createdAt,
        updatedAt:
          !sumMetaData || pathMetaData.updatedAt > sumMetaData.updatedAt
            ? pathMetaData.updatedAt
            : sumMetaData.updatedAt,
        sizes: !sumMetaData
          ? pathMetaData.sizes
          : sumFolderSummary(sumMetaData.sizes, pathMetaData.sizes),
      };

      return newPathMetaData;
    },
    null as PathGeneralMetaData | null
  );

  return sum;
};
*/
export declare const getPathMainComment: (absolutePath: string) => Promise<TsComment | undefined>;
/**
 * for folders: finds all files used for calculation and uses sumPathMetaData to create a new PathMetaData.
 * for files: just calculates the path metadata
 */
export declare const calculatePathMetaData: (absolutePath: string) => Promise<PathMetaData | undefined>;
//# sourceMappingURL=calculatePathMetaData.d.ts.map