import { AnyModelType } from "./any-model";
import { SlugModelProperties } from "./modelTypes";
import { TimeTypes } from "./time";
export declare type OptionalForCreationKeys<TModel> = Exclude<(TModel extends TimeTypes ? keyof TimeTypes : null) | (TModel extends SlugModelProperties ? "slug" | "language" : null) | keyof AnyModelType, null>;
/**
 * These default keys all don't need to be filled in for creation
 */
export declare type OptionalForCreation<TModel extends {
    [key: string]: any;
}> = OptionalForCreationKeys<TModel> extends keyof TModel ? OptionalForCreationKeys<TModel> : never;
/**
 * Parameters that should not be stored into the database
 */
export declare type ShouldNotBeStored = "operationName" | "projectRelativePath" | "operationRelativePath";
/**
 * Helper generic that lets you make part of a type interface optional
 */
export declare type MakeOptional<Type, Key extends keyof Type> = Omit<Type, Key> & Partial<Pick<Type, Key>>;
/**
 * Use this generic if you want to create models in a typesafe way. Makes unrequired parameters optional.
 *
 * This generic takes into account the datastructure of the model.
 *
 *
 * Check this:
 *
 * ```ts
 *
type Test = OptionalForCreationKeys<{
  // any model type
  id: string;
  operationName: string;
  projectRelativePath: string;
  operationRelativePath: string;

  // //slug
  name: string;
  slug: Slug;
  language: Language;

  // timeTypes
  createdAt: number;
  updatedAt: number;
  deletedAt: number;
  createdFirstAt: number;

  //other
  lalala: string;
  a: string;
  b: string;
}>;
```

If you remove one of the timetypes, these will not be optional for creation anymore because the model doesn't extend TimeTypes. :)
 */
export declare type Creation<TModel extends {
    [key: string]: any;
}> = MakeOptional<TModel, OptionalForCreation<TModel>>;
/**
 * Use this generic if you want to store models in a typesafe way
 *
 * Removes the parameters that should not be stored
 */
export declare type Storing<TModel extends {
    [key: string]: any;
}> = Omit<TModel, ShouldNotBeStored>;
//# sourceMappingURL=generics.d.ts.map