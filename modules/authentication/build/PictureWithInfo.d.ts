export declare type PictureWithInfo<T = any> = {
    pictureUrl?: string;
    info: string;
    /**
     * data to be provided on selecting an item
     */
    data?: T;
    /**
     * If given, will go to this url on selecting this dropdown item
     */
    url?: string;
    isCurrent?: boolean;
};
//# sourceMappingURL=PictureWithInfo.d.ts.map