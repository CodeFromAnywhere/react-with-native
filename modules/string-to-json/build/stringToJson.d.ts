#!/usr/bin/env node
import { JSONValue } from "./types";
/**
 * parses a string to a string, number, boolean, null or undefined.
 *
 * optionally you can chooose to force a type...
 *
 * TODO: figure out how I can do this without ts-ignores
 */
export declare const parsePrimitiveJson: <TForceType extends "string" | "number" | "boolean">(value: string, forceType?: TForceType | undefined) => TForceType extends "string" ? string | null | undefined : TForceType extends "number" ? number | null | undefined : TForceType extends "boolean" ? boolean | null | undefined : string | number | boolean | null | undefined;
/**
 * takes any string, and parses it to JSON
 *
 * if you provide (nested) objects, make sure to use the following format:
 *
 * key1: value, key2: another value, key3: 9, key4: false, key5: null, key6: { subkey: true, subkey2: 0 }
 */
export declare const stringToJson: (value: string, isObject?: boolean) => JSONValue;
//# sourceMappingURL=stringToJson.d.ts.map