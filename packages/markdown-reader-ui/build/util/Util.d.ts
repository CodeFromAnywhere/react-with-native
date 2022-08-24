import { NextRouter } from "next/router";
export declare function isEmail(email: string): boolean;
export declare const getQueryStrings: (query: NextRouter["query"]) => {
    [key: string]: string | undefined;
};
/**
 *
 */
export declare const toQueryString: (query?: any) => string;
//# sourceMappingURL=Util.d.ts.map