import { ClickableIcon } from "clickable-icon";
import { getFolderJs } from "fs-util-js";
import { MappedObject } from "js-util";
import { renderMarkdownContent } from "markdown";
import { AugmentedWord } from "markdown-reader-types";
import { Div, P } from "react-with-native";
import { isDev } from "server-api-url";
import { useStore } from "../store";
export const AugmentedWordComponent = (props: {
  augmentedWord: AugmentedWord;
  augmentedWordObject: MappedObject<AugmentedWord>;
}) => {
  const { augmentedWord, augmentedWordObject } = props;

  const projectRelativeBaseFolderPath = getFolderJs(
    augmentedWord.projectRelativeMarkdownSourcePath
  )!;

  const projectRelativeMarkdownFilePath =
    augmentedWord.projectRelativeMarkdownSourcePath;
  return (
    <Div className="border border-gray-500 rounded-md m-2 p-2">
      <P className="font-bold">{augmentedWord.word}</P>
      {augmentedWord.spoiler ? (
        <P>
          {renderMarkdownContent(augmentedWord.spoiler, {
            isDev,
            isStatic: false,
            projectRelativeMarkdownFilePath,
            projectRelativeBaseFolderPath,
            augmentedWordObject,
          })}
        </P>
      ) : null}
    </Div>
  );
};
export const Dictionary = (props: {
  augmentedWordObject: MappedObject<AugmentedWord>;
  word?: string;
}) => {
  const [isMobileMenuEnabled, setIsMobileMenuEnabled] = useStore(
    "menu.isMobileMenuEnabled"
  );

  const { augmentedWordObject, word } = props;

  const augmentedWord = word ? augmentedWordObject[word] : undefined;

  return (
    <>
      <Div className="lg:hidden">
        <Div className="flex flex-row justify-between px-4">
          <Div />
          <ClickableIcon
            emoji="⃛"
            onClick={() => {
              setIsMobileMenuEnabled(true);
            }}
          />
        </Div>
      </Div>

      <Div className="p-4">
        {augmentedWord ? (
          <Div className="bg-blue-200 p-4 border border-blue-800 rounded-xl mb-20">
            <AugmentedWordComponent
              augmentedWordObject={augmentedWordObject}
              augmentedWord={augmentedWord}
            />
          </Div>
        ) : null}

        <P className="text-3xl">Dictionary</P>
        {Object.keys(augmentedWordObject).map((word, index) => {
          const augmentedWord = augmentedWordObject[word];

          if (!augmentedWord) return null;
          return (
            <AugmentedWordComponent
              key={`aug${index}`}
              augmentedWordObject={augmentedWordObject}
              augmentedWord={augmentedWord}
            />
          );
        })}
      </Div>
    </>
  );
};
