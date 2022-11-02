import { Div, Span } from "react-with-native";
import {
  NestedMenu,
  queryPathsArrayToNestedPathObject,
  nestedPathObjectToNestedMenuRecursive,
} from "nested-menu";
import { SelectInput } from "react-with-native-form-inputs";
import { AugmentedWord, MarkdownReaderPage } from "markdown-reader-types";
import { MappedObject } from "js-util";
import { Item } from "react-with-native-select";
import { useRouter } from "react-with-native-router";

export const Search = (props: { results: AugmentedWord[] }) => {
  const { results } = props;
  const router = useRouter();
  const options: Item<string>[] = results.map((result) => ({
    label: result.spoiler || result.word,
    value: result.word,
  }));

  return (
    <Div>
      <SelectInput
        config={{}}
        extra={{ autoSuggest: true, options }}
        fieldName="search"
        onChange={(select) => {
          const path = results.find((x) => x.word === select?.value)?.queryPath;
          if (path) {
            router.push(`/${path}`);
          }
        }}
        uniqueFieldId="search"
        value={null}
      />
    </Div>
  );
};
export const Layout = (props: {
  pages: MarkdownReaderPage[];
  children: any;
  augmentedWordObject?: MappedObject<AugmentedWord>;
}) => {
  const { pages, children, augmentedWordObject } = props;

  const queryPaths = pages.filter((x) => x.isMenuItem).map((x) => x.queryPath);
  const nestedPathObject = queryPathsArrayToNestedPathObject(queryPaths);
  const menu = nestedPathObjectToNestedMenuRecursive(nestedPathObject);

  const results: AugmentedWord[] = augmentedWordObject
    ? Object.keys(augmentedWordObject).map(
        (key) => augmentedWordObject[key] as AugmentedWord
      )
    : [];

  return (
    <Div className="h-screen grid grid-rows-6">
      <Div className="row-span-6 grid grid-cols-5">
        <Div
          className={`
        col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white`}
          textClassName="dark:text-white"
        >
          {children}
        </Div>
        <Span className="border-l col-span-1 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400">
          <Search results={results} />
          {menu ? (
            <NestedMenu menu={menu} headersClickable={true} />
          ) : (
            "Menu couldn't be found"
          )}
        </Span>
      </Div>
    </Div>
  );
};
