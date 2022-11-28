/**
 * runTestsForOperation(operationName) runs all tests that can be found in an operation. nicely logs and returns which funtions are working or not and why
 *
 * this assumes the index file exports all tests under the `test` constant, which should be done using this framework
 *
 * this also assumes your tests are exported from build/index.js (which means you need to build your code, not transpile, so it's not possible for every type of operation)
 */
export declare const runTestsForOperation: (operationName: string, writeResultsToIndex?: boolean, manualProjectRoot?: string) => Promise<boolean | undefined>;
//# sourceMappingURL=runTestsForOperation.d.ts.map