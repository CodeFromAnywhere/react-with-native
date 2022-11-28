"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createMappedObject=void 0;var mergeObjectsArray_1=require("./mergeObjectsArray"),createMappedObject=function(e,
/**
 Key to make the map from. Must be unique or it could be overwritten. Key must be a string
 */
r,
/**
 * If the result of the mapped object, based on the object should have mapped values, provide this mapfunction to get them.
 */
t){return(0,mergeObjectsArray_1.mergeObjectsArray)(e.map((function(a){var c,p=a[r],s=t?t(a,e):a;return(c={})[p]=s,c})))};
/**
 * Creates a `MappedObject` of an array of any type. `MappedObject`s are great for increasing efficiency to get an item from an array. Especially useful when finds are needed on a specific key match for huge arrays. Instead of finding on the array you can simply get the right property from this object.
 *
 * NB: Don't use this inside of render functions, it's a very slow function, the whole idea is that this makes it faster, so just do it once!
 */exports.createMappedObject=createMappedObject;
//# sourceMappingURL=createMappedObject.js.map