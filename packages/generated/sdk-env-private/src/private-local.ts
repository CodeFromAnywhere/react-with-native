import { privateEnvironmentVariables } from "./private";
// Optionally, overwrite some of your environent variables locally here. Only applied in development. NB: When working in a team, it may be useful to .gitignore this file!
export const privateLocalEnvironmentVariables: Partial<typeof privateEnvironmentVariables> = {};