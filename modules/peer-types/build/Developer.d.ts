import { Person } from "./Person";
export interface Developer extends Person {
    achievements: Achievement[];
}
export interface Achievement {
    emoji: string;
    name: string;
    description: string;
    /**
     * in case the developer attained the achievement, this will be set to his level
     */
    level?: number;
    /**
     * if it's quantifyable, you can add the levels here
     */
    levels?: number[];
}
export declare const levelNames: string[];
export declare const achievements: Achievement[];
export declare const developers: Partial<Developer>[];
//# sourceMappingURL=Developer.d.ts.map