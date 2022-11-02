// THIS FILE HAS BEEN GENERATED

import type { FunctionExecution } from "code-types";
import type { MarkdownFileConfig } from "code-types";
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
import type { WebsiteCallToAction } from "code-types";
import type { SlugModelType } from "model-types";


export type DbModels = { FunctionExecution: FunctionExecution,MarkdownFileConfig: MarkdownFileConfig,OperationConfig: OperationConfig,OperationIndex: OperationIndex,PackageJson: PackageJson,SocialMediaCallToAction: SocialMediaCallToAction,TsBuildError: TsBuildError,TsComment: TsComment,TsConfig: TsConfig,TsExport: TsExport,TsFunction: TsFunction,TsImport: TsImport,TsInterface: TsInterface,TsLintWarning: TsLintWarning,TsVariable: TsVariable,WebsiteCallToAction: WebsiteCallToAction,SlugModelType: SlugModelType };
export const dbModelKeys = [ "FunctionExecution","MarkdownFileConfig","OperationConfig","OperationIndex","PackageJson","SocialMediaCallToAction","TsBuildError","TsComment","TsConfig","TsExport","TsFunction","TsImport","TsInterface","TsLintWarning","TsVariable","WebsiteCallToAction","SlugModelType" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const modelQueryConfig = {
    FunctionExecution: {
          dbStorageMethod: "jsonMultiple",
          
        },
MarkdownFileConfig: {
          dbStorageMethod: "markdown",
          
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
WebsiteCallToAction: {
          dbStorageMethod: "jsonMultiple",
          
        },
SlugModelType: {
          dbStorageMethod: "jsonMultiple",
          
        }
  };
// THANK YOU
