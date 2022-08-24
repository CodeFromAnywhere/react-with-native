/**
 * azAZ09 characters are easy to copy and provide 62 characters.
the goal of an id is to be unique.

the advantage of a random id compared to an numeric id starting with 1 with auto increment is that you can set them up decentralised.

the change of duplicate ids gets bigger once you make them shorter
the change of finding an existing id gets bigger once you make them shorter

An Id with 12 characters would provide 3.22e21 combinations.

What is the change of duplicate ids? This depends on the amount of identifyable items in the data
What is the change of guessing an id? This depends on speed of a brute force attack and the amount of available datapoints. If you can guess 10000 times per second, you can make 864.000.000 guesses. A billion guesses on a dataset of a billion datapoints yields 3226 correct ids on average.

Why make an id short? I don't know if there's an important reason.

All in all, I think we should make ids 24 characters by default. This would make it very easy to store, yet, with more than E42 combinations, make it nearly impossible to get duplication or brute force hits.

An id would look like this:

```
{
    "id": "sk2EcW9AkZpksk2EcW9AkZpk"
}
```

Looks good to me!
Don't think about it and just keep it simple.
We can always migrate later to a bigger amount, but I don't see good reason to keep it smaller than this.

 */
export declare type Id = string;
export declare const generateRandomString: (length: number) => string;
export declare const generateId: () => Id;
/**
 * generates a password. By default, uses a length of 14
 */
export declare function generatePassword(passwordLength?: number): string;
//# sourceMappingURL=id.d.ts.map