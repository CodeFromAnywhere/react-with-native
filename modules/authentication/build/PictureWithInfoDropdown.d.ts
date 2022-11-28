/// <reference types="react" />
import { PictureWithInfo } from "./PictureWithInfo";
/**
 *
 * Dumb (presentational) component for a picture with info and a dropdown
 */
export declare const PictureWithInfoDropdown: <T extends unknown>(props: {
    current: PictureWithInfo<T>;
    dropdown: PictureWithInfo<T>[];
    extraItems?: {
        onClick: () => void;
        text: string;
    }[] | undefined;
    isLoading: boolean;
    /**
     * if not given, dropdown is opened
     */
    onClickCurrent?: (() => void) | undefined;
    onSelectDropdownItem: (selected: T | undefined) => void;
}) => JSX.Element;
//# sourceMappingURL=PictureWithInfoDropdown.d.ts.map