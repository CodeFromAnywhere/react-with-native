export declare const getTailwindModules: (options: {
    /**
     * if you are using a sensible monorepo, put the packages with tailwind-based ui here
     */
    packages?: string[] | undefined;
    modules?: string[] | undefined;
    /**
   *  if this is a yarn workspace, put true here
  
   */
    isWorkspace?: boolean | undefined;
}) => string[];
//# sourceMappingURL=getTailwindModules.d.ts.map