// THIS FILE HAS BEEN GENERATED

import type { AiDemoApp } from "ai-types";
import type { ContextualPrompt } from "ai-types";
import type { ContextualPromptResult } from "ai-types";
import type { AuthorizationModel } from "auth-types";
import type { BundleConfig } from "bundle-types";
import type { FrontBackBundle } from "bundle-types";
import type { Dataset } from "code-types";
import type { FunctionExecution } from "code-types";
import type { Operation } from "code-types";
import type { TsBuildError } from "code-types";
import type { TsComment } from "code-types";
import type { TsConfig } from "code-types";
import type { TsExport } from "code-types";
import type { TsFunction } from "code-types";
import type { TsImport } from "code-types";
import type { TsInterface } from "code-types";
import type { TsLintWarning } from "code-types";
import type { TsVariable } from "code-types";
import type { TypescriptFile } from "code-types";
import type { Address } from "geo-types";
import type { Area } from "geo-types";
import type { City } from "geo-types";
import type { Country } from "geo-types";
import type { Location } from "geo-types";
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
import type { MarkdownCallToAction } from "markdown-types";
import type { WebMarkdownFile } from "markdown-types";
import type { WebsiteHeader } from "markdown-types";
import type { CategoryModelType } from "model-types";
import type { SlugModelType } from "model-types";
import type { Device } from "peer-types";
import type { Group } from "peer-types";
import type { PageVisit } from "peer-types";
import type { PeerMessage } from "peer-types";
import type { Person } from "peer-types";
import type { Persona } from "peer-types";
import type { PersonInformation } from "peer-types";
import type { PersonInformationValue } from "peer-types";
import type { PersonPlatformConnection } from "peer-types";
import type { Platform } from "peer-types";
import type { Interest } from "social-media-types";
import type { MediaChannel } from "social-media-types";
import type { MediaCredential } from "social-media-types";
import type { MediaPost } from "social-media-types";
import type { SelfSprintReview } from "todo-types";
import type { TodoFile } from "todo-types";
import type { TodoOffer } from "todo-types";


export type DbModels = { AiDemoApp: AiDemoApp,ContextualPrompt: ContextualPrompt,ContextualPromptResult: ContextualPromptResult,AuthorizationModel: AuthorizationModel,BundleConfig: BundleConfig,FrontBackBundle: FrontBackBundle,Dataset: Dataset,FunctionExecution: FunctionExecution,Operation: Operation,TsBuildError: TsBuildError,TsComment: TsComment,TsConfig: TsConfig,TsExport: TsExport,TsFunction: TsFunction,TsImport: TsImport,TsInterface: TsInterface,TsLintWarning: TsLintWarning,TsVariable: TsVariable,TypescriptFile: TypescriptFile,Address: Address,Area: Area,City: City,Country: Country,Location: Location,KvmdWord: KvmdWord,MarkdownWord: MarkdownWord,NepaliEnglishTranslationMatrix: NepaliEnglishTranslationMatrix,Statement: Statement,TokiPonaMatrix: TokiPonaMatrix,Translation: Translation,Word: Word,WordCategory: WordCategory,WordCombination: WordCombination,WordMatrix: WordMatrix,MarkdownCallToAction: MarkdownCallToAction,WebMarkdownFile: WebMarkdownFile,WebsiteHeader: WebsiteHeader,CategoryModelType: CategoryModelType,SlugModelType: SlugModelType,Device: Device,Group: Group,PageVisit: PageVisit,PeerMessage: PeerMessage,Person: Person,Persona: Persona,PersonInformation: PersonInformation,PersonInformationValue: PersonInformationValue,PersonPlatformConnection: PersonPlatformConnection,Platform: Platform,Interest: Interest,MediaChannel: MediaChannel,MediaCredential: MediaCredential,MediaPost: MediaPost,SelfSprintReview: SelfSprintReview,TodoFile: TodoFile,TodoOffer: TodoOffer };
export const dbModelKeys = [ "AiDemoApp","ContextualPrompt","ContextualPromptResult","AuthorizationModel","BundleConfig","FrontBackBundle","Dataset","FunctionExecution","Operation","TsBuildError","TsComment","TsConfig","TsExport","TsFunction","TsImport","TsInterface","TsLintWarning","TsVariable","TypescriptFile","Address","Area","City","Country","Location","KvmdWord","MarkdownWord","NepaliEnglishTranslationMatrix","Statement","TokiPonaMatrix","Translation","Word","WordCategory","WordCombination","WordMatrix","MarkdownCallToAction","WebMarkdownFile","WebsiteHeader","CategoryModelType","SlugModelType","Device","Group","PageVisit","PeerMessage","Person","Persona","PersonInformation","PersonInformationValue","PersonPlatformConnection","Platform","Interest","MediaChannel","MediaCredential","MediaPost","SelfSprintReview","TodoFile","TodoOffer" ] as const;
export type DbModelEnum = typeof dbModelKeys[number];
export const modelQueryConfig = {
    AiDemoApp: {
          
          dbStorageMethod: "jsonSingle",
          
        },
ContextualPrompt: {
          
          dbStorageMethod: "jsonSingle",
          
        },
ContextualPromptResult: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
AuthorizationModel: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
BundleConfig: {
          
          dbStorageMethod: "jsonSingle",
          
        },
FrontBackBundle: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Dataset: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
FunctionExecution: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Operation: {
          operationName: "*",
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "package.json",
        },
TsBuildError: {
          operationName: "*",
          dbStorageMethod: "jsonMultiple",
          
        },
TsComment: {
          operationName: "*",
          dbStorageMethod: "jsonMultiple",
          
        },
TsConfig: {
          operationName: "*",
          dbStorageMethod: "jsonSingle",
          operationRelativePath: "tsconfig.json",
        },
TsExport: {
          operationName: "*",
          dbStorageMethod: "jsonMultiple",
          
        },
TsFunction: {
          operationName: "*",
          dbStorageMethod: "jsonSingle",
          
        },
TsImport: {
          operationName: "*",
          dbStorageMethod: "jsonMultiple",
          
        },
TsInterface: {
          operationName: "*",
          dbStorageMethod: "jsonSingle",
          
        },
TsLintWarning: {
          operationName: "*",
          dbStorageMethod: "jsonMultiple",
          
        },
TsVariable: {
          operationName: "*",
          dbStorageMethod: "jsonSingle",
          
        },
TypescriptFile: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Address: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Area: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
City: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Country: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Location: {
          
          dbStorageMethod: "keyValueMarkdown",
          
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
MarkdownCallToAction: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
WebMarkdownFile: {
          
          dbStorageMethod: "markdown",
          
        },
WebsiteHeader: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
CategoryModelType: {
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
SlugModelType: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Device: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Group: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
PageVisit: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
PeerMessage: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Person: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Persona: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
PersonInformation: {
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
PersonInformationValue: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
PersonPlatformConnection: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Platform: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
Interest: {
          
          dbStorageMethod: "keyValueMarkdown",
          
        },
MediaChannel: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
MediaCredential: {
          
          dbStorageMethod: "jsonMultiple",
          
        },
MediaPost: {
          
          dbStorageMethod: "markdown",
          
        },
SelfSprintReview: {
          
          dbStorageMethod: "jsonSingle",
          
        },
TodoFile: {
          
          dbStorageMethod: "markdown",
          
        },
TodoOffer: {
          
          dbStorageMethod: "jsonMultiple",
          
        }
  };
// THANK YOU
