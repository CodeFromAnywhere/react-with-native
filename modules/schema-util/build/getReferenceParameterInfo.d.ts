export declare type ReferenceParameterInfo = {
    parameterName: string;
    /**
     * If the parameterName is a reference parameter, this will contain the parameterName that should contain the referenced data, should there be one.
     */
    dataParameterName?: string;
    descriptor: string | undefined;
    keyInModel: string | undefined;
    interfaceName: string | undefined;
    isReferenceMultipleParameter: boolean;
    isReferenceSingleParameter: boolean;
    isReferenceParameter: boolean;
};
/**
 Takes a parameterName and returns information about it according to the convention `{descriptorName}_{modelName}{referenceKey}` where:
 
 - descriptorName with the suffixing underscore is optional
 - referenceKey can be slug, index, or id (or there plural variants)
 - modelName should refer to a database model

 */
export declare const getReferenceParameterInfo: (parameterName: string) => ReferenceParameterInfo;
/**
returns the reference parameterNames...
 

e.g.:
```
todos -> todoSlugs + todoIds
todo -> todoSlug + todoId
```

 */
export declare const getPossibleReferenceParameterNames: (parameterName: string) => string[];
//# sourceMappingURL=getReferenceParameterInfo.d.ts.map