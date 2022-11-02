import { Slug } from "./common";
import { Id } from "./id";
/**
 * This probably doesn't work, but it would be great if it would. This way I'd like to say that any model can have keys that end with "Id". These keys should always refer to Ids from other models.
 * Also, if a model has a key like this, it is inferred that there is also a key without the Id suffix which does or doesn't cointain the actual model specified by the id.
 *
 * If this cannot be done in typescript, it can be convention, and we can create a linter for this.
 *
 * Wooh!
 *
 * ```
const relations: RelationType = {
  helloId: "hoi",
  byeId: "bye",
};
```

The above seems to be working fine, so it IS possible!

TODO: think about it... should the name of the parameter be dependent on the strategy of how the model is stored? Maybe just call it all id, right? We can also make the index a string by just prepending a string to it.
 */
export declare type RelationType = {
    [key: `${string}Id`]: Id | undefined;
    [key: `${string}Slug`]: Slug | undefined;
};
//# sourceMappingURL=RelationType.d.ts.map