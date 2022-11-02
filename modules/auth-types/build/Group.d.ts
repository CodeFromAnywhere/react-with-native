import { SlugModelType } from "model-types";
import { Authorization } from "./Authorization";
/**

A `Person` is able to be part of one or multiple `Group`s.
A `Device` without `Person` is just part of group `unidentified` and can only access `public` info and features.
`Group`s and individual `Person`s can be given `Authorization`

Functions that require authorization can have

`AUTH-[GROUP]: authorization1, authorization2, etc.` in their doc-comment


*/
export interface Group extends SlugModelType {
    authorizations: Authorization[];
}
//# sourceMappingURL=Group.d.ts.map