export declare type ReferenceParameterInfo = {
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
//# sourceMappingURL=getReferenceParameterInfo.d.ts.map