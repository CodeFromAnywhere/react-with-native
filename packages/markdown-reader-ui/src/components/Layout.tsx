import { Div, P, Span } from "react-with-native";
import {
  NestedMenu,
  queryPathsArrayToNestedPathObject,
  nestedPathObjectToNestedMenuRecursive,
  MenuType,
} from "nested-menu";
import { SelectInput } from "react-with-native-form-inputs";
import {
  AugmentedWord,
  MarkdownReaderPage,
  MarkdownReaderPageProps,
} from "markdown-reader-types";
import {
  publicEnvironmentVariables,
  publicLocalEnvironmentVariables,
} from "sdk-env-public";

import { MappedObject } from "js-util";
import { Item } from "react-with-native-select";
import { useRouter } from "react-with-native-router";
import { useStore } from "../store";
import { ClickableIcon } from "clickable-icon";
import { ALink } from "next-a-link";

/**
 * This is shit....
 */
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

export const Header = (props: {
  publicBundleConfig?: MarkdownReaderPageProps["publicBundleConfig"];
}) => {
  const { publicBundleConfig } = props;
  const title =
    publicLocalEnvironmentVariables.markdownReaderTitle ||
    publicEnvironmentVariables.markdownReaderTitle ||
    publicBundleConfig?.name;

  return (
    <Div
      style={{
        backgroundColor: props.publicBundleConfig?.primaryColor,
        justifyContent: "space-between",
        flex: 1,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <ALink
        href={
          typeof window !== "undefined"
            ? location.protocol + "//" + location.host
            : "#"
        }
        style={{ fontSize: 32 }}
      >
        {props.publicBundleConfig?.emoji}
      </ALink>

      <Div>
        <P className="font-bold text-white ">{title}</P>
        <P className="text-xs text-white italic">
          {props.publicBundleConfig?.description}
        </P>
      </Div>

      {props.publicBundleConfig?.isGitRepoPublic &&
      props.publicBundleConfig.gitRepoUrl ? (
        <ALink target="_blank" href={props.publicBundleConfig.gitRepoUrl}>
          🐱
        </ALink>
      ) : null}
    </Div>
  );
};

export const Layout = (props: {
  publicBundleConfig: MarkdownReaderPageProps["publicBundleConfig"];
  pages: MarkdownReaderPage[];
  children: any;
  augmentedWordObject?: MappedObject<AugmentedWord>;
}) => {
  const { pages, children, augmentedWordObject, publicBundleConfig } = props;

  const queryPaths = pages.filter((x) => x.isMenuItem).map((x) => x.queryPath);
  const nestedPathObject = queryPathsArrayToNestedPathObject(queryPaths);
  const menu = nestedPathObjectToNestedMenuRecursive(nestedPathObject);

  return (
    <Div>
      <Header publicBundleConfig={publicBundleConfig} />

      <MenuWrapper augmentedWordObject={augmentedWordObject} menu={menu}>
        {children}
      </MenuWrapper>
    </Div>
  );
};

/**

TODO: This is a good start, but it can be generalised more. 

 */
export const MenuWrapper = (props: {
  menu: MenuType | undefined;
  children: React.ReactNode;
  augmentedWordObject: MappedObject<AugmentedWord> | undefined;
}) => {
  const { children, menu, augmentedWordObject } = props;

  const [isMobileMenuEnabled, setIsMobileMenuEnabled] = useStore(
    "menu.isMobileMenuEnabled"
  );

  const results: AugmentedWord[] = augmentedWordObject
    ? Object.keys(augmentedWordObject).map(
        (key) => augmentedWordObject[key] as AugmentedWord
      )
    : [];

  const renderMenu = () => {
    return (
      <>
        <Div className="flex flex-row flex-1">
          <Div className="w-full">
            <Search results={results} />
          </Div>

          <Div className="lg:hidden">
            <ClickableIcon
              emoji="╳"
              onClick={() => {
                setIsMobileMenuEnabled(false);
              }}
            />
          </Div>
        </Div>
        {menu ? (
          <NestedMenu menu={menu} headersClickable={true} />
        ) : (
          "Menu couldn't be found"
        )}
      </>
    );
  };

  return (
    <>
      {isMobileMenuEnabled ? (
        <Div className="lg:hidden">{renderMenu()}</Div>
      ) : (
        <Div className="lg:h-screen lg:grid lg:grid-rows-6">
          <Div className="lg:row-span-6 lg:grid lg:grid-cols-5">
            <Div
              className={`lg:col-span-4 overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white`}
              textClassName="dark:text-white"
            >
              {children}
            </Div>
            <Span className="invisible lg:visible border-l lg:col-span-1 lg:overflow-y-auto bg-gray-50 dark:bg-gray-900 dark:text-white border-l-gray-400">
              {renderMenu()}
            </Span>
          </Div>
        </Div>
      )}
    </>
  );
};
