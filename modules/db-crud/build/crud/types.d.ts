import { TsInterface } from "code-types";
import { AugmentedAnyModelType } from "model-types";
export declare type CrudViewProps = {
    tsInterface?: TsInterface;
    data: AugmentedAnyModelType[] | undefined;
    onEndReached?: () => void;
    highlight: Highlight;
    actions: ItemAction[];
};
export declare type Action = {
    name: string;
    emoji: string;
    action: () => any;
};
export declare type ItemAction = {
    name: string;
    emoji: string;
    action: (item: AugmentedAnyModelType) => any;
};
export declare type Highlight = {
    slug?: string;
    id?: string;
};
//# sourceMappingURL=types.d.ts.map