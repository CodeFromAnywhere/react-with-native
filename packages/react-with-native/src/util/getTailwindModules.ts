export const getTailwindModules = (options: {
  /**
   * if you are using a sensible monorepo, put the packages with tailwind-based ui here
   */
  packages?: string[] /**
  if you are using any tailwind-based node-modules, put them here.
 */;
  modules?: string[];
  /**
 *  if this is a yarn workspace, put true here

 */
  isWorkspace?: boolean;
}) => {
  const packages =
    options.packages?.map((module) => {
      return `../../packages/${module}/src/**/*.{ts,tsx,js,jsx}`;
    }) || [];

  const modules =
    options.modules?.map((module) => {
      return options.isWorkspace
        ? `../../node_modules/${module}/{src,build,dist}/**/*.{ts,tsx,js,jsx}`
        : `./node_modules/${module}/{src,build,dist}/**/*.{ts,tsx,js,jsx}`;
    }) || [];

  return packages?.concat(modules);
};
