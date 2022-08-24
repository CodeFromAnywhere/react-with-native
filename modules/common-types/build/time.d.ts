/**Time

Time can be stored in various ways but in my experience it is, again, best to keep it simple and just have one way to store time.
I can think about this for hours, but my intuition goes towards using the same format as Date.now() because it is a very small format and is easy to read.

It is the amount of ms since 1970.

I could argue to store it in seconds since 1970 since there are few applications of doing ms, but maybe we do, and it's just 30% bigger. No problem.

Therefore, let's store all time values in the format Date.now()
*/
export declare type Time = number;
export declare type UpdatedAt = Time;
export declare type CreatedAt = Time;
export declare type DeletedAt = Time;
/**
 * in some cases, data can be created before it was created in our system. In this case, use CreatedFirstAt if this information is important.
 */
export declare type CreatedFirstAt = Time;
export declare const generateTime: () => Time;
export declare type TimeTypes = {
    createdAt: CreatedAt;
    updatedAt: UpdatedAt;
    deletedAt: DeletedAt;
    createdFirstAt: CreatedFirstAt;
};
//# sourceMappingURL=time.d.ts.map