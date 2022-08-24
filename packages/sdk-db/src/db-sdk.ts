// THIS FILE HAS BEEN GENERATED

import type { BundleConfig } from "bundle-types";
import type { OperationIndex } from "code-types";
import type { PackageJSON } from "code-types";
import type { TsComment } from "code-types";
import type { TsFunction } from "code-types";
import type { TsInterface } from "code-types";
import type { TsBuildError } from "code-types";
import type { TsLintWarning } from "code-types";
import type { TsExport } from "code-types";
import type { TsImport } from "code-types";
import type { TsVariable } from "code-types";


export type DbModels = { BundleConfig: BundleConfig,OperationIndex: OperationIndex,PackageJSON: PackageJSON,TsComment: TsComment,TsFunction: TsFunction,TsInterface: TsInterface,TsBuildError: TsBuildError,TsLintWarning: TsLintWarning,TsExport: TsExport,TsImport: TsImport,TsVariable: TsVariable };
export const dbModelKeys = [ "BundleConfig","OperationIndex","PackageJSON","TsComment","TsFunction","TsInterface","TsBuildError","TsLintWarning","TsExport","TsImport","TsVariable" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const defaultDbStorageMethods = {
    BundleConfig: "jsonMultiple",
OperationIndex: "jsonSingle",
PackageJSON: "jsonSingle",
TsComment: "jsonMultiple",
TsFunction: "jsonMultiple",
TsInterface: "jsonMultiple",
TsBuildError: "jsonMultiple",
TsLintWarning: "jsonMultiple",
TsVariable: "jsonMultiple",
TsImport: "jsonMultiple",
TsExport: "jsonMultiple"
  };
// THANK YOU
