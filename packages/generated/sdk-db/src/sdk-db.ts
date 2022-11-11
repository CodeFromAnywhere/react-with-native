// THIS FILE HAS BEEN GENERATED

import type { BundleConfig } from "bundle-types";
import type { Dataset } from "code-types";
import type { FunctionExecution } from "code-types";
import type { OperationConfig } from "code-types";
import type { OperationIndex } from "code-types";
import type { PackageJson } from "code-types";
import type { SocialMediaCallToAction } from "code-types";
import type { TsBuildError } from "code-types";
import type { TsComment } from "code-types";
import type { TsConfig } from "code-types";
import type { TsExport } from "code-types";
import type { TsFunction } from "code-types";
import type { TsImport } from "code-types";
import type { TsInterface } from "code-types";
import type { TsLintWarning } from "code-types";
import type { TsVariable } from "code-types";
import type { WebMarkdownFile } from "code-types";
import type { WebsiteCallToAction } from "code-types";
import type { KvmdWord } from "language-types";
import type { MarkdownWord } from "language-types";
import type { NepaliEnglishTranslationMatrix } from "language-types";
import type { Statement } from "language-types";
import type { TokiPonaMatrix } from "language-types";
import type { Translation } from "language-types";
import type { Word } from "language-types";
import type { WordCategory } from "language-types";
import type { WordCombination } from "language-types";
import type { WordMatrix } from "language-types";
import type { SlugModelType } from "model-types";


export type DbModels = { BundleConfig: BundleConfig,Dataset: Dataset,FunctionExecution: FunctionExecution,OperationConfig: OperationConfig,OperationIndex: OperationIndex,PackageJson: PackageJson,SocialMediaCallToAction: SocialMediaCallToAction,TsBuildError: TsBuildError,TsComment: TsComment,TsConfig: TsConfig,TsExport: TsExport,TsFunction: TsFunction,TsImport: TsImport,TsInterface: TsInterface,TsLintWarning: TsLintWarning,TsVariable: TsVariable,WebMarkdownFile: WebMarkdownFile,WebsiteCallToAction: WebsiteCallToAction,KvmdWord: KvmdWord,MarkdownWord: MarkdownWord,NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix,Statement: Statement,TokiPonaMatrix: TokiPonaMatrix,Translation: Translation,Word: Word,WordCategory: WordCategory,WordCombination: WordCombination,WordMatrix: WordMatrix,SlugModelType: SlugModelType };
export const dbModelKeys = [ "BundleConfig","Dataset","FunctionExecution","OperationConfig","OperationIndex","PackageJson","SocialMediaCallToAction","TsBuildError","TsComment","TsConfig","TsExport","TsFunction","TsImport","TsInterface","TsLintWarning","TsVariable","WebMarkdownFile","WebsiteCallToAction","KvmdWord","MarkdownWord","NepaliEnglishTranslationMatrix","Statement","TokiPonaMatrix","Translation","Word","WordCategory","WordCombination","WordMatrix","SlugModelType" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const modelQueryConfig = {
    BundleConfig: {
          dbStorageMethod: "jsonSingle",
          
        },
Dataset: {
          dbStorageMethod: "jsonMultiple",
          
        },
FunctionExecution: {
          dbStorageMethod: "jsonMultiple",
          
        },
OperationConfig: {
          dbStorageMethod: "markdown",
          operationRelativePath: "OPERATION.md",
        },
OperationIndex: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "db/operation-index.json",
        },
PackageJson: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "package.json",
        },
SocialMediaCallToAction: {
          dbStorageMethod: "markdown",
          
        },
TsBuildError: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsComment: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsConfig: {
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "tsconfig.json",
        },
TsExport: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsFunction: {
          dbStorageMethod: "jsonSingle",
          
        },
TsImport: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsInterface: {
          dbStorageMethod: "jsonSingle",
          
        },
TsLintWarning: {
          dbStorageMethod: "jsonMultiple",
          
        },
TsVariable: {
          dbStorageMethod: "jsonSingle",
          
        },
WebMarkdownFile: {
          dbStorageMethod: "markdown",
          
        },
WebsiteCallToAction: {
          dbStorageMethod: "jsonMultiple",
          
        },
KvmdWord: {
          dbStorageMethod: "keyValueMarkdown",
          
        },
MarkdownWord: {
          dbStorageMethod: "markdown",
          
        },
NepaliEnglishTranslationMatrix: {
          dbStorageMethod: "jsonMultiple",
          
        },
Statement: {
          dbStorageMethod: "markdown",
          
        },
TokiPonaMatrix: {
          dbStorageMethod: "jsonMultiple",
          
        },
Translation: {
          dbStorageMethod: "jsonMultiple",
          
        },
Word: {
          dbStorageMethod: "jsonMultiple",
          
        },
WordCategory: {
          dbStorageMethod: "jsonMultiple",
          
        },
WordCombination: {
          dbStorageMethod: "jsonMultiple",
          
        },
WordMatrix: {
          dbStorageMethod: "jsonMultiple",
          
        },
SlugModelType: {
          dbStorageMethod: "jsonMultiple",
          
        }
  };
// THANK YOU
