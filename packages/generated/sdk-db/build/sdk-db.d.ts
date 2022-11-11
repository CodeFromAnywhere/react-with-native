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
export declare type DbModels = {
    BundleConfig: BundleConfig;
    Dataset: Dataset;
    FunctionExecution: FunctionExecution;
    OperationConfig: OperationConfig;
    OperationIndex: OperationIndex;
    PackageJson: PackageJson;
    SocialMediaCallToAction: SocialMediaCallToAction;
    TsBuildError: TsBuildError;
    TsComment: TsComment;
    TsConfig: TsConfig;
    TsExport: TsExport;
    TsFunction: TsFunction;
    TsImport: TsImport;
    TsInterface: TsInterface;
    TsLintWarning: TsLintWarning;
    TsVariable: TsVariable;
    WebMarkdownFile: WebMarkdownFile;
    WebsiteCallToAction: WebsiteCallToAction;
    KvmdWord: KvmdWord;
    MarkdownWord: MarkdownWord;
    NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix;
    Statement: Statement;
    TokiPonaMatrix: TokiPonaMatrix;
    Translation: Translation;
    Word: Word;
    WordCategory: WordCategory;
    WordCombination: WordCombination;
    WordMatrix: WordMatrix;
    SlugModelType: SlugModelType;
};
export declare const dbModelKeys: readonly ["BundleConfig", "Dataset", "FunctionExecution", "OperationConfig", "OperationIndex", "PackageJson", "SocialMediaCallToAction", "TsBuildError", "TsComment", "TsConfig", "TsExport", "TsFunction", "TsImport", "TsInterface", "TsLintWarning", "TsVariable", "WebMarkdownFile", "WebsiteCallToAction", "KvmdWord", "MarkdownWord", "NepaliEnglishTranslationMatrix", "Statement", "TokiPonaMatrix", "Translation", "Word", "WordCategory", "WordCombination", "WordMatrix", "SlugModelType"];
export declare type DbModelEnum = typeof dbModelKeys[number];
export declare const modelQueryConfig: {
    BundleConfig: {
        dbStorageMethod: string;
    };
    Dataset: {
        dbStorageMethod: string;
    };
    FunctionExecution: {
        dbStorageMethod: string;
    };
    OperationConfig: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    OperationIndex: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    PackageJson: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    SocialMediaCallToAction: {
        dbStorageMethod: string;
    };
    TsBuildError: {
        dbStorageMethod: string;
    };
    TsComment: {
        dbStorageMethod: string;
    };
    TsConfig: {
        dbStorageMethod: string;
        operationRelativePath: string;
    };
    TsExport: {
        dbStorageMethod: string;
    };
    TsFunction: {
        dbStorageMethod: string;
    };
    TsImport: {
        dbStorageMethod: string;
    };
    TsInterface: {
        dbStorageMethod: string;
    };
    TsLintWarning: {
        dbStorageMethod: string;
    };
    TsVariable: {
        dbStorageMethod: string;
    };
    WebMarkdownFile: {
        dbStorageMethod: string;
    };
    WebsiteCallToAction: {
        dbStorageMethod: string;
    };
    KvmdWord: {
        dbStorageMethod: string;
    };
    MarkdownWord: {
        dbStorageMethod: string;
    };
    NepaliEnglishTranslationMatrix: {
        dbStorageMethod: string;
    };
    Statement: {
        dbStorageMethod: string;
    };
    TokiPonaMatrix: {
        dbStorageMethod: string;
    };
    Translation: {
        dbStorageMethod: string;
    };
    Word: {
        dbStorageMethod: string;
    };
    WordCategory: {
        dbStorageMethod: string;
    };
    WordCombination: {
        dbStorageMethod: string;
    };
    WordMatrix: {
        dbStorageMethod: string;
    };
    SlugModelType: {
        dbStorageMethod: string;
    };
};
//# sourceMappingURL=sdk-db.d.ts.map