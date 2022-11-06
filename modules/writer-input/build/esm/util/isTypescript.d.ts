/**

only detect typescript if the string starts with `import`. must be improved later on. It would be great to be able to detect that it's a typescript file even if it contains syntax errors.

 */
export declare const isTypescript: (text: string) => boolean;
